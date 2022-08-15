import { useState, useContext, createContext } from 'react';
import { v4 } from 'uuid';
//import NotificationItem from '../Components/Notification/NotificationItem';
import './Notification.css';

const NotifyUserContext = createContext();

export const Notification = ({ children }) => {


  let notifications = [
    {
      id: v4(),
      type: 'success',
      message: 'success'
    },
    {
      id: v4(),
      type: 'info',
      message: 'info'
    },
    {
      id: v4(),
      type: 'error',
      message: 'error'
    },
    {
      id: v4(),
      type: 'warning',
      message: 'warning'
    },
  ]

  //console.log(notifications[0].id);

  let [messageType, setMsgType] = useState(null);
  let [message, setMessage] = useState(null);


  const notifyUser = (addedToLikeSongs) => {
    if (addedToLikeSongs) {

      setMsgType('added to your liked songs');
      setMsgType('info');
      console.log('added');
    }
    else {

      setMessage('removed from your liked songs');
      setMsgType('info');
      console.log('removed');
    }
  }


  return (

    <NotifyUserContext.Provider value={{ notifyUser }}>
      {children}
    </NotifyUserContext.Provider>

    // <NotifyUserContext.Provider value={{notifyUser}}>
    //   <div className={`notification`}>
    //   {notifications.map(notification => {
    //     return (
    //       <NotificationItem key={notification.id} {...notification} />
    //     )
    //   })}
    //   </div>
    //    {children}
    // </NotifyUserContext.Provider>
  )
}

export const NotifyUser = () => {
  return useContext(NotifyUserContext)
}