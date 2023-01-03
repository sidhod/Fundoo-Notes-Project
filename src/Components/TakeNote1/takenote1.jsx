import { Box } from '@mui/system';
import React from 'react';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushIcon from '@mui/icons-material/Brush';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { Paper, InputBase } from '@mui/material';
import './takenote1.css'
function TakeNote1(props) {
    const openNote2 = () => {
        props.listenToTakeNote12()
    }
    return (
        <Paper className='takeNote' elevation={5} onClick={openNote2}>
            <Box className='takeNoteOne'>
                <InputBase className='noteOne' placeholder='Take a note...' ></InputBase>
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