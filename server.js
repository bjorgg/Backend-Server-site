// Backend server

// Requiring Express framework
const app = require('express')()
// Requiring mongoose for MongoDB
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
// Requiring Dotenv module that loads environment variables from a .env file into process.
const dotenv = require('dotenv').config();
// Storing port 5000 in a variable
const PORT = process.env.PORT || 5000

// Middleware
app.use(bodyParser.json());
// Telling the app/Express to use Cors
app.use(cors());

// Import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


// Listening to the HTTP GET request.
app.get('/', (req, res) => {
    res.send('We are on home');
});

// Connect to database with mongoose
mongoose.connect(process.env.MONGODB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log('Connected to DB!')
);

// Listen method creates a listener on the specified port.
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })