import React, { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography
} from '@mui/material';
const initialTransactions =  [{ id: 1, account: 'account_63', transaction: 'MetLife', date: 'Jan 13, 2023 12:02 AM', payment_type: 'New Expense', due_date: '1/1/2025', amount_due: 500.00 },
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

const ActivityLog = ({ transactions: initialTransactions, guestStatus}) => {
  const [transactions, setTransactions] = useState(initialTransactions || []);
  const [expenseID, setExpenseID] = useState('');
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ amount_payed: '' });

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

  const handleOpen = (id) => {
    setOpen(true);
    setExpenseID(id);
  };

  const handleClose = () => {
    setOpen(false);
    setExpenseID('');
    setFormData({ amount_payed: '' });
  };

  const handleSubmit = (expenseID) => {
    console.log('Submitted Expense ID:', expenseID);
    console.log('Form Data:', formData);
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== expenseID);
    setTransactions(updatedTransactions);
    handleClose();
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#F5F5F7',
      }}
    >
      {/* Scrollable Table Section */}
      <Box
        sx={{
          flex: 1,
          overflow: 'hidden',
          px: 3,
          pb: 3,
        }}
      >
        <Paper
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          { guestStatus ? (
            <Typography variant="h6" color="text.secondary">
              Please log in to view transactions
            </Typography>
          ) : (
            <TableContainer sx={{ flex: 1, overflow: 'auto' }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ bgcolor: '#fff' }}>ID</TableCell>
                    <TableCell sx={{ bgcolor: '#fff' }}>Account</TableCell>
                    <TableCell sx={{ bgcolor: '#fff' }}>Transaction Title</TableCell>
                    <TableCell sx={{ bgcolor: '#fff' }}>Transaction Date</TableCell>
                    <TableCell sx={{ bgcolor: '#fff' }}>Transaction Due Date </TableCell>
                    <TableCell sx={{ bgcolor: '#fff' }}>Amount Due $USD </TableCell>
                    <TableCell sx={{ bgcolor: '#fff' }}>Payment Type</TableCell>
                    <TableCell sx={{ bgcolor: '#fff' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id} hover>
                      <TableCell>{transaction.id}</TableCell>
                      <TableCell>{transaction.account}</TableCell>
                      <TableCell>{transaction.transaction}</TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.due_date}</TableCell> 
                      <TableCell>{transaction.amount_due}</TableCell>
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
                      <TableCell>
                        {transaction.payment_type === "New Expense" && (
                          <Button
                            variant="outlined"
                            color="error"
                            onClick={() => handleOpen(transaction.id)} 
                            disabled={guestStatus}
                          >
                            Settle Expense
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Paper>
      </Box>

      {/* Dialog for Adding Expense */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Settle Expense</DialogTitle>
        <DialogContent>
          <TextField
            name="amount_payed"
            label="Amount Paid ($USD)"
            fullWidth
            margin="normal"
            value={formData.amount_payed}
            onChange={handleFormChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={() => handleSubmit(expenseID)}
            color="primary"
            variant="contained"
            disabled={!formData.amount_payed}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ActivityLog;