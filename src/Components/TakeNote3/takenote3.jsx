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
function TakeNote3(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)
    const updateColor = () => {
        props.autoRefresh()
    }
    const updateArchive = (id) => {
        isArchivedApi(id)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
        props.autoRefresh();
    }
    const updateIsDelete = (id) => {
        isDeleteApi(id)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));

    }

    return (
        <div >
            <Box className='frame'>
                <Paper className='outerContainer' sx={{ backgroundColor: props.note.Color }}>
                    <Box className='innerContainer1'>
                        <Box className='leftContainer' onClick={handleOpen}>
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
                        {/* <PersonAddAlt1Outlined className='greyButton' fontSize="small" /> */}
                        <DeleteOutlineOutlinedIcon className='greyButton' fontSize="small" onClick={() => updateIsDelete(props.note._id)} />
                        <ColorPopper action='update' id={props.note._id} updateColor={updateColor} />
                        <InsertPhotoOutlined className='greyButton' fontSize="small" />
                        <ArchiveOutlined className='greyButton' fontSize="small" onClick={() => updateArchive(props.note._id)} />
                        <MoreVertOutlined className='greyButton' fontSize="small" />
                    </Box>
                </Paper>
            </Box >
            <Model open={open} handleClose={handleClose} noteObject={props.note} updateArchive={updateArchive} updateIsDelete={updateIsDelete} />
        </div>


    )
}
export default TakeNote3;