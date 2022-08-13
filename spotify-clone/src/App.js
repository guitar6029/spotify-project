import {useState, useEffect} from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import PlaylistPage from './Components/PlaylistPage/PlaylistPage';
import { PlaylistContext } from './Context/PlaylistContext';
import Home from './Components/Home/Home';
import './App.css';

function App() {


  //fetch playlist data from local api
  const [playlistData, setPlaylistData] = useState([{}]);

  useEffect(() => {
      const fetchData = async () => {
        
        try{

          const response = await axios.get('/api');
          // setPlaylistData( previousData => {
          //   return [response.data, ...previousData];
          // })

            setPlaylistData(response.data);

        } catch (e) {
          if (e.response) {
  
            //console.log(e.response.data);
            console.log(e.response.status);
            //console.log(e.response.headers);
          } else {
            console.log(`Error: ${e.message}`);
          }
  
        }

      }

      fetchData();

  }, []);

  // const [routeID, setRoute] = useState(() => {

  //   const saved = localStorage.getItem('routeID');
  //   const initialValue = JSON.parse(saved);
  //   return initialValue || "";
  // });
  // localStorage.setItem("routeID", JSON.stringify(routeID));

  //console.log(playlistData);

  //const [routeID, setRoute] = useState('');
  //const [playlistObj, setPlaylistObj] = useState({});

  // const handleID = (id) => {
  //   let myID = id;
  //   let route = `/playlist/${myID}`;
  //   console.log(route);
  //   setRoute(route);
  // }


  return (
    <PlaylistContext>

    <Routes>
      <Route path='/' element={<Home playlist={playlistData}/>}/>
      <Route path='/playlist/:id' element={<PlaylistPage/>} />
    
    </Routes>
    </PlaylistContext>    

  );
}

export default App;
