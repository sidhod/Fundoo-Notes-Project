import { IconButton, InputBase, Paper } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import './takenote2.css'
import React from 'react';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { AddAlertOutlined, ArchiveOutlined, InsertPhotoOutlined, MoreVertOutlined, PersonAddAlt1Outlined, PushPinOutlined, RedoOutlined, UndoOutlined } from '@mui/icons-material';
function TakeNote2(props) {
    const openNote2 = () => {
        props.listenToTakeNoteProp2()
    }
    return (

        <Paper elevation={5} className='takeNoteTwo'>
            <Box className='takeNote2A'>
                <Box className='titlePin'>
                    <InputBase className='title' placeholder='Title'></InputBase>
                    <IconButton className='icons'>
                        <PushPinOutlined />
                    </IconButton>
                </Box>
                <Box className='description'>
                    <InputBase className='takeNote2Decxription' placeholder='Take a note...'></InputBase>
                </Box>
                <Box className='note2c'>
                    <Box className='note2d'>
                        <AddAlertOutlined className='greyButton' fontSize="small" />
                        <PersonAddAlt1Outlined className='greyButton' fontSize="small" />
                        <ColorLensOutlinedIcon className='greyButton' fontSize="small" />
                        <InsertPhotoOutlined className='greyButton' fontSize="small" />
                        <ArchiveOutlined className='greyButton' fontSize="small" />
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