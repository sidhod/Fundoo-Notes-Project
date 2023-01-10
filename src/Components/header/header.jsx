import React from "react";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Search } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { InputBase, Box } from '@mui/material';
import './header.css'
import { connect } from "react-redux";
function Header(props) {
    const openDrawerHeader = () => {
        props.openDrawer();
    }

    return (
        <Box>
            <Box className='main-header'>
                <Box className='mainMenu'>
                    <MenuIcon className="menuIcon" onClick={openDrawerHeader} />
                    <img className="keepImg" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="logo" height="40" width="40" />


                </Box>
                <Box marginLeft={3} width={8}>
                    <span className="heading">{props.label}</span>
                </Box>
                <Box className='searchHeader'>
                    <Search className='search'></Search>
                    <InputBase className='searchInput' id='search' placeholder='Search'></InputBase>
                </Box>
                <div className='refreshHeader'>
                    <RefreshIcon className="symbol-color" />
                    <ViewAgendaOutlinedIcon className="symbol-color" />
                    <SettingsOutlinedIcon className="symbol-color" />
                </div>
                <div className='account'>
                    <AppsIcon className="symbol-color" />
                    <AccountCircleIcon className="symbol-color" />
                </div>
            </Box>
        </Box>
    )
}
const mapStateToProps = (state) => {
    return {
        label: state.drawerReducer.label
    }
}
export default connect(mapStateToProps)(Header);