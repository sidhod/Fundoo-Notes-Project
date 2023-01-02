import { IconButton, InputBase, Paper } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import './takenote2.css'
import React from 'react';
import ColorLensTwoToneIcon from '@mui/icons-material/ColorLensTwoTone';
import { AddAlertOutlined, ArchiveOutlined, InsertPhotoOutlined, MoreVertOutlined, PersonAddAlt1Outlined, PushPinOutlined, RedoOutlined, UndoOutlined } from '@mui/icons-material';
function TakeNote2() {
    return (

        <Paper elevation={5} className='takeNoteTwo'>
            <Box className='takeNote2A'>
                <Box className='titlePin'>
                    <input className='title' placeholder='Title'></input>
                    <IconButton className='icons'>

                        <PushPinOutlined></PushPinOutlined>

                    </IconButton>
                </Box>
                <Box className='description'>
                    <InputBase className='takeNote2Decxription' placeholder='Take a note...'></InputBase>
                </Box>
                <Box className='note2c'>
                    <Box className='note2d'>
                        <AddAlertOutlined fontSize="small" />
                        <PersonAddAlt1Outlined fontSize="small" />
                        <ColorLensTwoToneIcon fontSize="small" />
                        <InsertPhotoOutlined fontSize="small" />
                        <ArchiveOutlined fontSize="small" />
                        <MoreVertOutlined fontSize="small" />
                        <UndoOutlined className='buttonColor' />
                        <RedoOutlined className='buttonColor' />
                    </Box>
                    <Box className='close'>
                        <Button variant="text" size="small" className="closeButton" style={{ textTransform: "none", fontSize: "16px", color: "black", fontWeight: "bold", fontFamily: '"Google Sans",Roboto,Arial,sans-serif' }}>Close</Button>
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}
export default TakeNote2