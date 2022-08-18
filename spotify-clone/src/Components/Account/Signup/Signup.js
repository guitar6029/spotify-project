import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { UserAuth } from '../../../Context/UserAuth';
import './Signup.css';

function Signup() {


    // to save user email and username for User Collection in MongoDb
    // also user info will be authorized using Firebase Auth
    const [userEmail, setUserEmail] = useState('');
    const [userConfirmEmail, setUserConfirmEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userUsername, setUsername] = useState('');
    const [sameEmail, confirmEmails] = useState(false);
    const [noErrors, setErrors] = useState(false);



    const { createUser } = UserAuth();

    const navigate = useNavigate();

    const handleInputEmail = (e) => {
        setUserEmail(e.target.value);
    }

    const handleInputConfirmEmail = (e) => {
        setUserConfirmEmail(e.target.value);
    }

    const handleInputPassword = (e) => {
        setUserPassword(e.target.value);
    }

    const handleInputUsername = (e) => {
        setUsername(e.target.value);
    }

    const rerouteToMainPage = () => {
        navigate('/');
    }

    const confirmUserEmails = (e) => {
        e.preventDefault();
        if (userEmail === userConfirmEmail && userEmail.length >= 4) {
            console.log('matches');
            setUserData(userEmail, userPassword);
        } else {
            console.log('the email not matching');
        }
    }

    const setUserData = async (userEmail, userPassword) => {
        try {
            await createUser(userEmail, userPassword);
            redirectUser();
        } catch (e) {
            console.log(e.messages);
        }
    }


    const redirectUser = () => {
        navigate('/');
    }


    return (
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

                    <form onSubmit={confirmUserEmails} className='user__container__option__container'>

                        <div className='user__container__optionLabel'>
                            <label>What's your email?</label>
                        </div>

                        <div className='user__container__optionInput'>
                            <input type='email' placeholder="Enter your email" required onChange={handleInputEmail} />
                        </div>

                        <div className='user__container__optionLabel'>
                            <label>Confirm your email</label>
                        </div>

                        <div className='user__container__optionInput'>
                            <input type='email' placeholder="Enter your email again" required onChange={handleInputConfirmEmail} />
                        </div>

                        <div className='user__container__optionLabel'>
                            <label>Create a password</label>
                        </div>

                        <div className='user__container__optionInput'>
                            <input type='password' placeholder="Enter your password" required onChange={handleInputPassword} />
                        </div>

                        <div className='user__container__optionLabel'>
                            <label>Pick your username</label>
                        </div>

                        <div className='user__container__optionInput'>
                            <input type="text" required onChange={handleInputUsername} />
                        </div>

                        <div className='user__container__optionSubheader'>
                            <span>This appears on your profile</span>
                        </div>

                        <div className='user__contaier__optionSelect__title'>
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
                                <input type="text" placeholder='DD' required />
                            </div>

                            <div className='user__container__optionSelect__input'>
                                <span>Year</span>
                                <input type="number" min="1920" max="2009" placeholder='YYYY' required />
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

                        </div>

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
    )
}

export default Signup