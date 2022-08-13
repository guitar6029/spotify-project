import React from 'react'
import PlaylistCategory from '../PlaylistCategory/PlaylistCategory';
import './Section.css';

function Section({title, subHeading, playlists}) {
  return (
    <div className='section'>
        <div className='section__title__flex'>
       
        <div className='section__flex__sides'>
       
          <h3 className='section__title' >{title}</h3>
          <h5 className='section__seeAll'>SEE ALL</h5>
       
       </div>
        
        <h5 className='section__subheading' >{subHeading}</h5>
        </div>
        <PlaylistCategory playlists={playlists}/>
    </div>
  )
}

export default Section