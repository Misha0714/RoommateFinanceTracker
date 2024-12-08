import React, { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Chip,
  Box,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const transactions = [
  { id: 1, account: 'account_63', transaction: 'MetLife', date: 'Jan 13, 2023 12:02 AM', payment_type: 'New Expense', },
  { id: 2, account: 'account_267', transaction: 'FedEx', date: 'Jan 15, 2023 5:00 PM', payment_type: 'Payed Expense',  },
  { id: 3, account: 'account_458', transaction: 'Cisco Systems', date: 'Jan 8, 2023 8:02 PM', payment_type: 'Payed Expense', },
  { id: 4, account: 'account_991', transaction: 'Dropbox', date: 'Jan 30, 2023 8:23 AM', payment_type: 'New Expense', },
  { id: 5, account: 'account_241', transaction: 'General Electric', date: 'Jan 21, 2023 12:16 AM', payment_type: 'Payed Expense',},
  { id: 6, account: 'account_682', transaction: 'Gong', date: 'Jan 2, 2023 4:02 PM', payment_type: 'Deleted Expense', },
  { id: 7, account: 'account_175', transaction: 'Stripe', date: 'Jan 6, 2023 5:01 AM', payment_type: 'Payed Expense',},
  { id: 8, account: 'account_676', transaction: 'Home Depot', date: 'Jan 5, 2023 8:25 AM', payment_type: 'New Expense',},
  { id: 9, account: 'account_615', transaction: 'Goldman Sachs Group', date: 'Jan 7, 2023 2:07 AM', payment_type: 'New Expense', },
  { id: 10, account: 'account_69', transaction: 'Procter & Gamble', date: 'Jan 21, 2023 12:58 AM', payment_type: 'Payed Expense', },
  { id: 11, account: 'account_945', transaction: 'Progressive', date: 'Jan 18, 2023 7:26 AM', payment_type: 'Payed Expense', },
  // Added more items to demonstrate scrolling
  ...Array.from({ length: 40 }, (_, i) => ({
    id: i + 12,
    account: `account_${i + 1000}`,
    transaction: `Company ${i + 12}`,
    date: 'Jan 30, 2023 8:23 AM',
    payment_type: ['New Expense', 'Payed Expense', 'Deleted Expense'][i % 3],
  })),
];


//Author Ford C. (napip03)
const ActivityLog = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const getPaymentTypeColor = (type) => {
    switch (type) {
      case 'New Expense':
        return '#FFF7E6';
      case 'Payed Expense':
        return '#EEF3FF';
      case 'Deleted Expense':
        return '#f0c7d2';
      default:
        return '#E0E0E0';
    }
  };

  const getPaymentTypeTextColor = (type) => {
    switch (type) {
      case 'New Expense':
        return '#997000';
      case 'Payed Expense':
        return '#00875A';
      case 'Deleted Expense':
        return '#da466f';
      default:
        return '#000000';
    }
  };


  return (
    <Box sx={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      bgcolor: '#F5F5F7' 
    }}>
      {/* Fixed Header Section */}
      <Box sx={{ p: 3, flexShrink: 0 }}>
        
      </Box>

      {/* Scrollable Table Section */}
      <Box sx={{ 
        flex: 1, 
        overflow: 'hidden',
        px: 3,
        pb: 3
      }}>
        <Paper sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <TableContainer sx={{ flex: 1, overflow: 'auto' }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ bgcolor: '#fff' }}>ID</TableCell>
                  <TableCell sx={{ bgcolor: '#fff' }}>Account</TableCell>
                  <TableCell sx={{ bgcolor: '#fff' }}>Transaction Title</TableCell>
                  <TableCell sx={{ bgcolor: '#fff' }}>Transaction Date</TableCell>
                  <TableCell sx={{ bgcolor: '#fff' }}>Payment Type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id} hover>
                    <TableCell>{transaction.id}</TableCell>
                    <TableCell>{transaction.account}</TableCell>
                    <TableCell>{transaction.transaction}</TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>
                      <Chip
                        label={transaction.payment_type}
                        sx={{
                          backgroundColor: getPaymentTypeColor(transaction.payment_type),
                          color: getPaymentTypeTextColor(transaction.payment_type),
                          fontWeight: 500,
                          border: 'none',
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          
          {/* Fixed Footer */}
          <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider', color: '#666' }}>
            
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default ActivityLog;