import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import sendEmail from './emailFunc';

const GroupPage = ({ groupId, userId, username, password }) => {
    const handleSendEmails = async () => {
        try {
            // Fetch group members and their debts from the backend
            const response = await fetch('http://localhost:8080/api/expenses/group', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                params: {
                    groupName: `group ${groupId}`,
                    username,
                    password,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch group data');
            }

            const groupData = await response.json();
            const { members } = groupData; // Assuming `members` contains the group users and their debts

            // Loop through members and send emails
            for (const member of members) {
                if (member.username !== username) {
                    const message = `Hello ${member.name}, you owe ${username} $${member.amountOwed}.`;
                    sendEmail(message, username, member.email);
                }
            }

            alert('Emails sent successfully to all group members');
        } catch (error) {
            console.error('Error sending emails:', error);
            alert('Error sending emails');
        } finally {
        }
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
            <Typography variant="h5" gutterBottom>
                Notify Group Members
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={handleSendEmails}
                style={{ marginTop: 5, marginBottom: 10 }}
            >
                Send Email Notifications
            </Button>
        </Box>
    );
};

export default GroupPage;