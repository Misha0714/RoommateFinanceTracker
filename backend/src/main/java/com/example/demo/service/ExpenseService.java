package com.example.demo.service;

import com.example.demo.model.Expense;
//import com.example.demo.service.User;   assuming log in implemented user
import com.example.demo.repository.ExpenseRepository;
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
    //private final UserService userService;
    
// add logic for past due expences
   
    
    
    
    @Autowired
  //  public ExpenseService(ExpenseRepository expenseRepository, UserService userService) {
    public ExpenseService(ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
       // this.userService = userService;
    }

    
    public Expense createExpense(Expense expense) {
        // Set the current user's ID
        expense.setUserId(userService.getCurrentUserId());
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

    // might need for backend notifications 
    /*
    @Scheduled(cron = "0 0 9 * * *") // Run daily at 9 AM
    public void checkUpcomingDueExpenses() {
        LocalDate today = LocalDate.now();
        LocalDate upcomingDate = today.plusDays(7); // Check for expenses due in the next 7 days
        
        List<Expense> upcomingExpenses = expenseRepository.findByDueDateBetweenAndSettledFalse(today, upcomingDate);
        
        for (Expense expense : upcomingExpenses) {
            // Here you would integrate with a notification service
            System.out.println("Expense due soon - ID: " + expense.getExpenseId() +
                    " Amount: " + expense.getAmount() +
                    " Due Date: " + expense.getDueDate());
        }
    }
    */
    

}
