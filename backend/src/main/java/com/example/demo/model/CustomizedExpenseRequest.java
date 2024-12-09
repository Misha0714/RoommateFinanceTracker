package com.example.demo.model;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;


public class CustomizedExpenseRequest {
	private Long groupId;
	private Long userId;
	private String description;
	private String category;
	private BigDecimal totalAmount;
	private List<ExpenseShare> shares;
	private LocalDate dueDate;
	
	public Long getGroupId() {
		return groupId;
	}
	
	public Long getUserId() {
		return userId;
	}
	
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public BigDecimal getTotalAmount() {
		return totalAmount;
	}
	
	public void setTotalAmount(BigDecimal totalAmount) {
		this.totalAmount = totalAmount;
	}
	
	public List<ExpenseShare> getShares() {
		return shares;
	}
	
	public void setShares(List<ExpenseShare> shares) {
		this.shares = shares;
	}
	
	public LocalDate getDueDate() {
		return dueDate;
	}
	
	public void setDueDate(LocalDate dueDate) {
		this.dueDate = dueDate;
	}
	
	public String getCategory() {
		return this.category;
	}
	
	public void setCategory(String category) {
		this.category = category;
	}
}