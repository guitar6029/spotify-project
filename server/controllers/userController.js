const asyncHandler = require('express-async-handler');
const User = require('../Models/User');

/***
 * 
 * gets the available users from db
 * 
 */

const getUsers = asyncHandler(async (req,res)=>{
    const users = await User.find();

    res.status(200).json(users);
})


/****
 * 
 * creates a new user
 * public, search by name in the search bar, just like any artists, song or playlist
 */

const setUser = asyncHandler(async (req,res)=>{
    if(req.body.text){
        res.status(400);
        throw new Error("please add all of the input requirements")
    }

    const user = await User.create({
        userEmail : req.body.userEmail,
        userName : req.body.userName,
        createdAt : Date.now
    })

    res.status(200).json(user)
})



/****
 * 
 * 
 * updates the user
 * private, only the user could update their information
 */
const updateUser = asyncHandler(async (req,res)=>{
    const user = await User.findById(req.params.id)
    if(!user){
    
        res.status(400)
        throw new Error('User not found.');
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new : true});

    res.status(200).json(updateUser)

})

/***
 * 
 * delete user account
 * private, only for user and admin
 */

const deleteUser = asyncHandler(async (req,res)=> {
    const user = await  User.findById(req.params.id)
    if(!user){
        res.status(400)
        throw new Error('User not found.')
    }

    await user.remove();

    res.status(200).json({id: req.params.id})

})


module.exports = {
    getUsers, setUser, updateUser, deleteUser
}