import axios from './axios';
import {useState, useEffect} from 'react';

const UserAPI = () => {

        const [users, setUsers] = useState();
        
        useEffect(() => {

                let isMounted = true;
                const controller = new AbortController();

                const getUsers = async () => {
            
                    try{
                        const response = await axios.post('/users/register', {
                            signal: controller.signal
                        });
                        console.log(response.data);
                        isMounted && setUsers(response.data);

                    }catch(err){
                        console.log(err);
                    }
                }

                getUsers();

                //clean up function 
                return () => {
                    isMounted = false;
                    controller.abort();
                }
        }, []);


}

export default UserAPI