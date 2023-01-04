import React, { useState } from "react";
import Header from "../../Components/header/header";
import TakeNote1 from "../../Components/TakeNote1/takenote1";
import TakeNote2 from "../../Components/TakeNote2/takenote2";
function Dashboard() {
    const [toggle, setToggle] = useState(false)
    const listenToTakeNote1 = () => {
        setToggle(true);
    }
    const listenToTakeNote2 = () => {
        setToggle(false);
    }
    return (
        <div>
            <Header />
            <div>
                {
                    toggle ? <TakeNote2 listenToTakeNoteProp2={listenToTakeNote2} /> : <TakeNote1 listenToTakeNoteProp1={listenToTakeNote1} />
                }
            </div>
        </div>
    )
}
export default Dashboard;