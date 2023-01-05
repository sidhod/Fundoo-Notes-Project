import { IconButton, InputBase, Paper } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import './takenote2.css'
import React, { useState } from 'react';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { AddAlertOutlined, ArchiveOutlined, InsertPhotoOutlined, MoreVertOutlined, PersonAddAlt1Outlined, PushPinOutlined, RedoOutlined, UndoOutlined } from '@mui/icons-material';
import { createNoteApi } from '../../services/dataServices';
import ColorPopper from '../colorpopper/colorPopper';

function TakeNote2(props) {
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
            .then(response => { console.log(response) })
            .catch(error => { console.log(error) });

    }
    return (

        <Paper elevation={5} className='takeNoteTwo' sx={{ backgroundColor: note.Color }}>
            <Box className='takeNote2A'>
                <Box className='titlePin'>
                    <InputBase className='title' placeholder='Title' onChange={takeTitle}></InputBase>
                    <IconButton className='icons'>
                        <PushPinOutlined />
                    </IconButton>
                </Box>
                <Box className='description'>
                    <InputBase className='takeNote2Decxription' placeholder='Take a note...' onChange={takeDescription}></InputBase>
                </Box>
                <Box className='note2c'>
                    <Box className='note2d'>
                        <AddAlertOutlined className='greyButton' fontSize="small" />
                        <PersonAddAlt1Outlined className='greyButton' fontSize="small" />
                        {/* <ColorLensOutlinedIcon className='greyButton' fontSize="small" /> */}
                        <ColorPopper listenColor={listenColor} action='create' />
                        <InsertPhotoOutlined className='greyButton' fontSize="small" />
                        <ArchiveOutlined className='greyButton' fontSize="small" onClick={archived} />
                        <MoreVertOutlined className='greyButton' fontSize="small" />
                        <UndoOutlined className='buttonColor' />
                        <RedoOutlined className='buttonColor' />
                    </Box>
                    <Box className='close'>
                        <Button variant="text" size="small" className="closeButton" style={{ textTransform: "none", fontSize: "14px", color: "black", fontWeight: "600", fontFamily: '"Google Sans",Roboto,Arial,sans-serif', marginRight: "45px" }} onClick={openNote2}>Close</Button>
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}
export default TakeNote2