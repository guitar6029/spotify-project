import { useState, useEffect, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from '../../../API/axios';

import './Signin.css';

function Signin() {

    //used for rerouting
    const navigate = useNavigate();

    //login api
    const LOGIN_URL = '/users/login';

    //states
    const [email, setUserEmail] = useState('');
    const [password, setUserPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    //refs
    const focusOnFirstInput = useRef();
    const errorRef = useRef();
    
    //to set focus on first input, when page loads
    useEffect(() => {
        focusOnFirstInput.current.focus();
    }, [])

    //render error message while email and password are invalid
    useEffect(() => {
        setErrorMessage('');
    }, [email, password])

    const handleInputEmail = (e) => {

        setUserEmail(e.target.value);
    }

    const handleInputPassword = (e) => {

        setUserPassword(e.target.value);
    }


    const authUserInput = async (e) => {
        e.preventDefault();
        try {
            let obj = {
                email: email,
                password: password
            }
            const response = await axios.post(LOGIN_URL, obj, {
                headers: { 'Content-Type': "application/json" }
            },
            );

            console.log(response.data);
            console.log(JSON.stringify(response));
            navigate('/');
        } catch (e) {
            
            setErrorMessage("Email and/or password are incorrect. Please try again");
            console.log(e.message);
        }

    }

    const rerouteToMainPage = () => {
        navigate('/');
    }


    const redirectUser = () => {
        navigate('/');
    }


    return (
        <>
            <div ref={errorRef} className={errorMessage ? "error_message" : "offscreen"}>{errorMessage}</div>
            <div className='userPage__backgroundColor center__items'>
                <div className='user__container'>
                    <div className='user__container__header'>
                        <div className='user__container__header__logo' onClick={rerouteToMainPage}>
                            <i className="fa-brands fa-spotify"></i>
                            <h3>Spotify</h3>
                        </div>
                        <div className='user__container__header__options'>
                            <div className='user__container__header__optionItem__title'>
                                <h2>To continue, login to Spotify.</h2>
                            </div>
                            <div className='user__container__header__optionItem'>
                                {/* not yet implemented */}
                                <button className='user__container__header__optionItem__button facebook__background'><i className="fa-brands fa-facebook"></i>Continue with Facebook</button>
                            </div>
                            {/* not yet implemented */}
                            <div className='user__container__header__optionItem'>
                                <button className='user__container__header__optionItem__button google black__outline'><i className="fa-brands fa-google"></i>Continue with Google</button>
                            </div>
                        </div>
                    </div>
                    <div className='user__container__separator'>
                        <span>or</span>
                    </div>

                    <div className='user__container__option__container'>

                        <div className='user__container__option__container__title'>
                            <h3>Sign in with your email address</h3>
                        </div>

                        <form onSubmit={authUserInput} className='user__container__option__container'>

                            <div className='user__container__optionLabel'>
                                <label htmlFor='email'>What's your email?</label>
                            </div>

                            <div className='user__container__optionInput'>
                                <input 
                                name="email" 
                                ref={focusOnFirstInput} 
                                type='email' 
                                placeholder="Enter your email" 
                                value={email}
                                required 
                                onChange={handleInputEmail} />
                            </div>

                            <div className='user__container__optionLabel'>
                                <label htmlFor='password'>Password</label>
                            </div>

                            <div className='user__container__optionInput'>
                                <input 
                                type='password' 
                                name="password" 
                                placeholder="Enter your password" 
                                value={password}
                                required 
                                onChange={handleInputPassword} />
                            </div>


                            <div className='submit__button'>
                                <button>Log in</button>
                            </div>

                            <div className='user__redirect'>
                                <span>Don't have an account? <Link to="/user/signup">Sign up.</Link></span>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Signin