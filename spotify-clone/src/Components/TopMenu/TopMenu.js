import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './TopMenu.css';

function TopMenu() {


  const placeHolder = "Artists, songs, or podcasts";

  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
      
      setToggle(previousState => !previousState);
      
  }

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <Link to="/premium"><h3>Premium</h3></Link>
        <Link to="/support"><h3>Support</h3></Link>
        <Link to="/download"><h3>Download</h3></Link>
        <h3>|</h3>
        <Link to="/user/signup"><h3>Sign up</h3></Link>
        <Link to="/user/signin"><h3>Log in</h3></Link>
      </div>

    </div>
  )
}

export default TopMenu