package com.example;

import com.example.group.Group;
import com.example.user.User;
import com.example.demo.model.Expense;

import java.util.List;

public class ApiResponse {
    private String message;
    private User user;
    private Group group;
    private List<Expense> expenses;
    private Double totalOwed; // New field to store the total amount owed


    public ApiResponse(String message, User user) {
        this.message = message;
        this.user = user;
    }

    public ApiResponse(String message, Group group) {
        this.message = message;
        this.group = group;
    }

    public ApiResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Group getGroup() {
        return group;
    }

    public void setGroup(Group group) {
        this.group = group;
    }

    public List<Expense> getExpenses() {
        return expenses;
    }

    public void setExpenses(List<Expense> expenses) {
        this.expenses = expenses;
    }

    public Double getTotalOwed() {
        return totalOwed;
    }

    public void setTotalOwed(Double totalOwed) {
        this.totalOwed = totalOwed;
    }
}

