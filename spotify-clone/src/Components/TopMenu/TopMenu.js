import React, {useState} from 'react'
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

      {/* <div class="topmenu__expand">
      <i className={ (toggle) ? "fa-solid fa-x menuIcon" : "fa-solid fa-bars menuIcon"} onClick={toggleMenu}></i>
      </div>           */}

      <div className='topmenu__options'>
        <h3>Premium</h3>
        <h3>Support</h3>
        <h3>Download</h3>
        <h3>|</h3>
        <h3>Sign up</h3>
        <h3>Log in</h3>
      </div>

      {/* <i id="accountIcon" className="fa-solid fa-user icons"></i> */}
    </div>
  )
}

export default TopMenu