package com.example.user;

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;
@Service
public class UserService {
	
	private final UserRepository userRepository;
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
	public Optional<User> findByUsername(String username) {
		
		return userRepository.findByUsername(username);

	}
    
	public Optional<User> findById(Integer user_id) {
		
		return userRepository.findById(user_id);

	}
	
	
    public User register(User user) {
        return userRepository.save(user);
    }

} 
