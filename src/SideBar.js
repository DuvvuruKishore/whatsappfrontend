import React from 'react';
import './SideBar.css';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar,IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';

function SideBar() {
    return (
        <div className="sidebar">
        
        <div className="sidebar_header">
        <Avatar src="https://media.gettyimages.com/photos/india-captain-virat-kohli-waits-for-the-toss-ahead-of-the-specsavers-picture-id1018607804?k=6&m=1018607804&s=612x612&w=0&h=HegYQ7_UCN0Imp6yi8gl0r9UVV2MbG3jreOn1rxAQZ8="/>
        <div className="sidebar_headerRight">
        <IconButton>
        <DonutLargeIcon/>
        </IconButton>
        <IconButton>
        <ChatIcon/>
        </IconButton>
        <IconButton>
        <MoreVertIcon/>
        </IconButton>
        </div>
        </div>
        <div className="sidebar_search">
        <div className="sidebar_searchContainer">
        <SearchIcon/>
        <input placeholder="serch for contact to chat" type="text"/>
        </div>
        </div>

        <div className="sidebar_chats">
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        </div>

        </div>
    )
}

export default SideBar
