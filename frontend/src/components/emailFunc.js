import emailjs from '@emailjs/browser';

const sendEmail = (message, recipientEmail) => {
    const userID = '12345';
    
    // Data object containing variables for the email template
    const templateParams = {
        message: message,
        to_email: recipientEmail,
    };

    emailjs
        .send('service_ir6o99o', 'template_a7qrcdl', templateParams, 'R8Suz9o57NTK5a2s9')
        .then(
            (result) => {
                console.log(result.text);
                alert('Email sent');
            },
            (error) => {
                console.error(error.text);
                alert('Error sending email');
            }
        );
};

export default sendEmail;