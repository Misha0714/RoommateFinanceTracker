package com.example.demo.controller;

import com.example.demo.group.Group;
import com.example.demo.model.Expense;
import com.example.demo.model.Payment;
import com.example.demo.model.LoginRequest;
import com.example.demo.service.ExpenseService;
import com.example.demo.service.PaymentService;
import com.example.demo.user.User;
import com.example.demo.user.UserService;
import com.example.ApiResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class BackendController {
    private UserService userService = null;
    private ExpenseService expenseService = null;
    private PaymentService paymentService = null;

    public BackendController(UserService userService, ExpenseService expenseService, PaymentService paymentService) {
        this.userService = userService;
        this.expenseService = expenseService;
        this.paymentService = paymentService;
    }

    @PostMapping("/register")
    public ResponseEntity<ApiResponse> registerUser(@RequestBody User user) {
        if (userService.findByUsername(user.getUsername()).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(new ApiResponse("Username already exists: " + user.getUsername()));
        }
        User registeredUser = userService.register(user);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new ApiResponse("User registered successfully", registeredUser));
    }
    
    

    @PostMapping("/login")
    public ResponseEntity<ApiResponse> loginUser(@RequestBody User user) {
        Optional<User> existingUser = userService.findByUsername(user.getUsername());
        
        if (existingUser.isPresent() && existingUser.get().getPassword().equals(user.getPassword())) {
            return ResponseEntity.ok(new ApiResponse("Login successful", existingUser.get()));
        }
        
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(new ApiResponse("Invalid credentials"));
    }
    
    
    
    
 // 3. Create Expense
    @PostMapping("/expense")
    public ResponseEntity<Expense> createExpense(@RequestParam String creatorUsername,
                                                 @RequestParam String creatorPassword,
                                                 @RequestParam String description,
                                                 @RequestParam String category,
                                                 @RequestParam BigDecimal amount,
                                                 @RequestParam String payerUsername,
                                                 @RequestParam String dueDate) {
        Optional<User> creator = userService.findByUsername(creatorUsername);
        if (creator.isPresent() && creator.get().getPassword().equals(creatorPassword)) {
            Optional<User> payer = userService.findByUsername(payerUsername);
            if (payer.isPresent()) {
                Expense expense = new Expense();
                expense.setUserId(creator.get().getId().longValue());
                expense.setPayerId(payer.get().getId().longValue());
                expense.setDescription(description);
                expense.setCategory(category);
                
                
                //change amount  to send to expense splitting logic
                expense.setAmount(amount);
                expense.setDueDate(LocalDate.parse(dueDate));
                Expense createdExpense = expenseService.createExpense(expense);
                return ResponseEntity.status(HttpStatus.CREATED).body(createdExpense);
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }


    // 4. Get All Expenses for a User
    @GetMapping("/expenses/user")
    public ResponseEntity<ApiResponse> getExpensesByUser(@RequestParam String username,
                                                         @RequestParam String password) {
        Optional<User> user = userService.findByUsername(username);
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            List<Expense> expenses = expenseService.getExpensesByUserId(user.get().getId().longValue());
            ApiResponse response = new ApiResponse("Expenses fetched successfully");
            response.setUser(user.get()); // Includes the user's email
            response.setExpenses(expenses); // Attach expenses to the response
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ApiResponse("Invalid credentials"));
    }

 // 5. Get All Expenses for a Group
    @GetMapping("/expenses/group")
    public ResponseEntity<List<Expense>> getExpensesByGroup(@RequestParam String groupName,
                                                            @RequestParam String username,
                                                            @RequestParam String password) {
        Optional<User> user = userService.findByUsername(username);
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            try {
                // Extract groupId from the groupName
                if (groupName.startsWith("group ")) {
                    Long groupId = Long.parseLong(groupName.split(" ")[1]); // Extract the number after "group "

                    // Fetch expenses for the group
                    return ResponseEntity.ok(expenseService.getExpensesByGroupId(groupId));
                }
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null); // Invalid group name format
            } catch (NumberFormatException e) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null); // Unable to parse group ID
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }


    // 6. Create Payment
    @PostMapping("/payment")
    public ResponseEntity<Payment> createPayment(@RequestParam String username,
                                                 @RequestParam String password,
                                                 @RequestParam Long expenseId,
                                                 @RequestParam BigDecimal amount) {
        Optional<User> user = userService.findByUsername(username);
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            Payment payment = new Payment();
            payment.setPayerId(user.get().getId().longValue());
            payment.setExpenseId(expenseId);
            payment.setAmount(amount);
            Payment createdPayment = paymentService.createPayment(payment);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdPayment);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    // 7. Get All Payments by Payer
    @GetMapping("/payments/payer")
    public ResponseEntity<List<Payment>> getPaymentsByPayer(@RequestParam String username,
                                                            @RequestParam String password) {
        Optional<User> user = userService.findByUsername(username);
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return ResponseEntity.ok(paymentService.getPaymentsByPayerId(user.get().getId().longValue()));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    // 8. Get All Payments by Expense
    @GetMapping("/payments/expense")
    public ResponseEntity<List<Payment>> getPaymentsByExpense(@RequestParam Long expenseId) {
        return ResponseEntity.ok(paymentService.getPaymentsByExpenseId(expenseId));
    }
 
 // 9. Get Amount Owed to a User
    @GetMapping("/expenses/owed")
    public ResponseEntity<ApiResponse> getAmountsOwedToUser(@RequestParam String username,
                                                            @RequestParam String password) {
        Optional<User> user = userService.findByUsername(username);
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            Long userId = user.get().getId().longValue();

            // Fetch amounts owed along with emails
            Map<String, Double> amountsOwed = expenseService.getAmountsOwedToUserWithEmails(userId);

            ApiResponse response = new ApiResponse("Amounts owed to user fetched successfully");
            response.setUser(user.get());
            response.setAmountsOwed(amountsOwed); // Include the email -> amount map in the response

            return ResponseEntity.ok(response);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ApiResponse("Invalid credentials"));
    }
    
 // 10. Get All Groups for a User
    @GetMapping("/groups/user")
    public ResponseEntity<ApiResponse> getGroupsForUser(@RequestParam String username,
                                                        @RequestParam String password) {
        Optional<User> user = userService.findByUsername(username);
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            List<Group> groups = user.get().getGroups(); // Assuming User has a relationship with Group
            ApiResponse response = new ApiResponse("Groups fetched successfully");
            response.setUser(user.get());
            response.setGroups(groups); // Add groups to the response
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ApiResponse("Invalid credentials"));
    }
    
    


    
}

