const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try{

        const myConnectionToDB = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to : ${myConnectionToDB.connection.host} `);
    }catch(e){
        console.log(e);
        process.exit(1);
    }
}

module.exports = connectToDatabase