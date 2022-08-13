import { useState, useContext, createContext } from 'react';


const PlaylistRoutingContext = createContext();

export const PlaylistContext = ({ children }) => {


    const [playlistID, setID] = useState('');
    const [playlistObj, setPlaylistObj] = useState({});

    const getPlaylistID = (id) => {
        setID(id);
    }

    const getPlaylistObj = (obj) => {
        setPlaylistObj(obj);
    }

    return (
        <PlaylistRoutingContext.Provider value={{ playlistID, getPlaylistID, getPlaylistObj }}>
            {children}
        </PlaylistRoutingContext.Provider>
    )
}

export const Playlist = () => {
    return useContext(PlaylistRoutingContext)
}