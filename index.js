const nodemailer = require('nodemailer');

let projectName = "SageTeaEdge";
let binaryPath = "dist";
let binary1 = "index-linux";
let binary2 = "index-macos";
let binary3 = "index-win.exe";
let emailSubject = "SageTea Github Build Report";
let buildReport = `Build Report for ${projectName}:\n\n`;

try {
    buildReport += `Built Binaries:\n${binaryPath}/${binary1}\n${binaryPath}/${binary2}\n${binaryPath}/${binary3}\n\n`;

    buildReport += `Test for ${binary1} succeeded!`;
} catch (e) {
    buildReport += `Test for ${binary1} failed!\n\nDetails of the error can be found below:\n\n${e}`;
}

console.log(buildReport);

// Send build report in an email
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'testingemail2542@gmail.com',
        pass: 'modd hlci zpkq unve'
    }
});

const mailOptions = {
    from: 'testingemail2542@gmail.com',
    to: 'support@sagetea.ai',
    subject: emailSubject,
    text: buildReport
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error occurred:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});