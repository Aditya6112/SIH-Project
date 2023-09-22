const mongoose = require('mongoose');
const Student = require('../models/student');
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
const studentDetails = [
{
    name: 'Anshu',
    standard: '12th',
    field: 'JEE'
},
{
    name: 'Vishakha',
    standard: '10th',
    field: 'NEET'
}
]
Student.insertMany(studentDetails)
    .then(res => {
    console.log(res)
    })
    .catch(e => {
        console.log(e)
})