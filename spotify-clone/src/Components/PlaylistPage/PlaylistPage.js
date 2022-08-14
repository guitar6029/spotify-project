import React from 'react'
import {useLocation} from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import TopMenu from '../TopMenu/TopMenu';
import Playlist from '../PlaylistCategory/PlaylistItem/Playlist/Playlist';

function PlaylistPage() {

  const location = useLocation();
  const playlistObj = location.state;
  
  return (

    <div className="layout">
    <Sidebar />
    <div className='layout__main'>
      <TopMenu />      
      <Playlist playlist={playlistObj}/>
    </div>
  </div>
  )
}

export default PlaylistPage