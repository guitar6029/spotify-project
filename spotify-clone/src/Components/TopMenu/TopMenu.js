import React, {useState, useRef, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { UserAuth } from '../../Context/UserAuth';
import './TopMenu.css';

function TopMenu() {

  const {user, logoutUser} = UserAuth();

  const placeHolder = "Artists, songs, or podcasts";

  const [toggle, setToggle] = useState(false);
  const [togleDisplayAccountMenu, setAccountMenuToggle] = useState(false);
  
  const navigate = useNavigate();
  
  const accountMenu = useRef();

  // for search
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  // logout user
  const handleLogout = async() => {
      try{
          await logoutUser();
          navigate('/');
      }catch(e){
        console.log(e.messages);
      }
  }


    // to toggle account menu
  const showAccountOptions = () => {
        //if(!accountMenu.current.conta)
        setAccountMenuToggle(previousState => !previousState);
  }

  return (
    <div className='topmenu'>

      <div className='topmenu__search'>

        <form onClick={handleSubmit}>
          <input type="text" placeholder={placeHolder} />
          <button><i id="topmenu__magnifyingGlass" className="fa-solid fa-magnifying-glass"></i></button>
        </form>

      </div>

      <div className='topmenu__options'>
        { (user) ? null :<Link to="/user/signup"><h3>Sign up</h3></Link>}
        { (user) ? <div>
          <i className="fa-solid fa-circle-user userIcon" onClick={showAccountOptions}></i>
          <div ref={accountMenu}  className={ (togleDisplayAccountMenu)  ? 'show' : 'hide' }>
            <h3>Profile</h3>
            <h3>Settings</h3>
            <h3 onClick={handleLogout}>Log out</h3>

          </div>
          </div> : <Link to="/user/signin"><h3>Log in</h3></Link>}
      </div>

    </div>
  )
}

export default TopMenu