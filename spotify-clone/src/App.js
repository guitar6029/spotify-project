import {useState, useEffect} from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import PlaylistPage from './Components/PlaylistPage/PlaylistPage';
import Home from './Components/Home/Home';
import { Notification } from './Context/Notification';
import { AuthContext } from './Context/UserAuth';
import './App.css';
import Signup from './Components/Account/Signup/Signup';
import Signin from './Components/Account/Signin/Signin';
import Library from './Components/Account/Library/Library';


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
    
    <AuthContext>
    <Notification>
    <Routes>
      <Route path='/' element={<Home playlist={playlistData}/>}/>
      <Route path='/playlist/:id' element={<PlaylistPage/>} />
      <Route path='/user/signup' element={<Signup />} />
      <Route path='/user/signin' element={<Signin />} />
      <Route path="/user/collection/library" element={<Library />} />
    </Routes>
    </Notification>
    </AuthContext>
        

  );
}

export default App;
