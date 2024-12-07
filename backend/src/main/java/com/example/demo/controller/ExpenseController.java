package com.example.demo.controller;

import com.example.demo.model.Expense;
import java.math.BigDecimal;
import java.time.LocalDate;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.http.ResponseEntity;
import com.example.demo.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/expenses")
@CrossOrigin(origins = "*")
public class ExpenseController {
    private final ExpenseService expenseService;

    @Autowired
    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @PostMapping
    public ResponseEntity<Expense> createExpense(@RequestBody Expense expense) {
        // Frontend should not send userId or expenseId
        expense.setUserId(null);  // Will be set in service
        expense.setExpenseId(null);  // Will be auto-generated
        expense.setSettled(false);  // New expense is never settled
        return ResponseEntity.ok(expenseService.createExpense(expense));
    }


    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Expense>> getExpensesByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(expenseService.getExpensesByUserId(userId));
    }

    @GetMapping("/group/{groupId}")
    public ResponseEntity<List<Expense>> getExpensesByGroupId(@PathVariable Long groupId) {
        return ResponseEntity.ok(expenseService.getExpensesByGroupId(groupId));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteExpense(@PathVariable Long id) {
        expenseService.deleteExpense(id);
        return ResponseEntity.ok().build();
    }
    
    
    @GetMapping("/test/regular")
    public ResponseEntity<Expense> testCreateRegularExpense() {
        Expense expense = new Expense();
        expense.setGroupId(1L);
        expense.setPayerId(2L);
        expense.setAmount(new BigDecimal("100.50"));
        expense.setDescription("Test Regular Expense");
        expense.setCategory("Test");
        expense.setDueDate(LocalDate.now().plusDays(7));
  
        
        return ResponseEntity.ok(expenseService.createExpense(expense));
    }


}