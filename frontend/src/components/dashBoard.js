import React from "react";
import { Card, Typography, Box, Divider } from "@mui/material";
import Sidebar from "./sidebar.js";
import BudgetSummary from "./budgetSummary";
import ActivityLog from "./activityLog";
import ModalForm from "./addExpenseForm";

function DashBoard(){
    return (
        <Box sx={{ display: "flex",
            flexDirection: "row",
            width: "100%",
        }}>
            <Box sx={{
                display: "flex",
                width: "12rem"
            }}>
                <Sidebar />
            </Box>
            <Box sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                width: "3fr"
            }}>
                <Box sx={{
                    color: "#283c7d",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    padding: "1rem 0rem",
                }}>Transactions Dashboard</Box>
                <BudgetSummary />
                <ActivityLog />
                <ModalForm />
            </Box>
        </Box>
    );
}

export default DashBoard;