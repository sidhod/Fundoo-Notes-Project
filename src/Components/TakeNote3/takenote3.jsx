import { Box } from '@mui/system';
import Modal from '@mui/material/Modal';
import './takenote3.css'
import React, { useState } from 'react';
import { IconButton, Paper } from '@mui/material';
import {
    AddAlertOutlined, RedoOutlined,
    UndoOutlined, ArchiveOutlined, InsertPhotoOutlined, Margin, MoreVertOutlined, PersonAddAlt1Outlined, PushPinOutlined
} from '@mui/icons-material';
import ColorPopper from '../colorpopper/colorPopper';
import { isArchivedApi, isDeleteApi } from '../../services/dataServices';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Model from '../Model/model';
import { makeStyles } from '@mui/styles';
const takeNote3 = makeStyles({
    frame: {
        width: '15.5vw',
        height: '20vh',
        display: 'flex'
    },
    outerContainer: {
        width: '90%',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        borderRadius: '8px',
        alignItems: 'center',
    },
    innerContainer1: {
        width: '100%',
        height: '70%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'left',
        alignItems: 'center',
    },

    innerContainer2: {
        width: '90%',
        height: '30%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    leftContainer: {
        width: '70%',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginLeft: '7%',
    },

    note3a: {
        marginTop: '10%',
        width: '100%',
        height: '50%',
    },

    note3b: {
        width: '100%',
        height: '50%',
    },

    iconpin: {
        width: '20%',
        height: '100%',
        /* border: 0px solid red; */
        position: 'relative',
        left: '2%',
        bottom: '20%',
    },
    greyButton: {
        // font-size: x-large;
        /* border: 0px solid red; */
        border: '1px solid rd',
        color: 'black',

    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        frame: {
            width: '78vw',
            height: '18vh',
            display: 'flex',
            // border: '1px solid red'
        },
        innerContainer2: {
            height: '10%',
            // border: '1px solid red'
        },

        outerContainer: {
            width: '100%',
        },

        leftContainer: {
            marginLeft: '0px',
            display: 'block',
        },

        note3a: {
            /* border: 1px solid blue; */
            width: '50%',
            marginTop: '0px',
            marginLeft: '12px',
            height: '13.6px',
        },

        note3b: {
            marginTop: '10px',
            marginLeft: '12px',
            height: '13.6px',
            /* border: 1px solid red; */
        },

        text: {
            fontSize: 'small',
        },

        greyButton: {
            fontSize: 'small',
            /* border: 1px solid red; */
        }
    },
    ['@media only screen and (min-width: 480px) and (max-width: 768px)']: {
        frame: {
            width: '35vw',
            height: '20vh',
            // border: '1px solid red'
        },

    }, ['@media only screen and (min-width: 789px) and (max-width: 1024px)']: {
        frame: {
            width: '28vw',
            height: '20vh',
            // border: '1px solid red'
        },

    }
})
function TakeNote3(props) {
    const takenote3style = takeNote3()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)
    const updateColor = () => {
        props.autoRefresh()
    }
    const updateArchive = (id) => {
        isArchivedApi(id)
            .then((response) => {
                console.log(response);
                props.autoRefresh();
            })
            .catch((error) => console.log(error));

    }
    const updateIsDelete = (id) => {
        isDeleteApi(id)
            .then((response) => {
                console.log(response);
                props.autoRefresh()
            })
            .catch((error) => console.log(error));

    }

    return (
        <div >
            <Box className={takenote3style.frame}>
                <Paper className={takenote3style.outerContainer} sx={{ backgroundColor: props.note.Color }}>
                    <Box className={takenote3style.innerContainer1}>
                        <Box className={takenote3style.leftContainer} onClick={handleOpen}>
                            <Box className={takenote3style.note3a}>
                                <span className='text'><b>{props.note.Title}</b></span>
                            </Box>
                            <Box className={takenote3style.note3b}>
                                <span className='text'>{props.note.Descreption}</span>
                            </Box>
                        </Box>
                        <IconButton className={takenote3style.iconpin}>
                            <PushPinOutlined />
                        </IconButton>
                    </Box>
                    <Box className={takenote3style.innerContainer2}>
                        <AddAlertOutlined className={takenote3style.greyButton} fontSize="small" />
                        {/* <PersonAddAlt1Outlined className='greyButton' fontSize="small" /> */}
                        <DeleteOutlineOutlinedIcon className={takenote3style.greyButton} fontSize="small" onClick={() => updateIsDelete(props.note._id)} />
                        <ColorPopper action='update' id={props.note._id} updateColor={updateColor} />
                        <InsertPhotoOutlined className={takenote3style.greyButton} fontSize="small" />
                        <ArchiveOutlined className={takenote3style.greyButton} fontSize="small" onClick={() => updateArchive(props.note._id)} />
                        <MoreVertOutlined className={takenote3style.greyButton} fontSize='small
                        ' />
                    </Box>
                </Paper>
            </Box >
            <Model open={open} handleClose={handleClose} noteObject={props.note} updateArchive={updateArchive} updateIsDelete={updateIsDelete} autoRefresh={props.autoRefresh} />
        </div>


    )
}
export default TakeNote3;