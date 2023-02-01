import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { connect } from 'react-redux';
import './drawer.css'
const drawerWidth = 240;

const openedMixin = (theme) => ({
    marginTop: '67px',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    marginTop: '67px',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 0.5px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

function MiniDrawer(props) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const selectOption = (noteOption) => {
        props.listenDrawer(noteOption);
        props.dispatch({
            type: `${noteOption}`
        })
    }
    return (
        <Box className='mainBox'>
            <Drawer variant="permanent" open={props.drawertoggle} className='drawer'>
                <List>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => selectOption('Notes')}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                px: 2.5,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start'
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <LightbulbOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Notes" sx={{ marginLeft: 5 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => selectOption('Reminders')}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                px: 2.5,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start'
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <NotificationsNoneOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary='Reminders' sx={{ marginLeft: 5 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => selectOption('Edit')}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                //justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start'
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <EditOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Edit Labels" sx={{ marginLeft: 5 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => selectOption('Archive')}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                px: 2.5,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start'
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <ArchiveOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Archive" sx={{ marginLeft: 5 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }} onClick={() => selectOption('Bin')}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                px: 2.5,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start'
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <DeleteOutlineOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Bin" sx={{ marginLeft: 5 }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box >
    );
}
export default connect()(MiniDrawer)