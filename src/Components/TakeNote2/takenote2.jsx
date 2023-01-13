import { IconButton, InputBase, Paper } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import './takenote2.css'
import React, { useState } from 'react';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { AddAlertOutlined, ArchiveOutlined, InsertPhotoOutlined, MoreVertOutlined, PersonAddAlt1Outlined, PushPinOutlined, RedoOutlined, UndoOutlined } from '@mui/icons-material';
import { createNoteApi } from '../../services/dataServices';
import ColorPopper from '../colorpopper/colorPopper';
import { makeStyles } from '@mui/styles';
const takeNote2 = makeStyles({
    takeNoteTwo: {
        height: '20vh',
        width: '40vw',
        position: 'relative',
        left: '500px',
        top: '-30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: '20px',
        // border: '1px solid red'
    },
    takeNote2A: {
        width: '95%',
        height: '18vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    titlePin: {
        height: '40%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        width: '80%',
        height: '100%',
        fontSize: '16px',
        fontWeight: '530',
        border: 'none',
        outline: 'none',
        letterSpacing: '.0228571em',
    },

    description: {
        height: '65% !important',
        width: '100%',
    },
    takeNote2Decxription: {
        width: '100%',
        height: '100%',
        fontSize: '16px',
        fontWeight: '530',
        border: 'none',
        outline: 'none',
        letterSpacing: '.0228571em',
    },
    note2c: {
        width: '100%',
        height: '40%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    note2d: {
        width: '65%',
        height: '70%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    close: {
        width: '30%',
        height: '100%',
        position: 'relative',
        left: '9.5%',
    },
    greyButton: {
        color: 'rgb(75, 74, 74)',

    },

    buttonColorblack: {
        fontSize: 'small',
    },

    buttonColor: {
        color: 'rgb(165, 162, 162)',
        fontSize: 'medium',
    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        titlePin: {
            // border: '1px solid red',
            marginTop: '0px',
            height: '20%'
        },
        description: {
            height: '65% !important',
            width: '100%',
        },
        takeNoteTwo: {
            width: '78vw',
            height: '20vh',
            position: 'relative',
            left: '58px',
            top: '-13px',

        },

        note2c: {
            flexDirection: 'column',
            // border: '1px solid red',
            marginTop: '10px'
        },

        note2d: {
            width: '85%',
            /* border: 1px solid red; */

            // border: '1px solid red',
            width: '100%'
        },

        close: {
            marginLeft: '60%',
        }
    },
    ['@media only screen and (min-width: 480px) and (max-width: 768px)']: {
        takeNoteTwo: {
            height: '20vh',
            width: '78vw',
            position: 'relative',
            left: "125px",
            top: "25px"

        },
    },
    ['@media only screen and (min-width: 789px) and (max-width: 1024px)']: {
        takeNoteTwo: {
            height: '20vh',
            width: '60vw',
            position: 'relative',
            left: "248px",
            top: "30px",

        },
    }
})
function TakeNote2(props) {
    const takenote12 = takeNote2();
    const [note, setNote] = useState({ Title: "", Descreption: "", Color: "white", isArchived: false })
    const listenColor = (color) => {
        setNote((prevState) => ({
            ...prevState,
            Color: color
        })
        )
    }
    const takeTitle = (event) => {
        setNote(prevState => ({
            ...prevState,
            Title: event.target.value
        }))
    }
    const takeDescription = (event) => {
        setNote(prevState => ({
            ...prevState,
            Descreption: event.target.value
        }))
    }
    const archived = () => {
        setNote(prevState => ({
            ...prevState,
            isArchived: true
        }))
    }
    const openNote2 = () => {
        props.listenToTakeNoteProp2()
        console.log(note)
        createNoteApi(note)
            .then(response => {
                console.log(response);
                props.autoRefresh();
            })
            .catch(error => { console.log(error) });

    }

    return (

        <Paper elevation={5} className={takenote12.takeNoteTwo} sx={{ backgroundColor: note.Color }}>
            <Box className={takenote12.takeNote2A}>
                <Box className={takenote12.titlePin}>
                    <InputBase className={takenote12.title} placeholder='Title' onChange={takeTitle}></InputBase>
                    <IconButton className='icons'>
                        <PushPinOutlined />
                    </IconButton>
                </Box>
                <Box className={takenote12.description}>
                    <InputBase className={takenote12.takeNote2Decxription} placeholder='Take a note...' onChange={takeDescription}></InputBase>
                </Box>
                <Box className={takenote12.note2c}>
                    <Box className={takenote12.note2d}>
                        <AddAlertOutlined className={takenote12.greyButton} fontSize="small" />
                        <PersonAddAlt1Outlined className={takenote12.greyButton} fontSize="small" />
                        {/* <ColorLensOutlinedIcon className='greyButton' fontSize="small" /> */}
                        <ColorPopper listenColor={listenColor} action='create' />
                        <InsertPhotoOutlined className={takenote12.greyButton} fontSize="small" />
                        <ArchiveOutlined className={takenote12.greyButton} fontSize="small" onClick={archived} />
                        <MoreVertOutlined className={takenote12.greyButton} fontSize="small" />
                        <UndoOutlined className={takenote12.buttonColor} />
                        <RedoOutlined className={takenote12.buttonColor} />
                    </Box>
                    <Box className={takenote12.close}>
                        <Button variant="text" size="small" style={{ textTransform: "none", fontSize: "14px", color: "black", fontWeight: "600", fontFamily: '"Google Sans",Roboto,Arial,sans-serif', marginRight: "45px" }} onClick={openNote2}>Close</Button>
                    </Box>
                </Box>
            </Box>
        </Paper >
    )
}
export default TakeNote2