const mongoose = require('mongoose');

const PlaylistSchema = mongoose.Schema({
    creator : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref: 'User'
    },
    title : {
        type: String,
        required: true,
    },
    description : {
        type: String,
        required: true
    },
    playlistImage : {
        type: String,
        required: true
    },
    dateAdded : {
        type : Date,
        immutable: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Playlist', PlaylistSchema)