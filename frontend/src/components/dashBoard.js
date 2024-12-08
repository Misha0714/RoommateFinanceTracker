import React, { useState } from 'react';
import { Card, Typography, Box, Divider } from "@mui/material";
import Sidebar from "./sidebar.js";
import BudgetSummary from "./budgetSummary";
import ActivityLog from "./activityLog";
import ModalForm from "./addExpenseForm";

function DashBoard(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isGuest, setIsGuest] = useState(true);

    try {
        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");
        if (storedUsername) setUsername(storedUsername);
        if (storedPassword) setPassword(storedPassword);
    } catch {
        console.log("Username and password not found in local storage");
    }

    if (username !== "" || password !== "") {
        setIsGuest(false);
    }

    

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
            }}>
                <Box sx={{
                    color: "#283c7d",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    padding: "1rem 0rem",
                    textAlign: "center"
                }}>Transactions Dashboard</Box>
                <BudgetSummary />
                <ActivityLog />
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <ModalForm/>
                </Box>
            </Box>
        </Box>
    );
}

export default DashBoard;