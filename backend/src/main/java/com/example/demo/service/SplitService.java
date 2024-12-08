package com.example.demo.service;

import org.springframework.stereotype.Service;


import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import com.example.demo.model.Expense;
import com.example.demo.model.ExpenseShare;

@Service
public class SplitService {

    public List<Expense> splitCustomizedExpense(Long groupId, Long creatorId, String description, String category,
                                                BigDecimal totalAmount, List<ExpenseShare> shares, LocalDate dueDate) {
        List<Expense> expenses = new ArrayList<>();

        BigDecimal sumOfShares = shares.stream()
                .map(ExpenseShare::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        if (sumOfShares.compareTo(totalAmount) != 0) {
            throw new IllegalArgumentException("The sum of all shares does not match the total amount.");
        }

        for (ExpenseShare share : shares) {
            Expense expense = new Expense();
            expense.setGroupId(groupId);
            expense.setUserId(share.getUserId()); 
            expense.setDescription(description);
            expense.setCategory(category);
            expense.setAmount(share.getAmount()); 
            expense.setDueDate(dueDate);
            expense.setSettled(false);
            
            expenses.add(expense);
        }

        return expenses;
    }
}