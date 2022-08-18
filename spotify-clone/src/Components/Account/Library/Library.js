import React, { useState } from 'react'
import Sidebar from '../../Sidebar/Sidebar'
//import TopMenu from '../../TopMenu/TopMenu'
import './Library.css';


function Library() {

  

  return (
    <div className="layout">
    <Sidebar />
    <div className='layout__main'>
       <nav className='library__nav'>
            <div className='library__nav__items'>
                <h3 className='library__nav__itemTitle'>Playlist</h3>
                <h3 className='library__nav__itemTitle'>Podcast</h3>
                <h3 className='library__nav__itemTitle'>Artists</h3>
                <h3 className='library__nav__itemTitle'>Albums</h3>
                {/* when the user selects the nav item, the db will filter by choice , then display 
                 the data below ie the collection from the given db name , the db finds the user id which was created when the user was registered
                  */}
            </div>
       </nav>
    </div>
  </div>
  )
}

export default Library