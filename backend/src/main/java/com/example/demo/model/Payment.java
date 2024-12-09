package com.example.demo.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "payment")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long payment_id;

    @Column(name = "expense_id")
    private Long expenseId;

    @Column(name = "payer_id")
    private Long payerId;
    

    @Column(nullable = false)
    private BigDecimal amount;


    @Column(name = "payment_date")
    private LocalDate paymentDate;

    // Getters and Setters
    public Long getPaymentId() {
        return payment_id;
    }

    public void setPaymentId(Long paymentId) {
        this.payment_id = paymentId;
    }

    public Long getExpenseId() {
        return expenseId;
    }

    public void setExpenseId(Long expenseId) {
        this.expenseId = expenseId;
    }

    // will link with logged in user
    public Long getPayerId() {
        return payerId;
    }

    public void setPayerId(Long payerId) {
        this.payerId = payerId;
    }
    

    public BigDecimal getAmount() {
        return amount;
    }

    
    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    // instead of due date with payment
    public LocalDate getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(LocalDate dueDate) {
        this.paymentDate = dueDate;
    }
    
}