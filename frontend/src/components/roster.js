import React from 'react';
import { Box, List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography } from '@mui/material';

// Mock data for the group roster
const members = [
  { id: 1, name: 'Alice', owes: '$25.00', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'Bob', owes: '$50.00', avatar: 'https://i.pravatar.cc/150?img=2' },
  { id: 3, name: 'Charlie', owes: '$15.00', avatar: 'https://i.pravatar.cc/150?img=3' },
  { id: 4, name: 'Diana', owes: '$40.00', avatar: 'https://i.pravatar.cc/150?img=4' },
];
const guestMember = [
  { id: 1, name: 'Guest', owes: '$0.00', avatar: 'https://i.pravatar.cc/150?img=1' },
]
const groupName = "A";


const Roster = (guestStatus) => {
  if (guestStatus) {
    return (
      <Box
        sx={{
          maxWidth: 300,
          backgroundColor: '#f5f5f5',
          borderRadius: 2,
          padding: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Group {groupName} Roster
        </Typography>
        <Box
          sx={{
            maxHeight: 180,
            overflowY: 'auto',
            border: '1px solid #ddd',
            borderRadius: 2,
            padding: 1,
          }}
        >
          <List>
            {guestMember.map((member) => (
              <ListItem key={member.id} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <ListItemText
                  primary={member.name}
                  secondary={`Owes you: ${member.owes}`}
                  sx={{ marginRight: 2 }}
                />
                <ListItemAvatar>
                  <Avatar alt={member.name} src={member.avatar} />
                </ListItemAvatar>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    );
  }
    
    return (
      <Box
        sx={{
          maxWidth: 300,
          backgroundColor: '#f5f5f5',
          borderRadius: 2,
          padding: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Group {groupName} Roster
        </Typography>
        <Box
          sx={{
            maxHeight: 180, // Set max height for scrollable effect
            overflowY: 'auto',
            border: '1px solid #ddd',
            borderRadius: 2,
            padding: 1,
          }}
        >
          <List>
            {members.map((member) => (
              <ListItem key={member.id} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <ListItemText
                  primary={member.name}
                  secondary={`Owes you: ${member.owes}`}
                  sx={{ marginRight: 2 }}
                />
                <ListItemAvatar>
                  <Avatar alt={member.name} src={member.avatar} />
                </ListItemAvatar>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    );
  };
  
  export default Roster;
