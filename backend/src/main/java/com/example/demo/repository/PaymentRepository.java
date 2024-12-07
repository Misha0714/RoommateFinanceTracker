package com.example.demo.repository;

import com.example.demo.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {
    List<Payment> findByPayerId(Long payerId);
    List<Payment> findByExpenseId(Long expenseId);
    //List<Payment> findByPaymentDateBeforeAndStatus(LocalDate date, String status);
}
