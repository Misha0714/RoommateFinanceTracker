import React from "react"
import { Card, Typography, Box, Divider } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function Sidebar() {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "top",
            backgroundColor: "#283c7d",
            width: "100%",
            color: "white",
            padding: "1.5rem 0rem"
        }}>
            <BasicSelect />

        </Box>
    );
}

export default Sidebar;

function BasicSelect() {
    const [groupChoice, setGroupChoice] = React.useState('');

    const handleChange = (event) => {
        setGroupChoice(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel 
                    id="select-label" 
                    sx={{
                        color: 'white',
                        '&.Mui-focused': {
                            color: 'white'  // Keep label white on focus
                        }
                    }}
                >
                    Group
                </InputLabel>
                <Select
                    labelId="select-label"
                    id="group-select"
                    value={groupChoice}
                    label="Group"
                    onChange={handleChange}
                    sx={{
                        color: 'white',  // Makes selected text white
                        '.MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white' 
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white'
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white' 
                        },
                        '.MuiSvgIcon-root': {
                            color: 'white'  // Makes the dropdown arrow white
                        }
                    }}
                >
                    <MenuItem value={"Group 1"}>Group 1</MenuItem>
                    <MenuItem value={"Group 2"}>Group 2</MenuItem>
                    <MenuItem value={"Group 3"}>Group 3</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}