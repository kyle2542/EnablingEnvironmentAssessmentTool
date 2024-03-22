const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'testingemail2542@gmail.com',
        pass: 'modd hlci zpkq unve'
    }
});

const mailOptions = {
    from: 'modd hlci zpkq unve',
    to: 'support@sagetea.ai',
    subject: 'SageTea Github Build Report',
    text: 'Test daily email being sent for use with SageTeaEdge.'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error occurred:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});

// 9am every day
// automate compiling code into a binary file