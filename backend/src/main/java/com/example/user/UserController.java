package com.example.user;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.ApiResponse;

@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService userService;
	
	@PostMapping("/login")
	public ResponseEntity<ApiResponse> login(@RequestBody LoginRequest loginRequest){
		Optional<User> user = userService.findByUsername(loginRequest.getUsername());
		
		if(user.isPresent()) {
			User foundUser = user.get();
			if(loginRequest.getPassword().equals(foundUser.getPassword())) {
				System.out.println("User logged in: " + foundUser.getUsername());

				return ResponseEntity.ok(new ApiResponse("Login Sucessful.", foundUser));
			}
		}
		System.out.println("wrong credentials");
		return ResponseEntity.status(401).body(new ApiResponse("Invalid username or password"));
		
		
	}
 
	@PostMapping("/register")
	public ResponseEntity<ApiResponse> register(@RequestBody User user) {
	    Optional<User> newUsername = userService.findByUsername(user.getUsername());
	    if(newUsername.isPresent()) {
	    	//409 error
	    	System.out.println("username already exists");
	    	String msg = "Username " + user.getUsername() +" is unavailable.";
	    	return ResponseEntity.status(HttpStatus.CONFLICT).body(new ApiResponse(msg));
	    }
	    else {
	    	User newUser = new User();
	    	newUser.setUsername(user.getUsername());
	    	newUser.setEmail(user.getEmail());
	    	newUser.setPassword(user.getPassword());

	    	userService.register(newUser);
		    System.out.println("Received user: " + newUser.getUsername());
		    String msg = "Successfully registered.";
		    return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse(msg, newUser));	
	    }
	    

	}
	
	
}
