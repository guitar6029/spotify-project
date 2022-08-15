import React from 'react'

function Signup() {
  return (
    <div className='user__container'>
        <div className='user__container__header'>
            <div className='user__container__header__logo'>
                <i class="fa-brands fa-spotify"></i><h3>Spotify</h3>
            </div>
            <div className='user__container__header__options'>
                    <div className='user__container__header__optionItem'>
                        <button className='user__container__header__optionItem__button'>Sign up with Facebook</button>
                    </div>
                    <div className='user__container__header__optionItem'>
                        <button className='user__container__header__optionItem__button'>Sign up with Google</button>
                    </div>
            </div>
            <div className='user__container__separator'>
                <span>____</span><span>or</span><span>____</span>
            </div>
            <div className='user__container__option__container'>
                <div className='user__container__option__container__title'>
                    <h3>Sign up with your email</h3>
                </div>
                <form className='user__container__option__container'>
                    <div className='user__container__optionLabel'>
                        <label>What's your email?</label>
                    </div>
                    <div className='user__container__optionInput'>
                        <input type='email' placeholder="Enter your email" required/>
                    </div>
                    <div className='user__container__optionLabel'>
                        <label>Confirm your email</label>
                    </div>
                    <div className='user__container__optionInput'>
                        <input type='email' placeholder="Enter your email again" required/>
                    </div>
                    <div className='user__container__optionLabel'>
                        <label>Create a password</label>
                    </div>
                    <div className='user__container__optionInput'>
                        <input type='password' placeholder="Enter your password" required/>
                    </div>
                    <div className='user__container__optionLabel'>
                        <label>Pick your username</label>
                    </div>
                    <div className='user__container__optionInput'>
                        <input type="text" required/>
                    </div>
                    <div className='user__container__optionSubheader'>
                        <span>This appears on your profile</span>
                    </div>
                    <div className='user__contaier__optionSelect__title'>
                            <h3>What's your date of birth?</h3>
                    </div>
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

                        <div className='user__container__optionSelect__input'>
                            <span>Day</span>
                            <input type="text" placeholder='DD'  required/>
                        </div>
                        <div className='user__container__optionSelect__input'>
                            <span>Year</span>
                            <input type="number" min="1920" max="2009"    placeholder='YYYY'  required/>
                        </div>
                        <div className='user__container__optionRadio__container'>
                        <div className='user__container__optionRadio'>
                            <input type="radio"  />
                        </div>
                        <div className='user__container__optionRadio'>
                            <input type="radio"  />
                        </div>
                        <div className='user__container__optionRadio'>
                            <input type="radio"  />
                        </div>
                        </div>
                        {/* google reCaptcha section */}
                        <div className='submit__button'>
                            <button>Sign up</button>
                        </div>
                    </div>


                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Signup