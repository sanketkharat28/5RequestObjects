const express = require('express');
const app = express();

// Middleware to log request information
app.use((req, res, next) => {
  console.log('Request URL:', req.url);
  console.log('Request Method:', req.method);
  console.log('Request Headers:', req.headers);
  console.log('Request Query Parameters:', req.query);
  console.log('Request Body:', req.body);
  next();
});

// Route to demonstrate request object functions
app.get('/example/:id', (req, res) => {
  // Function 1: req.params - Access route parameters
  const userId = req.params.id;
  res.send(`User ID: ${userId}\n`);

  // Function 2: req.get() - Get the value of a specific header
  const userAgent = req.get('user-agent');
  console.log('User Agent:', userAgent);

  // Function 3: req.is() - Check the request's Content-Type
  if (req.is('json')) {
    console.log('Request is JSON');
  } else {
    console.log('Request is not JSON');
  }

  // Function 4: req.accepts() - Check the accepted MIME types
  if (req.accepts('html')) {
    console.log('HTML content is accepted');
  } else {
    console.log('HTML content is not accepted');
  }

  // Function 5: req.ip - Get the client's IP address
  const clientIP = req.ip;
  console.log('Client IP:', clientIP);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
