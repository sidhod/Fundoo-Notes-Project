import { Box } from '@mui/system';
import React from 'react';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import BrushIcon from '@mui/icons-material/Brush';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import { Paper, Tooltip } from '@mui/material';
import './takenote1.css'
function TakeNote1() {
    return (
        <Box>
            <Paper className='takeNote'>
                <Box className='takeNoteOne'>
                    <input className='noteOne' placeholder='Take a note...'></input>
                    <Box className='takeNoteIcon'>
                        <Tooltip>
                            <CheckBoxOutlinedIcon />
                        </Tooltip>
                        <Tooltip>
                            <BrushIcon></BrushIcon>
                        </Tooltip>
                        <Tooltip>
                            <WallpaperIcon></WallpaperIcon>
                        </Tooltip>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}
export default TakeNote1;