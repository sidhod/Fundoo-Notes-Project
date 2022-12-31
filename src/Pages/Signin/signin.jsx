import './signin.css'
import React, { useState } from "react";
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import { loginApi } from '../../services/userService';
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
function Signin() {
    const [signinObj, setSigninobj] = useState({ email: "", password: "" })
    const [regexObj, setRegexObj] = useState({ emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: "" })

    const takingEmail = (event) => {
        // setSigninobj({ email: event.target.value })
        setSigninobj(prevState => ({
            ...prevState,
            email: event.target.value
        }))
    }
    const takingPassword = (event) => {
        // setSigninobj({ password: event.target.value })
        setSigninobj(prevState => ({
            ...prevState,
            password: event.target.value
        }))
    }
    const submit = () => {
        let emailTest = emailRegex.test(signinObj.email);
        let passwordTest = passwordRegex.test(signinObj.password);
        if (emailTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "Enter Valid Email"
            }))
        }
        else if (emailTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                emailBorder: false,
                emailHelper: ""
            }))
        }
        if (passwordTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: "Enter Valid Password"
            }))
        }
        else if (passwordTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: ""
            }))
        }
        if (emailTest === true && passwordTest === true) {
            loginApi(signinObj)
                .then((reponse) => { console.log(reponse) })
                .catch((error) => { console.log(error) });
        }
    }
    // console.log(signinObj);
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
                    <div><TextField error={regexObj.emailBorder} helperText={regexObj.emailHelper} className="outlined" label="Email" variant="outlined" margin="normal" onChange={takingEmail} /></div>
                    <div><TextField error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} className="outlined" label="Password" variant="outlined" margin="normal" onChange={takingPassword} /></div>
                    <div className='text'>
                        <div><a href="#" class="forgot-Password">Forgot password</a></div>
                        <div className="notComputer">Not your computer? Use Guest mode to sign in privately.</div>
                        <div><a className="link" href="" >Learn More</a></div>
                    </div>


                </div>


                <div className="section3" >
                    <div className="row" style={{ justifyContent: 'space-between' }}>
                        <div className="create">Create Account</div>
                        <Button className="loginButton" variant="contained" onClick={submit}>Login</Button>
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