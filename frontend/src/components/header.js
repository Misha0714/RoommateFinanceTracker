
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton, Box, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import BrainIcon from "@mui/icons-material/Psychology"; // Using a brain-like icon from MUI
//Author : Ford C. (napip03)
const NavBar = () => {
  return (
    <>
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

          <Box sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 3,
            marginRight: "2rem"
          }}>
            <Link to="/" style={{ textDecoration: "none", color: "#333" }}>Home</Link>
            <Link to="/signin" style={{ textDecoration: "none", color: "#333" }}>Login</Link>
            <Link to="/signup" style={{ textDecoration: "none", color: "#333" }}>Signup</Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default NavBar;
