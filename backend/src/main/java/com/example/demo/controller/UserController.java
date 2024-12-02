package com.example.demo.controller;

import com.example.demo.service.RequestProcessingService;
import com.example.demo.model.LoginRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("/api")
public class UserController {

    private final RequestProcessingService requestProcessingService;

    public UserController(RequestProcessingService service) {
        this.requestProcessingService = service;
    }

    @GetMapping("/process")
    public ResponseEntity<CompletableFuture<String>> processUserRequest(@RequestParam String data) {
        CompletableFuture<String> response = requestProcessingService.processRequest(data);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody LoginRequest loginRequest) {
        // Simulate login logic (replace with actual user authentication)
        if ("user".equals(loginRequest.getUsername()) && "password".equals(loginRequest.getPassword())) {
            return ResponseEntity.ok("Login successful!");
        }
        return ResponseEntity.status(401).body("Invalid credentials");
    }
}
