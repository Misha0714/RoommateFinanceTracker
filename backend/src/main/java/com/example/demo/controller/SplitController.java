package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

import com.example.demo.model.Expense;
import com.example.demo.service.SplitService;
import com.example.demo.service.ExpenseService;
import com.example.demo.model.CustomizedExpenseRequest;
@RestController
@RequestMapping("/api/split")
public class SplitController {

    @Autowired
    private SplitService splitService;
    private ExpenseService expenseService;

    //@Autowired
    //private ExpenseRepository expenseRepository;

    @PostMapping("/submit")
    public ResponseEntity<String> submitCustomizedExpense(@RequestBody CustomizedExpenseRequest expenseRequest) {
        
        List<Expense> expenses = splitService.splitCustomizedExpense(
                expenseRequest.getGroupId(),
                expenseRequest.getUserId(),
                expenseRequest.getDescription(),
                expenseRequest.getCategory(),
                expenseRequest.getTotalAmount(),
                expenseRequest.getShares(),
                expenseRequest.getDueDate()
        );
        
        for (Expense expense:expenses) {
        	expenseService.createExpense(expense);
        }
        
        // Save all expense records to the database
        //expenseRepository.saveAll(expenses);

        return ResponseEntity.ok("Customized expense successfully split and saved.");
    }
}