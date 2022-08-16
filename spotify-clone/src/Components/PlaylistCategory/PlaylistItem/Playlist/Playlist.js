import { useState } from 'react'
import {v4} from 'uuid';
import Track from './Track/Track';
import './Playlist.css';

function Playlist({ playlist }) {


  // const [mouseEnteredTrackSection, modifyIconsOnHover] = useState(false);
  // const [addToLikedSongs, toggleLike] = useState(true);
  // const [counter, setCounter] = useState(0);

  

  const tracks = [
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    { id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
    {
      id: v4(),
      title: 'Some track',
      artist: 'Mestis',
      album: 'Basal Manglia'
    },
  ]


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

      {tracks.map( (track, trackNumber) => {
        return (
          <Track key={track.id}  trackNumber={++trackNumber}  title={track.title} artist={track.artist} album={track.album} albumImg={playlist.playlistImage} />
        )
      })}

    </div>
  )
}

export default Playlist