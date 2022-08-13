import React from 'react'
import PlaylistItem from './PlaylistItem/PlaylistItem';

import './PlaylistCategory.css';

function PlaylistCategory({playlists}) {

  
  return (
    <div className='playlists'>
        {playlists.map(playlist => {
            return (
                
                <PlaylistItem key={playlist.id} title={playlist.title} description={playlist.description} playlistImage={playlist.playlistImage} id={playlist.id}/>
            )
        })}
    </div>
  )
}

export default PlaylistCategory