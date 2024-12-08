package com.example.demo.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "expense")
public class Expense {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long expense_id;

    @Column(name = "group_id")
    private Long groupId;

    @Column(name = "user_id")
    private Long userId;
    
    @Column(name = "payer_id")
    private Long payerId;

    @Column(nullable = false)
    private BigDecimal amount;

    @Column
    private String description;

    @Column
    private String category;

    @Column
    private boolean settled;

    // Getters and Setters
    public Long getExpenseId() {
        return expense_id;
    }

    public void setExpenseId(Long expenseId) {
        this.expense_id = expenseId;
    }
    // will link with logged in user
    public Long getGroupId() {
        return groupId;
    }

    public void setGroupId(Long groupId) {
        this.groupId = groupId;
    }
 // will link with logged in user
    public Long getUserId() {
        return userId;
    }
 // will link with logged in user
    public void setUserId(Long userId) {
        this.userId = userId;
    }
    
    // will link with user who owes the money
    public Long getPayerId() {
        return payerId;
    }
 // will link with logged in user
    public void setPayerId(Long payerId) {
        this.payerId = payerId;
    } 

    public BigDecimal getAmount() {
        return amount;
    }
    
 // this is where to link to expense splitting to set the amount for the logged expense depending on the type of split
    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

 

    public boolean isSettled() {
        return settled;
    }

    public void setSettled(boolean settled) {
        this.settled = settled;
    }
}