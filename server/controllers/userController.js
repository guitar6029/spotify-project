const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const User = require('../Models/User');



/****
 * 
 * register a new user
 * generate jwt token
 */

const registerUser = asyncHandler(async (req, res) => {

    if (req.body.text) {
        res.status(400);
        throw new Error("Please add all of the input requirements")
    }

    //get input from the signup component
    const { email, username, password } = req.body

    //if empty
    if (!email || !username || !password) {
        res.status(400)
        
        throw new Error('Please add all fields')
    }

    //finds if email or username already exists
    const userExists = await User.findOne({ "$or": [{ email: email }, { username: username }] })
    if (userExists) {
        res.status(400)
        throw new Error('User already exists with that email/username');
    }

    //hash the password
    const saltRounds = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    //create the user
    const user = await User.create({
        email,
        username,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            email: user.email,
            username: user.username,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data');
    }
})


/****
 * 
 * login the user
 * generate jwt token
 */
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            email: user.email,
            username: user.username,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(400)
        throw new Error('User email or password is incorrect, please try again')
    }
})

//user account
const userAccount = asyncHandler(async (req, res) => {
    const { _id, username, email } = await User.findById(req.user.id)
    res.status(200).json({
        id: _id,
        username: username,
        email: email
    });
})


//jwt token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}


module.exports = {
    registerUser, loginUser, userAccount
}