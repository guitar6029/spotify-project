import React from 'react'
import Section from '../Section/Section';

import './Main.css';

function Main({playlist, getPlaylistObj}) {

const moodPlaylists = playlist.filter(playlist => playlist.category === 'Mood Booster');

const focusPlaylists = playlist.filter(playlist => playlist.category === 'Deep Focus');

  return (
    <div className='main'>
      
        <Section title='Mood' subHeading="Playlist to match your mood" playlists={moodPlaylists}/>
        <Section title='Focus' subHeading="Music to help you concentrate" playlists={focusPlaylists}/>
    
      </div>
  )
}

export default Main