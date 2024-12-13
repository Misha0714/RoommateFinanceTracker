package com.example.demo.service;

import com.example.demo.group.Group;
import com.example.demo.model.Expense;
import com.example.demo.repository.ExpenseRepository;
import com.example.demo.user.User;
//import com.example.demo.user.User;
import com.example.demo.user.UserRepository;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class ExpenseService {
    private final ExpenseRepository expenseRepository;
    private final UserRepository userRepository;  
    //private final Group currentGroup;


    
    @Autowired
    public ExpenseService(ExpenseRepository expenseRepository, UserRepository userRepository) {   //, UserService userService, Group currentGroup) {
       this.expenseRepository = expenseRepository;
       this.userRepository = userRepository;
       // this.currentGroup = currentGroup;
    }

    public Expense createExpense(Expense expense) {
       // expense.setGroupId(currentGroup.getId().longValue()); 
        expense.setSettled(false);

        return expenseRepository.save(expense);
    }

    
    

    public List<Expense> getExpensesByUserId(Long userId) {
        return expenseRepository.findByUserId(userId);
    }

    public List<Expense> getExpensesByGroupId(Long groupId) {
        return expenseRepository.findByGroupId(groupId);
    }

    public void deleteExpense(Long id) {
        expenseRepository.deleteById(id);
    }

    public Map<String, Double> getAmountsOwedToUserWithEmails(Long userId) {
        List<Expense> expenses = expenseRepository.findByPayerId(userId);
    
        // Map to store email -> total amount owed
        Map<String, Double> amountsOwed = new HashMap<>();
    
        for (Expense expense : expenses) {
            if (!expense.isSettled()) { // Only consider unsettled expenses
                if (expense.getUserId() != null) {
					// Use UserRepository to fetch the user
                    Integer userIdAsInteger = expense.getUserId().intValue();                	
                    Optional<User> userOptional = userRepository.findById(userIdAsInteger);
                    
                    if (userOptional.isPresent()) {
                        User user = userOptional.get();
                        String email = user.getEmail();
                        amountsOwed.put(
                            email,
                            amountsOwed.getOrDefault(email, 0.0) + expense.getAmount().doubleValue()
                        );
                    }
                }
            }
        }
    
        return amountsOwed;
    }
    

}
