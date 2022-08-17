import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom';
import { UserAuth } from '../../../Context/UserAuth';
import './Signin.css';

function Signin() {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    
    const [noErrors, setErrors] = useState(false);

    const {signInUser} = UserAuth();

    const navigate = useNavigate();

    const handleInputEmail = (e) => {
            setUserEmail(e.target.value);
    }


    const handleInputPassword = (e) => {
        setUserPassword(e.target.value);
    }

    const rerouteToMainPage = () => {
        navigate('/');
    }
    
    const authUserInput = async(e) => {
        e.preventDefault();
        try{
            await signInUser(userEmail, userPassword);
            navigate('/');
        }catch(e){
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
                
                <form onSubmit={authUserInput}  className='user__container__option__container'>
                    
                    <div className='user__container__optionLabel'>
                        <label>What's your email?</label>
                    </div>
                    
                    <div className='user__container__optionInput'>
                        <input type='email' placeholder="Enter your email" required onChange={handleInputEmail}/>
                    </div>
                    
                    <div className='user__container__optionLabel'>
                        <label>Confirm your email</label>
                    </div>
                    
                
                    <div className='user__container__optionInput'>
                        <input type='password' placeholder="Enter your password" required onChange={handleInputPassword}/>
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
  )
}

export default Signin