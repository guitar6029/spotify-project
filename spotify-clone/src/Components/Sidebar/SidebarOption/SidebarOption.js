import React from 'react'
import {Link} from 'react-router-dom';
import './SidebarOption.css';

function SidebarOption({text, Icon, routeTo}) {
 
  return (
    <div className='sidebarOption' >
            <Link to={routeTo}><Icon/> {text}</Link>
            {/* <h4>{text}</h4>        */}
    </div>
  )
}

export default SidebarOption