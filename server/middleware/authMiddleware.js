const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../Models/User');


const protectedRoute = asyncHandler(async (req,res, next)=>{
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer') ){
        try{
            //get token from header
            token = req.headers.authorization.split(' ')[1]

            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //get user from token (the user id)
            req.user = await User.findById(decoded.id).select('-password')

            next()

        }catch(e){
            console.log(e)
            res.status(400)
            throw new Error('Not authorized')
        }
    }
    
    if(!token){
        res.status(401)
        throw new Error('not authorized, no token');
    }
})


module.exports = { protectedRoute }