
import React, { useEffect, useState } from "react";
import Header from "../../Components/header/header";
import TakeNote1 from "../../Components/TakeNote1/takenote1";
import TakeNote2 from "../../Components/TakeNote2/takenote2";
import TakeNote3 from "../../Components/TakeNote3/takenote3";
import { getNoteApi } from "../../services/dataServices";

function Dashboard() {
    const allNotes = {
        display: 'flex', flexDirection: 'row', position: 'relative', left: '280px', top: '50px', width: '70vw', flexWrap: 'wrap'
    }
    const [toggle, setToggle] = useState(false)
    const [noteList, setNoteList] = useState([])
    const listenToTakeNote1 = () => {
        setToggle(true);
    }
    const listenToTakeNote2 = () => {
        setToggle(false);
    }
    const getNote = () => {
        getNoteApi()
            .then((response) => {
                console.log(response)
                setNoteList(response.data.data)
            })
            .catch((error) => console.log(error))

    }
    useEffect(() => {
        getNote()
    }, []);
    console.log(noteList);
    return (
        <div>
            <Header />
            <div>
                {
                    toggle ? <TakeNote2 listenToTakeNoteProp2={listenToTakeNote2} /> : <TakeNote1 listenToTakeNoteProp1={listenToTakeNote1} />
                }
            </div>
            <div style={allNotes}>
                {
                    noteList.map((note) => (
                        <TakeNote3 note={note} getNote={getNote} />
                    ))
                }
            </div>
        </div>
    )
}
export default Dashboard;