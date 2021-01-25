const mongoose = require('mongoose');

// Creating schema for database
const PostSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
})


module.exports = mongoose.model('Posts', PostSchema);