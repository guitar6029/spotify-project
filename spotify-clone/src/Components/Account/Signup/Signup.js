import React, { useState, useRef, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { UserAuth } from '../../../Context/UserAuth';
import './Signup.css';

function Signup() {


    const navigate = useNavigate();

    const { registerUser } = UserAuth();

    //register api URL
    // const REGISTER_URL = '/users/register';

    // for age restriction check
    //const MINIMUM_YEAR = 2009; 

    //for username and password requirements
    //const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{5,23}/;
    //const PASSWORD_REGEX = /^([?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


    //states
    const [email, setUserEmail] = useState('');
    const [confirm_email, setUserConfirmEmail] = useState('');
    const [password, setUserPassword] = useState('');
    const [username, setUsername] = useState('');


    //for email errors
    const [emailAlreadyUsed, setEmailAlreadyUsed] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [emailsMatch, setEmailsMatchMessage] = useState('');
    const [passwordError, setPasswordErrorMessage] = useState('')
    const [usernameError, setUsernameErorMessage] = useState('');


    //const [userBirthYear, setUserBirthYear] = useState('');
    //const [oldEnoughtToRegister, setOldEnoughToRegister] = useState(false);


    const [errorMessage, setErrorMessage] = useState('');

    //refs
    const focusOnFirstInput = useRef();
    const emailErrorRef = useRef();
    

    //to focus on first input, when the page loads
    useEffect(() => {
        focusOnFirstInput.current.focus();
    }, [])

    //spotify logo takes user to home page
    const rerouteToMainPage = () => {
        navigate('/');
    }

    const submitUserData = async (e) => {
        e.preventDefault();
        try{
            const response = await registerUser(email, username, password);
            navigate('/user/signin');
            //console.log(response.data);
        }catch(e){
            console.log(e.message);
        }

    }


    return (
        <>

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

                        <form onSubmit={submitUserData} className='user__container__option__container'>

                            <div className='user__container__optionLabel'>
                                <label htmlFor='email'>What's your email?</label>
                            </div>


                            <div className='user__container__optionInput'>
                                <input ref={focusOnFirstInput} type='email' name="email" value={email} autoComplete="off" placeholder="Enter your email" required onChange={(e) => setUserEmail(e.target.value)} />
                            </div>


                            <div className='user__container__optionLabel'>
                                <label htmlFor='confirm-email'>Confirm your email</label>
                            </div>

                            <div className='user__container__optionInput'>
                                <input type='email' name="confirm-email" value={confirm_email} autoComplete="off" placeholder="Enter your email again" required onChange={(e) => setUserConfirmEmail(e.target.value)} />
                            </div>

                            

                            <div className='user__container__optionLabel'>
                                <label htmlFor='password'>Create a password</label>
                            </div>

                            <div className='user__container__optionInput'>
                                <input type='password' name="password" value={password} placeholder="Enter your password" required onChange={(e) => setUserPassword(e.target.value)} />
                            </div>

                            <div className='user__container__optionLabel'>
                                <label htmlFor='username'>Pick your username</label>
                            </div>

                            <div className='user__container__optionInput'>
                                <input type="text" name="username" value={username} autoComplete="off" required onChange={(e) => setUsername(e.target.value)} />
                            </div>



                            <div className='user__container__optionSubheader'>
                                <span>This appears on your profile</span>
                            </div>

                            <>
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
                            </>

                            <div className='user__container__checkbox'>
                                <input type="checkbox" />
                                <span>Share my registration data with Spotify's content providers for marketing purposes.</span>
                            </div>


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