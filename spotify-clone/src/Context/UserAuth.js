import { useState, useContext, createContext, useEffect } from 'react';
//import {UserAPI} from '../API/UserAPI';
import axios from 'axios';
/*******
 * 
 import {
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut, 
     onAuthStateChanged
    } from 'firebase/auth'
    
    import { auth } from '../firebase';
    
    */

    const UserContext = createContext();


export const AuthContext = ({ children }) => {

    const [user, setUser] = useState({});

    /*****  used for Firebase AUTH METHOD
     /*******
    const createUser = (email, password, displayName) => {
        return createUserWithEmailAndPassword(auth, email, password, displayName);
    }
    
    
    const signInUser = (email, password, displayName) => {
        return signInWithEmailAndPassword(auth, email, password, displayName);
    }
    
    const logoutUser = () => {
        return signOut(auth);
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, []);
    
    
    **********/

    // useEffect(()=>{
    //        //for jason web token (jwt) 
    // const createUser = async (email, username, password) => {
    //     // console.log(`Email : ${email}  Password: ${password} Username : ${username}`);
    //     let obj = {
    //         email: email,
    //         username: username,
    //         password: password
    //     }

    //     try{
    //         const response = axios.post("http://localhost:3005/users", obj)
    //         console.log(response.data);
    //     }catch(e){
    //         console.log(e.message)
    //     }
    
    // }
    // }, []) 


    const createUser = () => {
        
    }

        //for jwt method
    const loginUser = (email, password) => {
            
    }
        //for jwt method
    const logoutUser = () => {

    }

    return (
        /**** used for JWT method */
        <UserContext.Provider value={{createUser}}>
            {children}
        </UserContext.Provider>
    )
        /*****
            Used for Firebase Auth method 
         <UserContext.Provider value={{ createUser, signInUser, logoutUser, user }} >
         {children}
         </UserContext.Provider>
            )
         */
}

export const UserAuth = () => {
    return useContext(UserContext);
}