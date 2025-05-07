const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const Course = new Schema({
    name: { type: String, default: 'chưa có dữ liệu !', maxlength: 255 },
    description: { type: String, default: 'chưa có dữ liệu !', maxlength: 600 },
    image: { type: String, default: 'chưa có dữ liệu !', maxlength: 255 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
