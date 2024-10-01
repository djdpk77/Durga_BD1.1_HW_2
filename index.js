const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.get('/custom-commit', (req, res) => {
  let type = req.query.type;
  let message = req.query.message;
  let result = type + ': ' + message;
  res.send(result);
});

app.get('/certificate', (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let courseName = req.query.courseName;
  let certificate =
    'This certification is awarded to ' +
    firstName +
    ' ' +
    lastName +
    ' for completing the course BytR';
  res.send(certificate);
});

app.get('/autoreply', (req, res) => {
  let startMonth = req.query.startMonth;
  let endMonth = req.query.endMonth;
  let result =
    "Dear customer, thank you for reaching out to me. Unfortunately, I'm out of office from " +
    startMonth +
    ' till ' +
    endMonth +
    '. Your enquiry will be resolved by another colleague.';
  res.send(result);
});

app.get('/secureurl', (req, res) => {
  let domain = req.query.domain;
  let result = 'https://' + domain;
  res.send(result);
});

app.get('/sendotp', (req, res) => {
  let otpCode = req.query.otpCode;
  let result =
    'Your OTP for account verification is ' +
    otpCode +
    '. Do not share this with anyone';
  res.send(result);
});

app.get('/welcome', (req, res) => {
  let firstName = req.query.firstName;
  let email = req.query.email;
  let result =
    'Hey ' +
    firstName +
    ". We're excited to have you here, we'll send future notifications to your registered mail (" +
    email +
    ')';
  res.send(result);
});

app.get('/github-profile', (req, res) => {
  let username = req.query.userName;
  let result = 'https://github.com/' + username;
  res.send(result);
});

app.get('/text-to-csv', (req, res) => {
  let id = req.query.id;
  let email = req.query.email;
  let rollNumber = req.query.rollNumber;
  let result = id + ', ' + email + ', ' + rollNumber;
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
