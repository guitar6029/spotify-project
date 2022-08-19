const express = require('express');
const app = express();
const uuid = require('uuid');
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3005;
const mongoose = require('mongoose');
const connectToDatabase = require('./config/db');

//connect to mongodb
connectToDatabase()

app.use(express.static('./public'));

app.use(express.urlencoded({ extended: false }));


let playlists = [
    {
        id : uuid.v4(),
        title: 'Deep Focus',
        playlistImage : "images/khamkeo-vilaysing-rpVQJbZMw8o-unsplash.jpg", 
        description : "Keep calm and focus with ambient and post-rock music.",
        category: 'Deep Focus',
    },
    {
        id : uuid.v4(),
        title: 'Peaceful Piano',
        playlistImage : "images/miguel-dominguez-5yDL5rOKrUM-unsplash.jpg", 
        description : "Relax and indulge with beautiful piano pieces",
        category: 'Deep Focus',
    },
    {
        id : uuid.v4(),
        title: 'lofi beats',
        playlistImage : "images/ben-blennerhassett-srQukngaeOM-unsplash.jpg", 
        description : "The chillest beats to help you relax, study, code, and focus.",
        category: 'Deep Focus',
    },
    { 
        id : uuid.v4(),
        title: 'Dreamy Pop',
        playlistImage : "images/florencia-viadana-pUAuMUw4ny4-unsplash.jpg", 
        description : "Blissful indie for dreamers.",
        category: 'Deep Focus',
    },
    {
        id : uuid.v4(),
        title: 'Mood Booster',
        playlistImage : "images/joe-caione-qO-PIF84Vxg-unsplash.jpg", 
        description : "Get happy with today's dose of feel-good songs!",
        category: 'Mood Booster',
    },
    {
        id : uuid.v4(),
        title: 'Good Vibes',
        playlistImage : "images/heather-ford-vAfCO8xrz0I-unsplash.jpg", 
        description : "Set it off with these epic anthems. Only good vibes here!",
        category: 'Mood Booster',
    },
    {
        id : uuid.v4(),
        title: 'Have a Great Day!',
        playlistImage : "images/gabrielle-henderson-DgCPTkDqhHg-unsplash.jpg", 
        description : "Feel great with these timelessly fun songs!",
        category: 'Mood Booster',
    },
    {
        id : uuid.v4(),
        title: 'Sit and Chill',
        playlistImage : "images/kylo-FPZ8Lnn5Ws8-unsplash.jpg", 
        description : "The perfect soundtrack for a chill day",
        category: 'Mood Booster',
    }
]

app.use('/users', require('./routes/userRoutes'));

app.get('/api', (req,res) => {

    res.json(playlists);
})
app.listen(port, () => {
    console.log(`Listening on port : ${port}`);
})