import React, {useState} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SidebarOption from './SidebarOption/SidebarOption';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import './Sidebar.css';

export default function Sidebar() {

  const [expand, setExpandSidebar] = useState(false);

  const handleSidebar = () => {
        setExpandSidebar(previousState => !previousState);
        
  }

  const handleClick = () => {
    console.log('clicked');
  }

  return (
    <div className={(expand) ? 'sidebar' : 'shrink'}>
       
        { (expand) ? <FirstPageIcon className='sidebar__expand'  onClick={handleSidebar}/> : <LastPageIcon className='sidebar__expand left'  onClick={handleSidebar}/> }
        { (expand) ? <i id="spotify" className="fa-brands fa-spotify"></i> : null}
        <SidebarOption text="Home" Icon={HomeIcon}   onClick={handleClick} routeTo={'/'}/>
        <SidebarOption text="Search" Icon={SearchIcon} routeTo={'/'}/>
        <SidebarOption text="Your Library" Icon={ViewWeekIcon}  routeTo={'/user/collection/library'} />
        <SidebarOption text="Create Playlist" Icon={LibraryAddIcon}   routeTo={'/user/create-playlist'}/>
        <SidebarOption text="Liked Songs" Icon={FavoriteIcon}  routeTo={'/user/liked'} />

    </div>
  )
}
