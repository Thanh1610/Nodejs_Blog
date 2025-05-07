const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/code_note_dev');
        console.log('Connection Successful!');
    } catch (error) {
        console.log('Connection Failure !');
    }
}

module.exports = { connect };
