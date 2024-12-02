package com.example.demo.service;

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.concurrent.CompletableFuture;

@Service
public class RequestProcessingService {

    @Async
    public CompletableFuture<String> processRequest(String requestData) {
        // Simulate heavy processing
        try {
            Thread.sleep(3000); // Simulating delay (3 seconds)
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        return CompletableFuture.completedFuture("Processed: " + requestData);
    }
}

