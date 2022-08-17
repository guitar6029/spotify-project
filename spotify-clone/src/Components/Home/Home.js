import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import TopMenu from '../TopMenu/TopMenu'
import Main from '../Main/Main';

function Home({playlist}) {

  return (
    <div className="layout">
    <Sidebar />
    <div className='layout__main'>
      <TopMenu />
      <Main  playlist={playlist}/>
    </div>
  </div>
  )
}

export default Home