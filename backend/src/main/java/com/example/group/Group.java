package com.example.group;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

import com.example.user.User;

import jakarta.persistence.*;

@Entity
public class Group {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer group_id;
  
	private String name;
  
	private String purpose;
	
    @ManyToOne
    @JoinColumn(name = "owner_id", referencedColumnName = "user_id", nullable = false)
	private User owner;
	
	public Group() {
		
	}
  
	public Integer getId() {
		return group_id;
		
	}
	
	public void setId(Integer group_id) {
		this.group_id = group_id;
	}
	
	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}
	
	public void setPurpose(String purpose) {
		this.purpose = purpose;
	}
	
	public String getPurpose() {
		return purpose;
		
	}

	public void setOwner(User owner) {
		
		this.owner = owner;
		
	}
	
	public User getOwner() {
		
		return owner;
		
	}
	
	
		  
}
