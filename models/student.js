const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        reqired: true
    },
    standard: {
        type: String,
        enum: ['10th', '11th', '12th']
    },
    field: {
        type: String,
        enum: ['JEE', 'UPSC', 'NEET']
    }
})
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
