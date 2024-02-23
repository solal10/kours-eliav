const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
const post_routes = require('./routes/posts_routes');
const studentRoute=require('./routes/student_route');
const mongoose =require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect(process.env.DATABASE_URL)
const db =mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('connected to database'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/student', studentRoute);
app.use('/post', post_routes);
app.get('/', (req, res) => {    
    res.send('Hello World!');
}  );



app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});