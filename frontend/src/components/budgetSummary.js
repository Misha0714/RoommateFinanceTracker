import React from "react";
import { Card, Typography, Box, Divider } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

//
const data = [
    { id: 'id_A', value: 10, label: 'Series A' },
    { id: 'id_B', value: 15, label: 'Series B' },
    { id: 'id_C', value: 20, label: 'Series C' },
]

// Author Ford C. (napip03)
function BudgetSummary({ remainingBudget, currentExpenses }) {
    const items = [
        { id: 'id_A', value: 10, label: 'Series A' },
        { id: 'id_B', value: 15, label: 'Series B' },
        { id: 'id_C', value: 20, label: 'Series C' },
    ]

  return (
    <Card sx={{ display: "flex", padding: 2, gap: 2 }}>
      {/* Pie Chart Section */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" gutterBottom>
          Spending Breakdown
        </Typography>
        <PieChart 
            series={[
                {
                  data: items,
                },
              ]}
              width={400}
              height={200}
              margin={{ right: 200 }}
        />
      </Box>

      {/* Transactional Data Section */}
      <Divider orientation="vertical" flexItem />
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" gutterBottom>
          Transactional Data
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          <strong>Remaining Budget:</strong> ${remainingBudget}
        </Typography>
        <Typography variant="body1">
          <strong>Current Expenses:</strong> ${currentExpenses}
        </Typography>
      </Box>
    </Card>
  );
}

export default BudgetSummary;
