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
  InputLabel 
} from '@mui/material';

const ModalForm = () => {
  // State to control modal open/close
  const [open, setOpen] = useState(false);
  
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    budget: ''
  });

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
        </DialogContent>

        {}
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