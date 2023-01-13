import { Box } from '@mui/system';
import React from 'react';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushIcon from '@mui/icons-material/Brush';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { Paper, InputBase } from '@mui/material';

import './takenote1.css'
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    takeNote: {
        height: '6vh',
        width: '40vw',
        position: 'relative',
        left: '500px',
        top: '-30px',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '5px'
    },
    takeNoteOne: {
        boxSizing: 'border-box',
        width: '95%',
        height: '100%',
        /* border: 2px solid green; */
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        opacity: '1',
    },
    noteOne: {
        width: '70%',
        height: '60%',
        fontSize: '14px',
        color: 'black ! important',
        fontWeight: '550',
        letterSpacing: '.01428571em',
        lineHeight: '1.0rem'
    },
    takeNoteIcon: {
        width: '30%',
        height: '60%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: 'gray',
    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        takeNote: {
            height: '5vh',
            width: '78vw',
            position: 'relative',
            left: "58px",
            top: "-13px",
            // border: '1px solid red'
        },
        takeNoteIcon: {
            display: 'flex',
            justifyContent: 'space-between',
            // border: '1px solid red'
        },
        icon: {
            fontSize: "14px",
            // border: '1px solid green',
        }

    },
    ['@media only screen and (min-width: 480px) and (max-width: 768px)']: {
        takeNote: {
            height: '6vh',
            width: '78vw',
            position: 'relative',
            left: "125px",
            top: "25px"
        },
        takeNoteIcon: {
            display: 'flex',

            // border: '1px solid red',
            width: '30%'
        },
        icon: {
            fontSize: 'small'
        }

    },
    ['@media only screen and (min-width: 789px) and (max-width: 1024px)']: {
        takeNote: {
            height: '6.5vh',
            width: '60vw',
            position: 'relative',
            left: "248px",
            top: "30px",

        },
        takeNoteIcon: {
            width: '30%',

        }


    }
})
function TakeNote1(props) {
    const classes = useStyle()
    const openNote2 = () => {
        props.listenToTakeNoteProp1()
    }
    return (
        <Paper className={classes.takeNote} elevation={5} onClick={openNote2}>
            <Box className={classes.takeNoteOne}>
                <InputBase className={classes.noteOne} placeholder='Take a note...' ></InputBase>
                <Box className={classes.takeNoteIcon}>
                    <CheckBoxOutlinedIcon className={classes.icon} />
                    <BrushIcon className={classes.icon} />
                    <InsertPhotoOutlinedIcon className={classes.icon} />
                </Box>
            </Box>
        </Paper>
    )
}
export default TakeNote1;