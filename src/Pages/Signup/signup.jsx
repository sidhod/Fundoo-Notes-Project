import React, { useState } from "react";
import './signup.css'
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { registerApi } from "../../services/userService";
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const firstnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lastnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
function Signup() {
    const [registrationObj, setFirstLastNameObj] = useState({ firstName: "", lastName: "", email: "", password: "" })
    const [regexObj, setRegexObj] = useState({ firstNameBorder: false, firstNameHelper: "", lastNameBorder: false, lastNameHelper: "", emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: "" })
    const takingFirstName = (event) => {
        // setSigninobj({ email: event.target.value })
        setFirstLastNameObj(prevState => ({
            ...prevState,
            firstName: event.target.value
        }))
    }
    const takingLastName = (event) => {
        // setSigninobj({ password: event.target.value })
        setFirstLastNameObj(prevState => ({
            ...prevState,
            lastName: event.target.value
        }))
    }
    const takingEmail = (event) => {
        // setSigninobj({ password: event.target.value })
        setFirstLastNameObj(prevState => ({
            ...prevState,
            email: event.target.value
        }))
    }
    const takingPassword = (event) => {
        // setSigninobj({ password: event.target.value })
        setFirstLastNameObj(prevState => ({
            ...prevState,
            password: event.target.value
        }))
    }
    const register = () => {
        let firstNameTest = firstnameRegex.test(registrationObj.firstName);
        let lastNameTest = lastnameRegex.test(registrationObj.lastName);
        let emailTest = emailRegex.test(registrationObj.email);
        let passwordTest = passwordRegex.test(registrationObj.password);
        if (firstNameTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                firstNameBorder: true,
                firstNameHelper: "Enter Valid First Name"
            }))
        }
        else if (firstNameTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                firstNameBorder: false,
                firstNameHelper: ""
            }))
        }
        if (lastNameTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                lastNameBorder: true,
                lastNameHelper: "Enter Valid Last Name"
            }))
        }
        else if (lastNameTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                lastNameBorder: false,
                lastNameHelper: ""
            }))
        }
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
        if (firstNameTest === true && lastNameTest === true && emailTest === true && passwordTest === true) {
            registerApi(registrationObj)
                .then((reponse) => { console.log(reponse) })
                .catch((error) => { console.log(error) });
        }
    }
    console.log(registrationObj)
    return (
        <div className="signuppage">
            <div className="box">
                <img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" alt="Image" width="75"
                    height="40"></img>
                <h2>Create your Google Account</h2>
                <div className="section-2">
                    <div className="column">
                        <div className="textField">
                            <div className="columnTextField">
                                <TextField error={regexObj.firstNameBorder} helperText={regexObj.firstNameHelper} className="firstName" label="First name" size="small" margin="dense" name="firstName" variant="outlined" onChange={takingFirstName} />
                            </div>
                            <div className="columnTextField">
                                <TextField error={regexObj.lastNameBorder} helperText={regexObj.lastNameHelper} className="lastName" label="Last name" size="small" margin="dense" name="lastName" variant="outlined" onChange={takingLastName} />
                            </div>
                        </div>
                        <div className="rowTextField" style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', width: '98%' }}>
                            <TextField error={regexObj.emailBorder} helperText={regexObj.emailHelper} className="userName" label='Username@gmail.com' size="small" margin="dense" variant="outlined" onChange={takingEmail} />
                            <div><span className="spantext">You can use letters, numbers and periods</span></div>
                        </div>
                        <div><a href="#" class="useemail"><b>Use my current email address instead</b></a></div>
                        <div class="form2">
                            <div className="textField">
                                <div className="columnTextField">
                                    <TextField error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} className="firstName" label="Password" size="small" margin="dense" name="firstName" variant="outlined" onChange={takingPassword} />
                                </div>
                                <div className="columnTextField">
                                    <TextField className="lastName" label="Confirm" size="small" margin="dense" name="lastName" variant="outlined" />
                                </div>
                            </div>

                        </div>
                        <span class="spantext">Use 8 or more characters with a mix of letters, numbers & </span>
                        <span class="spantext">symbols</span>
                        <div>
                            <form class="form3">
                                <div><input type="checkbox" id="checkbox" name="vehicle1" className="checkbox"></input></div>
                                <div><label for="checkbox" class="checkLabel"> Show password</label><br /></div>

                            </form>

                        </div>
                        <div className="buttons">
                            <Button size="small" className=""><b>Sign in</b></Button>
                            <div className="button-3" onClick={register}><Button variant="contained" className="registerButton" style={{ textTransform: 'none', fontSize: '16px', fontWeight: "bold", fontFamily: '"Google Sans",Roboto,Arial,sans-serif' }}>
                                Register</Button></div>
                        </div>

                    </div>

                    <div className="right-side">
                        <div><img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="Image" width="250"
                            height="250" className="img"></img></div>
                        <div class="string">
                            <span>One account. All of Google</span>
                            <br />
                            <span>working for you.</span>
                            <text></text>
                        </div>


                    </div>

                </div>
            </div >
        </div >
    )
}
export default Signup