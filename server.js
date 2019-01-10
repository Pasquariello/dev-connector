//bring in what we will need
const express = require('express');
const mongoose = require('mongoose');

//establish routes 
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');


//set app equal to express
const app = express();

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongo through mongoose
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))

//route
app.get('/', (req, res) => res.send('Hello! Taylor'));

//Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

//set to port
const port = process.env.PORT || 5000;

//this is what will show in console when node server is run
//in browser go to localhost 5000
app.listen(port, () => console.log(`Server running on port ${port}`));