import { useState, useContext, createContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

    const UserContext = createContext();


export const AuthContext = ({ children }) => {


    //login api
    const LOGIN_URL = '/users/login';
    //register api URL
    const REGISTER_URL = '/users/register';

    const navigate = useNavigate();

    const [user, setUser] = useState({});

    const getUserInfo = (email, username, password) => {
        console.log(`${email}, ${username}, ${password}`)
    }

    const registerUser = async(email, username, password) => {
        try {
            await axios.post(REGISTER_URL, ({ email, username, password }), { headers: { 'Content-Type': "application/json" } });    
            
            navigate('/user/signin');
        } catch (e) {
            if (!e?.response) {
                console.log('no server response')
            } else if (e.response?.status === 409) {
                console.log('error : username already in use')
                //setUsernameErorMessage('Username already taken');

            } else {
                console.log('email/username alredy in use');
                //setEmailAlreadyUsed('Email/username already in use');
                console.log(e.message);
            }
        }
    }

    const loginUser = async (email, password) => {
        try {
            let obj = {
                email: email,
                password: password
            }
            const response = await axios.post(LOGIN_URL, obj, {
                headers: { 'Content-Type': "application/json" }
            },
            );
            
            navigate('/');
            console.log(response.data);
            console.log(JSON.stringify(response));
            navigate('/');
        } catch (e) {
            console.log('Email and/or password not correct');
            console.log(e.message);
        }

    }
        
    const logoutUser = () => {

    }

    return (  
        <UserContext.Provider value={{registerUser, loginUser, logoutUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext);
}