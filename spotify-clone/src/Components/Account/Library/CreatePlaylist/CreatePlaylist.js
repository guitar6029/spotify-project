import { useState } from 'react'
import Sidebar from '../../../Sidebar/Sidebar'
import './CreatePlaylist.css';

function CreatePlaylist() {


    const [userInput, setInput] = useState('');

    const handleInput = (e) => {

        setInput(e.target.value);
    }

    const handleClearInput = () => {
        setInput('');
    }


    return (
        <div className="layout">
            <Sidebar />
            <div className='create__playlist'>
                <div className='create__playlist__top'>
                    <div className='playlist__image'>
                        <div><i className="fa-solid fa-music"></i></div>
                    </div>

                    <div className='playlist__description'>
                        <h5>Public Playlist</h5>
                        <h3 className='font__large'>My Playlist #1</h3>
                        <span>username</span>
                    </div>
                </div>

                <div className='create__playlist__middle'>
                    <i className="fa-solid fa-user-plus"></i>
                    <i className="fa-solid fa-ellipsis"></i>
                </div>

                <div className='create__playlist__bottom'>
                    <h3>Lets find something for your playlist</h3>
                    <div className="search__div__playlist">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type='text' placeholder='Search for songs or artists' value={userInput} onChange={handleInput} />
                        <i className="fa-solid fa-x" onClick={handleClearInput}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePlaylist