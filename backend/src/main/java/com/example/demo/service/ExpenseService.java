package com.example.demo.service;

import com.example.demo.model.Expense;
import com.example.demo.repository.ExpenseRepository;
import com.example.user.User;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;

@Service
@Transactional
public class ExpenseService {
    private final ExpenseRepository expenseRepository;
    private final User user;
   
   
    
    
    
    @Autowired
   public ExpenseService(ExpenseRepository expenseRepository, User user) {
   // public ExpenseService(ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
        this.user = user;
    }

    
    public Expense createExpense(Expense expense) {
        // Set the current user's ID
        expense.setUserId(User.getId());
        // Ensure new expense is not settled
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
    

}
