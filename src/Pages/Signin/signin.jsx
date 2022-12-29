import './signin.css'
import React from "react";
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Signup from '../Signup/signup';
function Signin() {
    return (
        <div className="loginPage">
            <div className="loginCard">
                <div className="section1">
                    <div><img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" alt="Girl in a jacket" width="75"
                        height="40" className='googleIcon'></img></div>
                    <h2 className="headText">Sign in</h2>
                    <p className="subText">Use your Google Account</p>
                </div>
                <div className="section2" >
                    <div><TextField className="outlined" label="Email" variant="outlined" margin="normal" /></div>
                    <div><TextField className="outlined" label="Password" variant="outlined" margin="normal" /></div>
                    <div className='text'>
                        <div><a href="#" class="forgot-Password">Forgot password</a></div>
                        <div className="notComputer">Not your computer? Use Guest mode to sign in privately.</div>
                        <div><a className="link" href="" onClick={<Signup />}>Learn More</a></div>
                    </div>


                </div>


                <div className="section3" >
                    <div className="row" style={{ justifyContent: 'space-between' }}>
                        <div className="create">Create Account</div>
                        <Button className="loginButton" variant="contained">Login</Button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Signin
{/* <div className="signin">
            <div className="box1">
                <div></div>
                <img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" alt="Girl in a jacket" width="75"
                    height="40"></img>
                <h2>Sign in</h2>
                <p>Use your Google Account</p>
                <div className="section-2">
                    <div>
                        <div><TextField className="outlined" label="Email" variant="outlined" margin="normal" /></div>
                        <div><TextField className="outlined" label="Password" variant="outlined" margin="normal" /></div>
                        <div><a href="#" class="forgot-Password">Forgot password</a></div>
                    </div>
                </div>
                <div className="section-3">
                    <div className="learn-more-label">
                        Not your computer? Use Guest mode to sign in privately.
                    </div>
                    <div> <a href="#" class="learn-more-button"><b>Learn more</b></a></div>
                </div>
                <div class="buttons">
                    <a href="googleCreateAccount.html" class="create-account"><b>Create account</b></a>
                    <Button href="#text-buttons">Link</Button>
                </div>
            </div >
        </div> */}