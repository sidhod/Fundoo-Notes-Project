import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from '../../Pages/Dashboard/dashboard'
import Signin from '../../Pages/Signin/signin'
import Signup from '../../Pages/Signup/signup'
function RouterProject() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Signin />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                </Routes>
            </Router>
        </div>
    )
}
export default RouterProject
