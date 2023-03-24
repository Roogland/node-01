const nodemailer = require('nodemailer');

async function sendEmail() {

let transporter = nodemailer.createTransport({
host: "smtp.gmail.com",
port: 587,
secure: false,
auth: {
user: "Akhimierowland@gmail.com",
pass: "***********"
}
});

let info = await transporter.sendMail({
from: '"Rowland" Akhimierowland@gmail.com',
to: 'arbitragevisa@gmail.com',
subject: 'Hello',
text: 'Hello world?',
html: '<b>Hello world?</b>'
});

console.log('Message sent: %s', info.messageId);
}


sendEmail();
