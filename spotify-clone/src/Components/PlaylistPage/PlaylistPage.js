import React from 'react'
import {useLocation} from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import TopMenu from '../TopMenu/TopMenu';
//import Playlist from '../PlaylistCategory/PlaylistItem/Playlist/Playlist';

function PlaylistPage() {

  
  const location = useLocation();
  const playlistObj = location.state;
  console.log(playlistObj);
  const styles = {
    marginTop: '10em',
    color: 'red'
  }

  return (

    <div className="layout">
    <Sidebar />
    <div className='layout__main'>
      {/* <TopMenu /> */}
      <div style={styles}>
        {/* <h3>{playlistObj.playlistData.title}</h3> */}
        
      </div>
      {/* <Playlist /> */}
    </div>
  </div>
  )
}

export default PlaylistPage