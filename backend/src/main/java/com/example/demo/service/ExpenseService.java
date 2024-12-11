package com.example.demo.service;

import com.example.demo.model.Expense;
import com.example.demo.repository.ExpenseRepository;
import com.example.user.User;
import com.example.group.Group;
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
    private final User currentUser;
    private final Group currentGroup;


    
    @Autowired
    public ExpenseService(ExpenseRepository expenseRepository, User currentUser, Group currentGroup) {
        this.expenseRepository = expenseRepository;
        this.currentUser = currentUser;
        this.currentGroup = currentGroup;
    }

    public Expense createExpense(Expense expense) {
        expense.setUserId(currentUser.getId().longValue());
        expense.setGroupId(currentGroup.getId().longValue()); 
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

        // Get all expenses where others owe the specified user
    public List<Expense> getExpensesOwedToUser(Long userId) {
        return expenseRepository.findByPayerId(userId).stream()
                .filter(expense -> !expense.isSettled()) // Only include unsettled expenses
                .collect(Collectors.toList());
    }
    

}
