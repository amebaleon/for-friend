
const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { email, password, button } = req.body;
  if (button.startsWith('google')) {
    console.log(`Button: ${button}`);
  } else {
    console.log(`Button: ${button}, Email: ${email}, Password: ${password}`);
  }
  res.json({ message: 'Login data received' });
});

module.exports.handler = serverless(app);
