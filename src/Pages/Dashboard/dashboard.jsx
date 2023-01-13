
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import MiniDrawer from "../../Components/Drawer/drawer";
import Header from "../../Components/header/header";
import TakeNote1 from "../../Components/TakeNote1/takenote1";
import TakeNote2 from "../../Components/TakeNote2/takenote2";
import TakeNote3 from "../../Components/TakeNote3/takenote3";
import { getNoteApi } from "../../services/dataServices";
import './dashboard.css'
const dashboard = makeStyles({
    TakeNoteD3: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        left: '280px',
        top: '35px',
        width: '80vw',
        flexWrap: 'wrap',
    },
    Dashboard: {
        height: '100vh',
        width: '100vw',
    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        TakeNoteD3: {
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            left: '60px',
            top: '5px',
            width: '80vw',
            flexWrap: 'wrap',
        },
    },
    ['@media only screen and (min-width: 480px) and (max-width: 768px)']: {
        TakeNoteD3: {
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
            left: '180px',
            top: '50px',
            width: '76vw',
            flexWrap: 'wrap',
        },
    },
    ['@media only screen and (min-width: 789px) and (max-width: 1024px)']: {
        TakeNoteD3: {
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
            left: '190px',
            top: '65px',
            width: '80vw',
            flexWrap: 'wrap',
        },
    }

})
function Dashboard() {
    const dashboardstyle = dashboard()
    const [toggle, setToggle] = useState(false)
    const [noteList, setNoteList] = useState([])
    const [drawertoggle, setdrawertoggle] = useState(false);
    const [noteOption, setNoteOption] = useState('Notes')
    const listenToTakeNote1 = () => {
        setToggle(true);
    }
    const listenToTakeNote2 = () => {
        setToggle(false);
    }
    const getNote = () => {
        getNoteApi()
            .then((response) => {
                let filterNotes = [];
                if (noteOption === 'Notes') {
                    filterNotes = response.data.data.filter((notes) => {
                        if (notes.isArchived === false && notes.isDeleted === false) {
                            return notes
                        }
                    })
                }
                else if (noteOption === 'Archive') {
                    filterNotes = response.data.data.filter((notes) => {
                        if (notes.isArchived === true && notes.isDeleted === false) {
                            return notes
                        }
                    })

                } else if (noteOption === 'Bin') {
                    filterNotes = response.data.data.filter((notes) => {
                        if (notes.isArchived === false && notes.isDeleted === true) {
                            return notes
                        }
                    })

                }
                console.log(response)
                setNoteList(filterNotes)
            })
            .catch((error) => console.log(error))

    }
    const autoRefresh = () => {
        getNote()
    }
    useEffect(() => {
        getNote()

    }, [noteOption]);
    console.log(noteList);

    const openDrawer = () => {
        setdrawertoggle(!drawertoggle);
        console.log(drawertoggle);
    }
    const listenDrawer = (option) => {
        setNoteOption(option)
        console.log(noteOption);
    }
    return (
        <div className={dashboardstyle.Dashboard}>
            <Header openDrawer={openDrawer} />
            <MiniDrawer drawertoggle={drawertoggle} listenDrawer={listenDrawer} />
            <div
            >
                <div>
                    {
                        toggle ? <TakeNote2 listenToTakeNoteProp2={listenToTakeNote2} autoRefresh={autoRefresh} /> : <TakeNote1 listenToTakeNoteProp1={listenToTakeNote1} />
                    }
                </div>
                <div className={dashboardstyle.TakeNoteD3}>
                    {
                        noteList.map((note) => (
                            <TakeNote3 note={note} autoRefresh={autoRefresh} />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
export default Dashboard;