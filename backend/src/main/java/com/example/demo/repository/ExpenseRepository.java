package com.example.demo.repository;

import com.example.demo.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {
    List<Expense> findByUserId(Long userId);
    List<Expense> findByGroupId(Long groupId);
    List<Expense> findByIsRecurringTrueAndDueDateBefore(LocalDate dueDate);
    List<Expense> findByDueDateBetweenAndSettledFalse(LocalDate startDate, LocalDate endDate);
    List<Expense> findBySettledFalse();
}
