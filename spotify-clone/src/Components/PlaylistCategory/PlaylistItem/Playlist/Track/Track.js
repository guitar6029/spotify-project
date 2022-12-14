import { useState } from 'react';
import {NotifyUser} from '../../../../../Context/Notification';

function Track({ title, trackNumber, artist, album, albumImg }) {


  const [addToLikedSongs, setAddLikedSong] = useState(false);
  const {notifyUser} = NotifyUser();

  const handleTrackLike = () => {


    setAddLikedSong(previousState => !previousState);
    notifyUser(addToLikedSongs);
    
    
  }

  return (
    <div className='playlist__tracks' >
      <div className="track__trackNumber"> {trackNumber} </div>

      <div className="track">

        <div className="track__album__image">

          <img src={`../${albumImg}`} alt={title} />

        </div>

        <div className='track__album__description'>

          <div className='track__album__albumTrack'>
            <span>{title}</span>
          </div>

          <div className='track__album__artist'>
            <span>{artist}</span>
          </div>

        </div>

      </div>

      <div className='track__album'>{album}</div>
      <div className='track__daysAdded'>7 days ago</div>
      <div className='track__trackLength'><i className="fa fa-heart-o margin__right pointer" onClick={handleTrackLike}></i>3:36
        <i className="fa-solid fa-ellipsis margin__left pointer"></i></div>
    </div>
  )
}

export default Track