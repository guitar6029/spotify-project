import { useState } from 'react'
import { useNavigate, Link, useParams, useLocation } from 'react-router-dom';
import './PlaylistItem.css';
import {Player} from '../../../Context/SpotifyPlayer';

function PlaylistItem({ title, description, playlistImage, id }) {

  const [myPath, setPath] = useState(id);

  const {userClickedPlayButton} = Player();
  // let playlistData = {

  //   id : id,
  //   title : title,
  //   description: description,
  //   playlistImage : playlistImage
  // }

  let navigate = useNavigate();


  // const handleClick = () => {
  //   let obj = {
  //     title: title,
  //     playlistImage : playlistImage,
  //     description : description
  //   }

  //   navigate(`/playlist/${myPath}`);
  // }

  const handleReroute = () => {
    navigate(`/playlist/${id}`, {
      state: {
        id: id,
        title: title,
        description: description,
        playlistImage: playlistImage
      }
    });
  }



  const playMusicHandler = () => {
    userClickedPlayButton();
    console.log('clicked play');
  }

  return (
    <div className='playlist__item__container' >

      <div className='playlist__item__image'>
        {/* <Link to={`/playlist/${myPath}`} state={playlistData}> <img src={playlistImage} alt={title} /></Link> */}
        <img src={playlistImage} alt={title} onClick={handleReroute} />
        <i className="fa-solid fa-circle-play playIcon" onClick={playMusicHandler}></i>
      </div>

      <div className='playlist__item__title'>
        <h4>{title}</h4>
      </div>

      <div className='playlist__item__description'>
        {description}
      </div>

    </div>
  )
}

export default PlaylistItem