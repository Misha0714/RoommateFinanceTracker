package com.example.demo.user;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

import java.util.List;

import com.example.demo.group.Group;

import jakarta.persistence.*;

@Entity // This tells Hibernate to make a table out of this class
//@Table(name = "User")
public class User {
	
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Integer user_id;

  //@Column(nullable = false)
  private String username;

  //@Column(nullable = false)
  private String email;
  
  //@Column(nullable = false)
  private String password;
  
  @ManyToMany(mappedBy = "users")
  private List<Group> groups;
  
  public User() {
	  
  }

  public Integer getId() {
    return user_id;
  }
  public void setId(Integer user_id) {
	    this.user_id = user_id;
	    }

  public String getUsername() {
    return username;
  }

  public void setUsername(String name) {
    this.username = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }
  
  public String getPassword() {
	    return password;
}

  public void setPassword(String password) {
	  
    this.password = password;
  }
  
  public List<Group> getGroups(){
	  return groups;
  }
  
  public void setGroups(List<Group> groups) {
	  this.groups = groups;
  }
  
}
