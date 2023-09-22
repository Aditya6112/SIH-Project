const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');

const session = require('express-session');
const MongoStore = require('connect-mongo');

const flash = require('connect-flash')
//const ExpressError = require('./utils/ExpressError');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const Student = require('./models/student');

const helmet = require('helmet');

const mongoSanitize = require('express-mongo-sanitize');

//const userRoutes = require('./routes/users');

const dbUrl = 'mongodb://127.0.0.1:27017/SIH2023';

main().catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR!!!")
    console.log(err)
});

async function main() {
    mongoose.set('strictQuery', true);
    await mongoose.connect(dbUrl)
        .then(() => {
            console.log("Database Connected!!!")
        });
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/did',(req,res)=>{
    res.render('did')
})


// app.listen(3000, () => {
//     console.log("APP IS LISTENING ON PORT 3000!")
// })

// app.use('/', userRoutes);

const port = 3000
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})