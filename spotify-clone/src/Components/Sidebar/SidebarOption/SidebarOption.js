import React from 'react'
import {Link} from 'react-router-dom';
import './SidebarOption.css';

function SidebarOption({text, Icon, routeTo}) {
 
  return (
    <div className='sidebarOption' >
            <Link to={routeTo}><Icon/><h4>{text}</h4> </Link>
           
    </div>
  )
}

export default SidebarOption