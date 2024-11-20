
import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import BrainIcon from "@mui/icons-material/Psychology"; // Using a brain-like icon from MUI
//Author : Ford C. (napip03)
const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#fef5f5", color: "#333", border: "1px solid #ddd" }}>
      <Toolbar>
        {/* Left: Brain Icon */}
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <BrainIcon sx={{ fontSize: 40 }} />
        </IconButton>

        {/* Center: Title */}
        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
          <Typography variant="h4" component="div" sx={{ fontWeight: "bold" }}>
            Brainpower
          </Typography>
        </Box>

        {/* Right: Account and Hamburger Menu */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Account Icon */}
          <Avatar sx={{ bgcolor: "#ccc", color: "#333" }}>A</Avatar>

          {/* Hamburger Icon */}
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
