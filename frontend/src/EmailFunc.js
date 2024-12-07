import emailjs from '@emailjs/browser';

const sendEmail = (e, form) => {
    e.preventDefault();

    emailjs
        .sendForm('service_ir6o99o', 'template_a7qrcdl', form.current, 'R8Suz9o57NTK5a2s9')
        .then(
            (result) => {
                console.log(result.text);
                e.target.reset(); 
                alert('Email Sent!');
            },
            (error) => {
                console.error(error.text);
                alert('Error - email me directly instead');
            }
        );
};

export default sendEmail;