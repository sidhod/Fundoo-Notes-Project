import { Box } from '@mui/system';
import React from 'react';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushIcon from '@mui/icons-material/Brush';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { Paper } from '@mui/material';
import './takenote1.css'
function TakeNote1() {
    return (
        <Paper className='takeNote'>
            <Box className='takeNoteOne'>
                <input className='noteOne' placeholder='Take a note...'></input>
                <Box className='takeNoteIcon'>
                    <CheckBoxOutlinedIcon />
                    <BrushIcon />
                    <InsertPhotoOutlinedIcon />
                </Box>
            </Box>
        </Paper>
    )
}
export default TakeNote1;