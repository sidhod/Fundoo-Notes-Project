
import React, { useEffect, useState } from "react";
import MiniDrawer from "../../Components/Drawer/drawer";
import Header from "../../Components/header/header";
import TakeNote1 from "../../Components/TakeNote1/takenote1";
import TakeNote2 from "../../Components/TakeNote2/takenote2";
import TakeNote3 from "../../Components/TakeNote3/takenote3";
import { getNoteApi } from "../../services/dataServices";

function Dashboard() {
    const allNotes = {
        display: 'flex', flexDirection: 'row', position: 'relative', left: '280px', top: '35px', width: '70vw', flexWrap: 'wrap'
    }
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
        <div>
            <Header openDrawer={openDrawer} />
            <MiniDrawer drawertoggle={drawertoggle} listenDrawer={listenDrawer} />
            <div style={{
                position: "absolute",
                top: "80px"
            }}>
                <div>
                    {
                        toggle ? <TakeNote2 listenToTakeNoteProp2={listenToTakeNote2} /> : <TakeNote1 listenToTakeNoteProp1={listenToTakeNote1} />
                    }
                </div>
                <div style={allNotes}>
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