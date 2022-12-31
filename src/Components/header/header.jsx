import React from "react";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Search } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { InputBase } from '@mui/material';
import './header.css'
function Header() {
    return (
        <div>
            <div className='main-header'>
                <div className='mainMenu'>
                    <MenuIcon className="menuIcon" />
                    <img className="keepImg" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="logo" height="40" width="40" />
                    <span className="heading">Keep</span>
                </div>
                <div className='searchHeader'>
                    <Search className='search'></Search>
                    <InputBase className='searchInput' id='search' placeholder='Search'></InputBase>
                </div>
                <div className='refreshHeader'>
                    <RefreshIcon className="symbol-color" />
                    <ViewAgendaOutlinedIcon className="symbol-color" />
                    <SettingsOutlinedIcon className="symbol-color" />
                </div>
                <div className='account'>
                    <AppsIcon className="symbol-color" />
                    <AccountCircleIcon className="symbol-color" />
                </div>
            </div>
        </div>
    )
}
export default Header;