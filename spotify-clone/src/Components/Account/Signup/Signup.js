import React, { useState, useRef, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
//import { UserAuth } from '../../../Context/UserAuth';
import axios from '../../../API/axios';
import './Signup.css';

function Signup() {

    // used for firebase auth
    //const { createUser } = UserAuth();
    
    const userRef = useRef(null);

    const navigate = useNavigate();

    //register api URL
    const REGISTER_URL = '/users/register';

    // for age restriction check
    //const MINIMUM_YEAR = 2009; 

    //for username and password requirements
    //const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{5,23}/;
    //const PASSWORD_REGEX = /^([?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    // to save user email and username for User Collection in MongoDb
    // also user info will be authorized using Firebase Auth or JWT 
    const [email, setUserEmail] = useState('');
    const [userEmailError, setUserEmailError] = useState(false);

    const [userConfirmEmail, setUserConfirmEmail] = useState('');
    const [userEmailsMatching, setUserEmailsMatching] = useState(false);

    const [password, setUserPassword] = useState('');
    
    const [username, setUsername] = useState('');
    
    const [userBirthYear, setUserBirthYear] = useState('');
    
    const [oldEnoughtToRegister, setOldEnoughToRegister] = useState(false);
    
    const [sameEmail, confirmEmails] = useState(false);
    
    const [ifErrors, setErrors] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    // useEffect(()=>{
        // }, [])
        
    //useRef.current.focus();

    const handleInputEmail = (e) => {

        if(email.length <= 3){
            setUserEmailError(true);
        }
        else{
            setUserEmailError(false);
        }
        
        setUserEmail(e.target.value);
        
    }

    const handleInputConfirmEmail = (e) => {
        if(email !== userConfirmEmail){
            setUserEmailsMatching(true);
            setUserConfirmEmail(e.target.value);
        }
        if(email === userConfirmEmail){
            setUserConfirmEmail(e.target.value);
            setUserEmailsMatching(false);
        }
    }

    const handleInputPassword = (e) => {
        setUserPassword(e.target.value);
    }

    const handleInputUsername = (e) => {
        setUsername(e.target.value);
    }

    // const handleInputYear = (e) => {
    //     setUserBirthYear(e.target.value);
    // }


    const rerouteToMainPage = () => {
        navigate('/');
    }


    const confirmUserData = (e) => {
        e.preventDefault();
        if (email === userConfirmEmail && email.length >= 4) {
            
            console.log('EMAIL : matches');
            //if email and confirmed email, password and age passes the parameters, then
            // take the user input and create the user account
            setUserData(email, username  , password);

        } 
        if (email !== userConfirmEmail && email.length >= 4) {
            
            setErrorMessage('Emails are not matching');
            console.log('the email not matching');
            setErrors(previousState => !previousState);
        }
        // else
        // {
        //     setErrorMessage('Does not meet age requirement')
        //     setErrors(previousState => !previousState);
        //     console.log('Does not meet age requirement');
        // }
    }

    const setUserData = async (email, username, password) => {
        try {
            let obj = {
                email : email,
                username : username,
                password : password
            }

            const response = await axios.post(REGISTER_URL, obj, {
                headers : {'Content-Type': "application/json"}
            },
            );

            console.log(response.data);
            console.log(JSON.stringify(response));
            navigate('/');
            //redirectUser();
        } catch (e) {
            if(!e?.response){
                console.log('no server response')
            }else if (e.response?.status === 409){
                console.log('username was already taken');
            }else {
                console.log(e.message);
            }
        }
    }


    const redirectUser = () => {
        navigate('/');
    }


    return (
        <>
       {/* <div className='error__notification'><h3>{errorMessage}</h3></div> */}
        <div className='userPage__backgroundColor center__items'>
            <div className='user__container'>
                <div className='user__container__header'>
                    <div className='user__container__header__logo' onClick={rerouteToMainPage}>
                        <i className="fa-brands fa-spotify"></i>
                        <h3>Spotify</h3>
                    </div>
                    <div className='user__container__header__options'>
                        <div className='user__container__header__optionItem__title'>
                            <h2>Sign up and start listening.</h2>
                        </div>
                        <div className='user__container__header__optionItem'>
                            {/* not yet implemented */}
                            <button className='user__container__header__optionItem__button facebook__background'><i className="fa-brands fa-facebook"></i>Sign up with Facebook</button>
                        </div>
                        {/* not yet implemented */}
                        <div className='user__container__header__optionItem'>
                            <button className='user__container__header__optionItem__button google black__outline'><i className="fa-brands fa-google"></i>Sign up with Google</button>
                        </div>
                    </div>
                </div>
                <div className='user__container__separator'>
                    <span>or</span>
                </div>

                <div className='user__container__option__container'>

                    <div className='user__container__option__container__title'>
                        <h3>Sign up with your email address</h3>
                    </div>

                    <form onSubmit={confirmUserData} className='user__container__option__container'>

                        <div className='user__container__optionLabel'>
                            <label htmlFor='email'>What's your email?</label>
                        </div>


                        <div className='user__container__optionInput'>
                            <input ref={userRef} type='email' name="email" value={email} placeholder="Enter your email" required onChange={handleInputEmail} />
                        </div>


                       {/* <div className='error__notification__input'>
                            Email needs at be at least 4 characters long
                        </div> */}

                        <div className='user__container__optionLabel'>
                            <label htmlFor='confirm-email'>Confirm your email</label>
                        </div>

                        <div className='user__container__optionInput'>
                            <input type='email' name="confirm-email" value={userConfirmEmail} placeholder="Enter your email again" required onChange={handleInputConfirmEmail} />
                        </div>

                       {/* <div className='error__notification__input'>
                            Emails do not match 
                        </div> */}

                        <div className='user__container__optionLabel'>
                            <label htmlFor='password'>Create a password</label>
                        </div>

                        <div className='user__container__optionInput'>
                            <input type='password' name="password" value={password} placeholder="Enter your password" required onChange={handleInputPassword} />
                        </div>

                        <div className='user__container__optionLabel'>
                            <label htmlFor='username'>Pick your username</label>
                        </div>

                        <div className='user__container__optionInput'>
                            <input type="text" name="username" value={username} required onChange={handleInputUsername} />
                        </div>

                        <div className='user__container__optionSubheader'>
                            <span>This appears on your profile</span>
                        </div>

                        {/* <div className='user__contaier__optionSelect__title'>
                            <h3>What's your date of birth?</h3>
                        </div>

                        <div className='user__container__birthday'>
                            <div className='user__container__optionSelect__select'>
                                <select>
                                    <option>Month</option>
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>November</option>
                                    <option>October</option>
                                    <option>December</option>
                                </select>
                            </div>
                            <div className='user__container__optionSelect__input'>
                                <span>Day</span>
                                <input type="number" min="1" max="31" placeholder='DD' required />
                            </div>

                            <div className='user__container__optionSelect__input'>
                                <span>Year</span>
                                <input type="number" min="1920" max="2009" placeholder='YYYY' required  onChange={handleInputYear}/>
                            </div>

                        </div>

                        <div className='user__contaier__optionSelect__title'>
                            <h3>What's your gender</h3>
                        </div>

                        <div className='user__container__optionRadio__container'>

                            <div className='user__container__optionRadio'>
                                <input type="radio" name="gender" />
                                <label>Male</label>
                            </div>

                            <div className='user__container__optionRadio'>
                                <input type="radio" name="gender" />
                                <label>Famale</label>
                            </div>

                            <div className='user__container__optionRadio'>
                                <input type="radio" name="gender" />
                                <label>Non-binary</label>
                            </div>

                        </div> */}

                        <div className='user__container__checkbox'>
                            <input type="checkbox" />
                            <span>Share my registration data with Spotify's content providers for marketing purposes.</span>
                        </div>
                        {/* google reCaptcha section */}

                        <div className='submit__button'>
                            <button>Sign up</button>
                        </div>

                        <div className='user__redirect'>
                            <span>Have an account? <Link to="/user/signin">Log in.</Link></span>
                        </div>

                    </form>
                </div>
            </div>

        </div>
        </>
    )
}

export default Signup