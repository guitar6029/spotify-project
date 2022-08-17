const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
   
    username : {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    cratedAt: {
        type: Date,
        immutable: true,
        default: Date.now,
    },
    
});

module.exports = mongoose.model('User', UserSchema);

