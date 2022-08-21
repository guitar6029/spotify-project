const asyncHandler = require('express-async-handler');
const axios = require('axios');
const dotenv = require('dotenv').config();

const baseURL = "https//api.spotify.com";
const configOptions = {
    headers: {
        authorization: `Bearer ${process.env.SPOTIFY_SECRET}`
    }
}

//fetch example data from spotify api
const fetchData = asyncHandler(async(req,res)=>{
    try{
        const response = await axios.get('https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V', configOptions);
        // res.json({
        //     data: response.data
        // });
        console.log(response);
    }catch(e){
        console.log(e.message);
    }
})


module.exports = {
    fetchData
}