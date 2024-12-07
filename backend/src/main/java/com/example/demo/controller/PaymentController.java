package com.example.demo.controller;

import com.example.demo.model.Payment;
import java.math.BigDecimal;
import java.time.LocalDate;
import com.example.demo.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/payments")
@CrossOrigin(origins = "*")
public class PaymentController {
	private final PaymentService paymentService;

    @Autowired
    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }
    
    @PostMapping
    public ResponseEntity<Payment> createPayment(@RequestBody Payment payment) {
       
        payment.setPayerId(null);  // set in service
        payment.setPaymentId(null);  // Will be auto-generated
        payment.setPaymentDate(null);  // Will be set in service
        return ResponseEntity.ok(paymentService.createPayment(payment));
    }


    @GetMapping("/payer/{payerId}")
    public ResponseEntity<List<Payment>> getPaymentsByPayerId(@PathVariable Long payerId) {
        return ResponseEntity.ok(paymentService.getPaymentsByPayerId(payerId));
    }

    @GetMapping("/expense/{expenseId}")
    public ResponseEntity<List<Payment>> getPaymentsByExpenseId(@PathVariable Long expenseId) {
        return ResponseEntity.ok(paymentService.getPaymentsByExpenseId(expenseId));
    }
    

    @GetMapping("/test")
    public ResponseEntity<Payment> testPayment() {
        Payment payment = new Payment();
        payment.setExpenseId(1L);  // Hardcoded expenseId
        payment.setAmount(new BigDecimal("50.25"));
        return ResponseEntity.ok(paymentService.createPayment(payment));
    }
}
   
