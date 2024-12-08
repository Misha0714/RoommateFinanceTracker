import React, { useState } from 'react';
import { 
  Button, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle, 
  TextField, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Box
} from '@mui/material';

const ModalForm = () => {
  // State to control modal open/close
  const [open, setOpen] = useState(false);
  
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    budget: '', 
    split: ''
  });

   // State to track splitting inputs visibility
   const [splitAmounts, setSplitAmounts] = useState({
    Person1: '',
    Person2: '',
    Person3: '',
  });

  const handleSplitInputChange = (person, value) => {
    setSplitAmounts(prevState => ({
      ...prevState,
      [person]: value
    }));
  };
  // Handle modal open
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Handle modal close
  const handleClose = () => {
    setOpen(false);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    // Perform validation or API call here
    
    // Close the modal after submission
    handleClose();
  };

  return (
    <div>
      {/* Button to open the modal */}
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Form
      </Button>

      {/* Modal Dialog */}
      <Dialog 
        open={open} 
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Add Expense</DialogTitle>
        
        <DialogContent>
          {/* Name Input */}
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name of Expense"
            type="text"
            fullWidth
            variant="standard"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Email Input */}
          <TextField
            margin="dense"
            name="amount"
            label="$USD"
            type="number"
            fullWidth
            variant="standard"
            value={formData.amount}
            onChange={handleChange}
            required
          />

          {/* Department Dropdown */}
          <FormControl fullWidth margin="dense" variant="standard">
            <InputLabel>Budget</InputLabel>
            <Select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              label="Budget Group"
            >
              <MenuItem value="Budget 1"> Groceries/Gas </MenuItem>
              <MenuItem value="Budget 2"> Rent/Utilities </MenuItem>
              <MenuItem value="Budget 3"> For Fun </MenuItem>
              <MenuItem value="Budget 4"> Other </MenuItem>
            </Select>
          </FormControl>

           {/* Splitting Dropdown */}
           <FormControl fullWidth margin="dense" variant="standard">
            <InputLabel>Splitting Method</InputLabel>
            <Select
              name="split"
              value={formData.split}
              onChange={handleChange}
              label="Split Method"
            >
              <MenuItem value="equal"> Equal Split </MenuItem>
              <MenuItem value="custom"> Custom Split </MenuItem>
              <MenuItem value="percentage"> Percentage Split </MenuItem>
            </Select>
          </FormControl>

           {/* Dynamically show text fields if splitting method is percentage/custom */}
            {(formData.split === 'percentage' || formData.split === 'custom') && (
            <Box sx={{ marginTop: 2 }}>
              <TextField
                label="Person 1 Amount"
                variant="standard"
                value={splitAmounts.Person1}
                onChange={(e) => handleSplitInputChange('Person1', e.target.value)}
                fullWidth
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Person 2 Amount"
                variant="standard"
                value={splitAmounts.Person2}
                onChange={(e) => handleSplitInputChange('Person2', e.target.value)}
                fullWidth
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Person 3 Amount"
                variant="standard"
                value={splitAmounts.Person3}
                onChange={(e) => handleSplitInputChange('Person3', e.target.value)}
                fullWidth
                sx={{ marginBottom: 1 }}
              />
            </Box>
             )}
        </DialogContent>

        
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit} 
            color="primary" 
            variant="contained"
            disabled={!formData.name || !formData.email || !formData.department}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalForm;