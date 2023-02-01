import React from "react";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { InputBase, Box } from '@mui/material';
import './header.css'
import { connect } from "react-redux";
import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";
const header = makeStyles({
    mainHeader: {
        width: '100vw',
        height: '8vh',
        borderBottom: '1px solid #dadce0',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '85%',
        marginTop: '8px',
        // border: '1px solid red',
    },

    mainMenu: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginLeft: '5px',
    },

    menuIcon: {
        color: 'gray',
        marginLeft: '39%',
        marginRight: '10%',
    },

    keepImg: {
        marginLeft: '10%',
    },

    heading: {
        fontSize: '22px',
        marginLeft: '10%',
        color: 'rgb(94, 91, 91)',
    },
    searchHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: '8px',
        backgroundColor: '#f1f3f4',
        height: '95%',
        width: '47%',
        marginLeft: '150px',
    },

    search: {
        marginLeft: '20px',
        color: 'gray',
    },

    searchInput: {
        marginLeft: '3%',
    },

    refreshHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '10%',
        width: '10%',
        marginLeft: '18%',
    },

    account: {
        width: '5%',
        height: '70%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: '3%',

    },
    view: {
        color: 'gray',
    },
    symbolColor: {
        color: 'gray',
    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        mainHeader: {
            width: '100vw',
            // height: '5.6vh',
            position: 'fixed',
            top: '0px',
            backgroundColor: 'white',
            zIndex: '3',
            // border: '1px solid red'

        },
        content: {
            width: "100%",
            marginTop: '2px'
        },
        mainMenu: {
            marginLeft: '0px',
            // border: '1px solid red',

        },
        menuIcon: {
            fontSize: '14px',
        },
        keepImg: {
            width: '30px',
            height: '30px',
            marginTop: '0px'
        },
        heading: {
            fontSize: '15px',
            marginLeft: '0%',
        },

        // searchInput: {
        //     display: 'none',
        // },
        // view: {
        //     display: 'none'
        // },
        searchHeader: {
            display: 'none',
        },
        symbolColor: {
            fontSize: '14px',
            color: 'gray',
            // border: '1px solid red',
        },
        search: {
            marginLeft: '0px',
            color: 'grey',
        },
        refreshHeader: {
            width: '40%',
            marginLeft: '18%',

        },
        account: {
            width: '5%',
            height: '40%',
            marginLeft: '3%',

        },


    },
    ['@media only screen and (min-width: 480px) and (max-width: 768px)']: {
        mainHeader: {
            position: 'fixed',
            top: '0px',
            backgroundColor: 'white',
            zIndex: '3',
            // border: '1px solid red'

        },
        content: {
            width: "100%",

        },
        mainMenu: {
            marginLeft: '0px',
            // border: '1px solid red',
            width: '12%'

        },
        // menuIcon: {
        //     fontSize: '14px',
        // },
        keepImg: {
            marginLeft: '0px'
        },
        heading: {

            marginLeft: '-10px',
        },

        // // searchInput: {
        // //     display: 'none',
        // // },
        // // view: {
        // //     display: 'none'
        // // },
        searchHeader: {
            display: 'none',
        },
        // symbolColor: {
        //     fontSize: '14px',
        //     color: 'gray',
        //     // border: '1px solid red',
        // },
        // search: {
        //     marginLeft: '0px',
        //     color: 'grey',
        // },
        refreshHeader: {
            height: '100%',
            width: '20%',
            marginLeft: '400px',
            // border: '1px solid red',

        },
        account: {
            height: '100%',
            width: '10%',
            marginLeft: '0px',
            // border: '1px solid red',

        },


    },
    ['@media only screen and (min-width: 789px) and (max-width: 1024px)']: {
        mainHeader: {
            position: 'fixed',
            top: '0px',
            backgroundColor: 'white',
            zIndex: '3',
            // border: '1px solid red',
            height: '9vh',
        },
        content: {
            width: "100%",
            marginTop: '5px'
        },
        searchHeader: {
            height: '88%',
            width: '75%',
            // border: '1px solid red',
        },
        refreshHeader: {
            height: '88%',
            width: '25%',
            // border: '1px solid red',
            marginRight: '20px',
            marginLeft: '20px'

        }, account: {
            marginRight: '15px',
            height: '100%',
            width: '15%',
            marginLeft: '0px',
            // border: '1px solid red',

        },
    }
})
function Header(props) {
    const headerStyle = header();
    const openDrawerHeader = () => {
        props.openDrawer();
    }

    return (

        <Box className={headerStyle.mainHeader}>
            <div className={headerStyle.content}>
                < Box className={headerStyle.mainMenu} >
                    <MenuIcon className={headerStyle.menuIcon} onClick={openDrawerHeader} />
                    <img className={headerStyle.keepImg} src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="logo" height="40" width="40" />
                </Box >
                <Box marginLeft={3} width={8}>
                    <span className={headerStyle.heading}>{props.label}</span>
                </Box>
                <Box className={headerStyle.searchHeader}>
                    <SearchIcon className={headerStyle.search}></SearchIcon>
                    <InputBase className={headerStyle.searchInput} placeholder='Search'></InputBase>
                </Box>
                <Box className={headerStyle.refreshHeader}>
                    <RefreshIcon className={headerStyle.symbolColor} />
                    <ViewAgendaOutlinedIcon className={headerStyle.view} />
                    <SettingsOutlinedIcon className={headerStyle.symbolColor} />
                </Box>
                <div className={headerStyle.account}>
                    <AppsIcon className={headerStyle.symbolColor} />
                    <AccountCircleIcon className={headerStyle.symbolColor} />
                </div>
            </div>
        </Box >

    )
}
const mapStateToProps = (state) => {
    return {
        label: state.drawerReducer.label
    }
}
export default connect(mapStateToProps)(Header);