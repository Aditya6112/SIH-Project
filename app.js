const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')

main().catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR!!!")
    console.log(err)
});

async function main() {
    mongoose.set('strictQuery', true);
    await mongoose.connect('mongodb://127.0.0.1:27017/SIH2023')
        .then(() => {
            console.log("MONGO CONNECTION OPEN!!!")
        });
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(express.urlencoded({ extended: true }))
// app.use(methodOverride('_method'))

// app.get('/sih', async (req, res) => {
//     res.send("sMART iNDIA hACKATHON!!")
// })

const studentSchema = new mongoose.Schema({
    title: String,
    field: String,
    class: Number
});
const Student = mongoose.model('Student',studentSchema);
//const Drishyam = new Movie({title: 'Drishyam', year: 2022, score: 9, rating:'A'});
Student.insertMany([
    {title: 'Aditya', field: 'JEE', class: 12},
    {title: 'Raj', field: 'JEE', class: 12},
])
    .then(data => {
        console.log("IT WORKED!")
        console.log(data);
    })

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})