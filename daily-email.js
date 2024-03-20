const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kyle.lyon2542@gmail.com',
        pass: ''
    }
});

const mailOptions = {
    from: 'kyle.lyon2542@gmail.com',
    to: 'klyon2@ocdsb.ca',
    subject: 'Test Daily Email',
    text: 'Test daily email being sent for use with SageTeaEdge.'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error occurred:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
