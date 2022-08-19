import { useRef, useState } from 'react'
import './PlayerBar.css';
// the player bar will show once the user clicks play
//the music controls and song description will show
function PlayerBar({ song }) {



    const [volume, setVolume] = useState(100);
    const [togglePlayPause, setTogglePlayPause] = useState(false);

    ///const volumeBar = useRef(100);

    //console.log(volumeBar.current.offsetWidth)

    const handleVolumeAdjust = (e) => {
        // console.log(volumeBar.current.getBoundingClientRect());
        // console.log(e.clientX);
        //volumeBar.current.width = '100px';
    }

    const handlePlayPause = () => {
        setTogglePlayPause(previousState => !previousState);
    }

    const adjustVolume = (e) => {
        setVolume(e.target.valueAsNumber);
    }


    return (

        <div className='playerBar'>

            <div className='playerBar__description'>

                <div className='playerBar__left__section'>
                    <div className="playerBar__item__image">

                    </div>
                    <div className='playerBar__item__description'>
                        <h5>song name</h5>
                        <h5>artist</h5>
                    </div>
                </div>

                {/* <i className="fa-solid fa-heart"></i> */}
            </div>

            <div className='playerBar__controls'>


                <div className='controls__controls'>
                    <i className="fa-solid fa-shuffle controlIcons hoverChangeColor smallIconFont"></i>
                    <i className="fa-solid fa-backward-step controlIcons hoverChangeColor smallIconFont"></i>
                    <i className={(togglePlayPause) ? 'fa-solid fa-circle-play controlIcons hoverChangeScale' : 'fa-solid  fa-circle-pause controlIcons hoverChangeScale'} onClick={handlePlayPause}></i>
                    <i className="fa-solid fa-forward-step controlIcons hoverChangeColor smallIconFont"></i>
                    <i className="fa-solid fa-repeat controlIcons hoverChangeColor smallIconFont"></i>
                </div>

                <div className='control__itemBar'>

                </div>
            </div>

            <div className='playerbar__right__section'>
                <i className="fa-solid fa-volume-low"></i>
                <input type="range" min={0}
                    max={1}
                    step={0.02}
                    value={volume} onChange={adjustVolume} />
                {/* <div className='soundbar'>
                    <div ref={volumeBar} className='soundbar__level' onClick={handleVolumeAdjust}>
                    <i className="fa-solid fa-circle"></i>
                    </div>

                </div> */}

                {/* <i className="fa-solid fa-volume"></i> */}
                {/* 4 levels of volume , mute, low, middle, high */}
                {/* <i class="fa-solid fa-volume-xmark"></i>
                <i class="fa-solid fa-volume-low"></i> 
                 <i class="fa-solid fa-volume-high"></i> */}

            </div>

        </div>
    )
}

export default PlayerBar