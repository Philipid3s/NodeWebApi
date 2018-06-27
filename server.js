import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import routes from './src/routes/apiRoute';

const app = express();
const PORT = 3000;
const config = require("./config");

// Mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/apiDB', {
  useMongoClient: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Call routes controller
// Test Api calls with Postman (https://www.getpostman.com/)
routes(app);

// Server static public files
app.use(express.static(path.join(__dirname, 'public')));

// Run web server (default address : 127.0.0.1:3000)
// Warning : ECS6 syntax "() => .." - that's why Babel is necessary
app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);
