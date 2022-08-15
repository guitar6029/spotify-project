import {useState, useEffect} from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import PlaylistPage from './Components/PlaylistPage/PlaylistPage';
import Home from './Components/Home/Home';
import { Notification } from './Context/Notification';
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


  return (
    
    <Notification>
    <Routes>
      <Route path='/' element={<Home playlist={playlistData}/>}/>
      <Route path='/playlist/:id' element={<PlaylistPage/>} />
    </Routes>
    </Notification>
        

  );
}

export default App;
