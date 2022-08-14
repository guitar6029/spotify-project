import { useState } from 'react'
import './Playlist.css';

function Playlist({ playlist }) {
  // console.log('playlist : ');
  // console.log(playlist);


  const [mouseEnteredTrackSection, modifyIconsOnHover] = useState(false);
  const [addToLikedSongs, toggleLike] = useState(true);

  const handleMouseEnter = () => {
    modifyIconsOnHover(previousState => !previousState);

  }

  const handleMouseLeave = () => {
    modifyIconsOnHover(previousState => !previousState);
  }


  const handleTrackLike = () => {

    
  }

  const onMouseHoverShowIcons = <div><i className="fa fa-heart-o margin__right pointer" onClick={handleTrackLike}></i>3:36
    <i className="fa-solid fa-ellipsis margin__left pointer"></i></div>

  return (
    <div className="playlist">

      <div className='playlist__top__section gradient__dark'>


        <div className="playlist__image">
          <img src={`../${playlist.playlistImage}`} alt={playlist.title} />
        </div>

        <div className='playlist__description '>
          <h5 className='playlist__description__type'>PLAYLIST</h5>
          <h2 className='playlist__description__title'>{playlist.title}</h2>
          <span className='playlist__description__description'>{playlist.description}</span>
        </div>

      </div>

      <div className='playlist__middle__section'>
        <i className="fa-solid fa-circle-play"></i>
        <i className="fa fa-heart-o"></i>
        <i className="fa-solid fa-ellipsis"></i>
      </div>

      <div className='playlist__bottom__section'>
        <div>#</div>
        <div>TITLE</div>
        <div>ALBUM</div>
        <div>DATE ADDED</div>
        <div><i className="fa-solid fa-clock"></i></div>
      </div>

      <div className='playlist__tracks' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="track__trackNumber">{(mouseEnteredTrackSection) ? <i className="fa-solid fa-play track__trackNumber"></i> : 1}</div>

        <div className="track">

          <div className="track__album__image">

            <img src={`../${playlist.playlistImage}`} alt={playlist.title} />

          </div>

          <div className='track__album__description'>

            <div className='track__album__albumTrack'>
              <span>Track</span>
            </div>

            <div className='track__album__artist'>
              <span>Artist</span>
            </div>

          </div>

        </div>
        <div className='track__album'>album</div>
        <div className='track__daysAdded'>7 days ago</div>
        <div className='track__trackLength'>{(mouseEnteredTrackSection) ? onMouseHoverShowIcons : "3:46"}</div>
      </div>

    </div>
  )
}

export default Playlist