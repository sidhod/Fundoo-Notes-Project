import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { flexbox } from '@mui/system';
import { updateColorApi } from '../../services/dataServices';
const colors = ["#2ECC71", "#AF7AC5", "#F1948A", "#A3E4D7", "#F5B7B1", "#F5B041", "#DC7633", "#F1C40F", "#AAB7B8", "#F1948A", "#2ECC71", "#F5B041"]
function ColorPopper(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const selectColor = (colour) => {

        if (props.action === 'create') {
            props.listenColor(colour);
        } else if (props.action === 'update') {
            let noteId = props.id
            props.updateColor()
            updateColorApi(noteId, { Color: colour })
                .then((response) => console.log(response))
                .catch((error) => console.log(error))
        }
    }
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div>
            <ColorLensOutlinedIcon color='grey' fontSize="small" style={{ marginTop: 0 }} onClick={handleClick} />
            <Popper id={id} open={open} anchorEl={anchorEl} disablePortal>
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display: "flex", flexDirection: "row" }}>
                    {
                        colors.map((color) => (
                            <div style={{ height: 27, width: 27, borderRadius: 50, backgroundColor: color, marginLeft: 5 }} onClick={() => selectColor(color)}></div>
                        ))
                    }
                </Box>
            </Popper>
        </div>
    );
}
export default ColorPopper;