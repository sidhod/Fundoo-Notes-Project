import { Box } from '@mui/system';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import {
    AddAlertOutlined, RedoOutlined,
    UndoOutlined, ArchiveOutlined, InsertPhotoOutlined, Margin, MoreVertOutlined, PersonAddAlt1Outlined, PushPinOutlined
} from '@mui/icons-material';
import ColorPopper from '../colorpopper/colorPopper';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Button, InputBase, Tooltip } from "@mui/material";
import { updateColorApi } from '../../services/dataServices';
import { Popper } from 'react-popper';

function Model(props) {
    const [note, setUpdateNote] = useState({ Title: props.noteObject.Title, Descreption: props.noteObject.Descreption, Color: props.noteObject.Color })
    const updateTitle = (event) => {
        setUpdateNote(prevState => ({
            ...prevState,
            Title: event.target.value
        }))
    }
    const updateDescreption = (event) => {
        setUpdateNote(prevState => ({
            ...prevState,
            Descreption: event.target.value
        }))
    }
    const updateArchivemethod = () => {
        props.updateArchive(props.noteObject._id)
        props.handleClose()
    }
    const updateDeletemethod = () => {
        props.updateIsDelete(props.noteObject._id)
        props.handleClose()
    }
    const listenColor = (color) => {
        setUpdateNote((prevState) => ({
            ...prevState,
            Color: color
        })
        )
    }
    const updateNotesTD = () => {
        updateColorApi(props.noteObject._id, note)
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
        props.handleClose()
    }
    const style = {
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600,
        height: 180,
        backgroundColor: props.noteObject.Color,
        borderRadius: 1.5,
        boxShadow: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    };
    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box
                    sx={{
                        width: "100%",
                        height: "75%",
                        border: "0px solid green",

                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "0px",
                    }}
                >
                    <Box
                        sx={{
                            width: "80%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            marginLeft: "3%",
                        }}
                    >
                        <Box>
                            <InputBase defaultValue={props.noteObject.Title} onChange={updateTitle} />
                        </Box>
                        <Box>
                            <InputBase defaultValue={props.noteObject.Descreption} onChange={updateDescreption} />
                        </Box>
                    </Box>
                    <Box
                        sx={{ width: "20%", height: "100%", border: "0px solid yellow" }}
                    >
                        <Box sx={{ width: "40%", height: "30%", border: "0px solid brown", position: 'relative', left: '60%', top: '10%' }}>
                            <IconButton>
                                <Tooltip>
                                    <PushPinOutlined></PushPinOutlined>
                                </Tooltip>
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
                <Box
                    className="innerCont2"
                    sx={{
                        width: "100%",
                        height: "25%",
                        border: "0px solid black",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            width: "80%",
                            height: "100%",
                            border: "0px solid black",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                        }}
                    //     <DeleteOutlineOutlinedIcon className='greyButton' fontSize="small" onClick={() => updateIsDelete(props.note._id)} />
                    // <ColorPopper action='update' id={props.note._id} updateColor={updateColor} />
                    // <InsertPhotoOutlined className='greyButton' fontSize="small" />
                    // <ArchiveOutlined className='greyButton' fontSize="small" onClick={() => updateArchive(props.note._id)} />
                    // <MoreVertOutlined className='greyButton' fontSize="small" />
                    ><IconButton>
                            <Tooltip>
                                <AddAlertOutlined className='greyButton' fontSize="small" />
                            </Tooltip>
                        </IconButton>
                        <IconButton>
                            <Tooltip>
                                <DeleteOutlineOutlinedIcon className='greyButton' fontSize="small" onClick={updateDeletemethod} />
                            </Tooltip>
                        </IconButton>
                        <IconButton>
                            <Tooltip>
                                <ColorPopper listenColor={listenColor} action='create' />
                            </Tooltip>
                        </IconButton>
                        <IconButton>
                            <Tooltip>
                                <InsertPhotoOutlined className='greyButton' fontSize="small" />
                            </Tooltip>
                        </IconButton>
                        <IconButton>
                            <Tooltip>
                                <ArchiveOutlined className='greyButton' fontSize="small" onClick={updateArchivemethod} />
                            </Tooltip>
                        </IconButton>
                        <IconButton>
                            <Tooltip>
                                <MoreVertOutlined className='greyButton' fontSize="small" />
                            </Tooltip>
                        </IconButton>

                        <IconButton>
                            <Tooltip>
                                <UndoOutlined className='greyButton' fontSize="small" />
                            </Tooltip>
                        </IconButton>
                        <IconButton>
                            <Tooltip>
                                <RedoOutlined className='greyButton' fontSize="small" />
                            </Tooltip>
                        </IconButton>
                    </Box>
                    <Box
                        sx={{
                            width: "20%",
                            height: "100%",
                            alignItems: "center"
                        }}
                    >
                        <Box className='close'>
                            <Button variant="text" size="small" className="closeButton" style={{ textTransform: "none", fontSize: "14px", color: "black", fontWeight: "600", fontFamily: '"Google Sans",Roboto,Arial,sans-serif', marginRight: "45px" }} onClick={updateNotesTD} >Close</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}
export default Model