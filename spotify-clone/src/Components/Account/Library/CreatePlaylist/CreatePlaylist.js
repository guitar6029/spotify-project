import {useState} from 'react'
import Sidebar from '../../../Sidebar/Sidebar'
import './CreatePlaylist.css';

function CreatePlaylist() {

    const [emptyPlaylist, setPlaylist] = useState(true);

    return (
        <div className="layout">
    <Sidebar />
    <div className='create__playlist'>
      <div className='create__playlist__top'>
            <div className='playlist__image'>
                <div><i class="fa-solid fa-music"></i></div>
            </div>

            <div className='playlist__description'>
                <h5>Public Playlist</h5>
                <h3 className='font__large'>My Playlist #1</h3>
                <span>username</span>
            </div>
      </div>

      <div className='create__playlist__middle'>
      <i class="fa-solid fa-user-plus"></i>
      <i class="fa-solid fa-ellipsis"></i>
      </div>

      <div className='create__playlist__bottom'>
         <h3>Lets find something for your playlist</h3>
         <input type='text' />   
      </div>
    </div>
  </div>
    )
}

export default CreatePlaylist