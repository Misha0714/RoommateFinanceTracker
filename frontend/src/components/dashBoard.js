import React, { useState } from 'react';
import { Card, Typography, Box, Divider } from "@mui/material";
import Sidebar from "./sidebar.js";
import BudgetSummary from "./budgetSummary";
import ActivityLog from "./activityLog";
import ModalForm from "./addExpenseForm";
import Roster from "./roster.js";
import GroupPage from "./notifyGroup.js";

const initTransactions = [
    { id: 1, account: 'account_63', transaction: 'MetLife', date: 'Jan 13, 2023 12:02 AM', payment_type: 'New Expense', due_date: '1/1/2025', amount_due: 500.00 },
    { id: 2, account: 'account_267', transaction: 'FedEx', date: 'Jan 15, 2023 5:00 PM', payment_type: 'Payed Expense', due_date: '1/1/2025', amount_due: 500.00},
    { id: 3, account: 'account_458', transaction: 'Cisco Systems', date: 'Jan 8, 2023 8:02 PM', payment_type: 'Payed Expense', due_date: '1/1/2025', amount_due: 500.00 },
    { id: 4, account: 'account_991', transaction: 'Dropbox', date: 'Jan 30, 2023 8:23 AM', payment_type: 'New Expense', due_date: '1/1/2025', amount_due: 500.00  },
    { id: 5, account: 'account_241', transaction: 'General Electric', date: 'Jan 21, 2023 12:16 AM', payment_type: 'Payed Expense', due_date: '1/1/2025', amount_due: 500.00  },
    { id: 6, account: 'account_682', transaction: 'Gong', date: 'Jan 2, 2023 4:02 PM', payment_type: 'Deleted Expense', due_date: '1/1/2025', amount_due: 500.00  },
    { id: 7, account: 'account_175', transaction: 'Stripe', date: 'Jan 6, 2023 5:01 AM', payment_type: 'Payed Expense', due_date: '1/1/2025', amount_due: 500.00  },
    { id: 8, account: 'account_676', transaction: 'Home Depot', date: 'Jan 5, 2023 8:25 AM', payment_type: 'New Expense', due_date: '1/1/2025', amount_due: 500.00  },
    { id: 9, account: 'account_615', transaction: 'Goldman Sachs Group', date: 'Jan 7, 2023 2:07 AM', payment_type: 'New Expense', due_date: '1/1/2025', amount_due: 500.00  },
    { id: 10, account: 'account_69', transaction: 'Procter & Gamble', date: 'Jan 21, 2023 12:58 AM', payment_type: 'Payed Expense', due_date: '1/1/2025', amount_due: 500.00  },
    { id: 11, account: 'account_945', transaction: 'Progressive', date: 'Jan 18, 2023 7:26 AM', payment_type: 'Payed Expense', due_date: '1/1/2025', amount_due: 500.00  },
    ...Array.from({ length: 40 }, (_, i) => ({
      id: i + 12,
      account: `account_${i + 1000}`,
      transaction: `Company ${i + 12}`,
      date: 'Jan 30, 2023 8:23 AM',
      payment_type: ['New Expense', 'Payed Expense', 'Deleted Expense'][i % 3],
      due_date : [' 12/1/2024', '4/1/2026', '12/25/2025'][i % 3],
      amount_due : [100.00*i % 489.57]
    })),
  ];
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

                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    padding: 2,
                    width: "100%"
                }}
                >
                    <Box sx={{ flex: 2, padding: 2 }}>
                        <BudgetSummary remainingBudget={50} currentExpenses={20} guestStatus={isGuest} />
                    </Box>
                    <Box sx={{ flex: 1, padding: 2 }}>
                        <Roster 
                        username={username}
                        password={password}/>
          </Box>
                </Box>
                
                <ActivityLog transaction = {initTransactions} guestStatus={isGuest} />
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <ModalForm/>
                </Box>

                <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "1rem",
                }}>
                    {/* GroupPage button */}
                    <GroupPage
                        username={username}
                        password={password}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default DashBoard;