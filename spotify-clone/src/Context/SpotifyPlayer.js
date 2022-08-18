import {useContext, useState, createContext} from 'react'
import PlayerBar from '../Components/PlayerBar/PlayerBar';


const PlayerContext = createContext();

export const SpotifyPlayer = ({children}) => {

    const [userSelectedPlay, showPlayerBar] = useState(!false)


    const userClickedPlayButton = () => {
        console.log('inside spotify player context');   
        //showPlayerBar(true);
    }


  return (

    <PlayerContext.Provider value={{userClickedPlayButton}}>
        {userSelectedPlay && <PlayerBar />}
        {children}
    </PlayerContext.Provider>
    
  )
}


export const Player = () => {
    return useContext(PlayerContext)
}


