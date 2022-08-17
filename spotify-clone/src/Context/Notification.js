import { useState, useContext, createContext } from 'react';
//import { v4 } from 'uuid';
//import NotificationItem from '../Components/Notification/NotificationItem';
//import './Notification.css';

const NotifyUserContext = createContext();

export const Notification = ({ children }) => {

  const [message, setMessage] = useState('');
  const [type, setMessageType] = useState('');

  const notifyUser = (addedToLikeSongs) => {
    if (addedToLikeSongs === true) {

      setMessage('added to your liked songs');
      setMessageType('info');
      console.log('added to your liked songs');
    }
    else {

      setMessage('removed from your liked songs');
      setMessageType('info');
      console.log('removed from your liked songs');
    }
  }

  return (
    <NotifyUserContext.Provider value={{message, notifyUser}}>
      {children}
    </NotifyUserContext.Provider>
  )
}

export const NotifyUser = () => {
  return useContext(NotifyUserContext)
}