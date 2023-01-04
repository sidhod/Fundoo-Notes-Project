import { Box } from '@mui/system';
import './takenote3.css'
import React from 'react';
import { IconButton, Paper } from '@mui/material';
import { AddAlertOutlined, ArchiveOutlined, InsertPhotoOutlined, MoreVertOutlined, PersonAddAlt1Outlined, PushPinOutlined } from '@mui/icons-material';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
function TakeNote3(props) {
    return (
        <Box className='frame'>
            <Paper className='outerContainer'>
                <Box className='innerContainer1'>
                    <Box className='leftContainer'>
                        <Box className='note3a'>
                            <span><b>{props.note.Title}</b></span>
                        </Box>
                        <Box className='note3b'>
                            <span>{props.note.Descreption}</span>
                        </Box>
                    </Box>
                    <IconButton className='iconpin'>
                        <PushPinOutlined />
                    </IconButton>
                </Box>
                <Box className='innerContainer2'>
                    <AddAlertOutlined className='greyButton' fontSize="small" />
                    <PersonAddAlt1Outlined className='greyButton' fontSize="small" />
                    <ColorLensOutlinedIcon className='greyButton' fontSize="small" />
                    <InsertPhotoOutlined className='greyButton' fontSize="small" />
                    <ArchiveOutlined className='greyButton' fontSize="small" />
                    <MoreVertOutlined className='greyButton' fontSize="small" />
                </Box>

            </Paper>
        </Box >
    )
}
export default TakeNote3;