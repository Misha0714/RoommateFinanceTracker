import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import sendEmail from './emailFunc';

const GroupPage = ({ groupId, userId, username, password }) => {
    const handleSendEmails = async () => {
        try {
            // Fetch group members and their debts from the backend
            const response = await fetch(`http://localhost:8080/api/expenses/owed?username=${username}&password=${password}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch owed data');
            }

            const data = await response.json();
            const { amountsOwed } = data; // Assuming `amountsOwed` is a map of email -> amount

            // Loop through owed amounts and send emails
            for (const [email, amount] of Object.entries(amountsOwed)) {
                const message = `Hello, you owe ${username} $${amount.toFixed(2)}.`;
                await sendEmail(email, message);
            }

            alert('Emails sent successfully to all group members');
        } 
        catch (error) {
            console.error('Error sending one or more emails: ', error);
            alert('Error sending one or more emails');
        } 
        finally {
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