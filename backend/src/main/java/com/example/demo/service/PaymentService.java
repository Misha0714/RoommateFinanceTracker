package com.example.demo.service;

import com.example.demo.model.Payment;
import com.example.user.User;
import com.example.demo.model.Expense;
import com.example.demo.repository.PaymentRepository;
import com.example.demo.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;
import java.math.BigDecimal;

@Service
public class PaymentService {
    private final PaymentRepository paymentRepository;
    private final ExpenseRepository expenseRepository;
   private final User user;

    @Autowired
    public PaymentService(PaymentRepository paymentRepository, ExpenseRepository expenseRepository, User user) {
   // public PaymentService(PaymentRepository paymentRepository, ExpenseRepository expenseRepository) {
        this.paymentRepository = paymentRepository;
        this.expenseRepository = expenseRepository;
      this.user = user;
    }

    
    // payment should take in amount and expenseId
    
    public Payment createPayment(Payment payment) {
        // Set current user as payer
    	payment.setPayerId(User.getId());
    	
    	
        // Set payment date to now
        payment.setPaymentDate(LocalDate.now());
        
        
        Payment savedPayment = paymentRepository.save(payment);
        // Check and update settlement status
        updateExpenseSettlementStatus(payment.getExpenseId());
        
        return savedPayment;
    }

    
    
    
    // will update the expense account of the user which filed the expense 
    private void updateExpenseSettlementStatus(Long expenseId) {
        // Get all payments for this expense
        List<Payment> allPayments = paymentRepository.findByExpenseId(expenseId);
        
        // Calculate total amount paid
        BigDecimal totalPaid = allPayments.stream()
            .map(Payment::getAmount)
            .reduce(BigDecimal.ZERO, BigDecimal::add);
        
        // Get the expense
        Expense expense = expenseRepository.findById(expenseId)
            .orElseThrow(() -> new RuntimeException("Expense not found"));
        
        // Calculate remaining amount
        BigDecimal remainingAmount = expense.getAmount().subtract(totalPaid);
        // Ensure remaining amount doesn't go below zero
        if (remainingAmount.compareTo(BigDecimal.ZERO) < 0) {
            remainingAmount = BigDecimal.ZERO;
        }
        
        // Update expense amount + settlement status
        expense.setAmount(remainingAmount);
        
        // If remaining amount is zero, mark as settled
        if (remainingAmount.compareTo(BigDecimal.ZERO) == 0) {
            expense.setSettled(true);
        }
        
        expenseRepository.save(expense);
    }
    
    
    

    public List<Payment> getPaymentsByPayerId(Long payerId) {
        return paymentRepository.findByPayerId(payerId);
    }

    public List<Payment> getPaymentsByExpenseId(Long expenseId) {
        return paymentRepository.findByExpenseId(expenseId);
    }


}
