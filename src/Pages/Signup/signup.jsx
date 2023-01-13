import React, { useState } from "react";
import './signup.css'
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { registerApi } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const firstnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lastnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const signUp = makeStyles({
    signuppage: {
        fontFamily: 'sans-serif',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: '45vw',
        height: '80vh',
        padding: '2.5rem',
        boxSizing: 'border-box',
        border: '1px solid #dadce0',
        borderRadius: '8px'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        // border: '1px solid red',
    },
    heading: {
        margin: '0px 0 -0.125rem',
        padding: '0',
        color: '#fff',
        textAlign: 'center',
        color: '#202124',
        fontFamily: 'Google Sans, Noto Sans Myanmar UI,arial',
        fontSize: '24px',
        fontWeight: '400',
    },
    section2: {
        marginTop: '35px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',

    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    textField: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    columnTextField: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '1%',
    },
    rowTextField: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '1% 1% 5% 1%',
    },

    outlined1: {
        width: '80%',
        height: '10%'
    },
    outlined2: {
        width: '80%',
        height: '10%',
        marginLeft: '10px'
    },
    spantext: {
        fontSize: '13px',
        marginLeft: '8px',
        color: 'grey',
        display: 'flex',
        alignItems: 'flex-start'
    },
    useemail: {
        textDecoration: 'none',
        textTransform: 'none',
        fontSize: '14px',
        fontWeight: 'bold',
        fontFamily: 'Google Sans, Noto Sans Myanmar UI,arial',
        marginTop: '16px',
        marginLeft: '5px',
        // border: '1px solid red',

    },
    form2: {
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    form3: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15px',

    },
    checkbox: {
        width: '20px',
        height: '20px',
    },
    checkLabel: {
        marginLeft: '15px',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '20px',
        // border: '1px solid red',
        width: '100%',
    },

    button3: {
        // marginLeft: '100%',
    },
    createAccount: {
        fontSize: '15px',
    },
    img: {
        position: 'relative',
        top: '-40px',
    },
    rightSide: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },

    string: {
        position: 'relative',
        top: '-40px',
    },

    text2: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },

    textAlign: {
        fontSize: '12px',
        color: 'grey',
    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        // signuppage: {
        //     width: '100vw',
        //     height: '150vh',
        // },

        box: {
            width: '100vw',
            height: '100vh',
            border: 'none',
            paddingLeft: '1.5rem',
            paddingTop: '0rem',
        },
        content: {
            padding: '0px',
            width: '100%',
            height: '90%',
            marginTop: '20px'
        },
        heading: {
            margin: '0px 0 - 0.125rem',
            textAlign: 'start',
        },
        textField: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex - start',
            width: '97%',
            // border: '1px solid red'
        },

        rightSide: {
            display: 'none',
        },
        rowTextField: {
            width: '100%',
        },

        columnTextField: {
            display: 'flex',
            width: '100%',
            // border: '1px solid red'
        },
        form2: {
            // border: '1px solid blue',
            width: '100%',
        },
        buttons: {
            display: 'flex',
            justifyContent: 'space - between',
            alignItems: 'center',
            marginTop: '50px'
        },


        button3: {
            marginLeft: '100px',
        }
    },
    ['@media only screen and (min-width: 481px) and (max-width: 768px)']: {
        box: {
            width: '100vw',
            height: '100vh',
            border: 'none',
            paddingLeft: '1.5rem',
            paddingTop: '0rem',
            // border: '1px solid red'
        },
        content: {
            padding: '0px',
            width: '100%',
            height: '90%',
            marginTop: '20px'

        },
        heading: {
            margin: '0px 0 - 0.125rem',
            textAlign: 'start',
        },
        textField: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex - start',
            width: '87vw',
            // border: '1px solid red'
        },
        rowTextField: {
            width: '93vw',
            // border: '1px solid red'
        },

        rightSide: {
            display: 'none',
        },

        columnTextField: {
            display: 'flex',
            width: '100%',
            // border: '1px solid red'
        },
        form2: {
            // border: '1px solid blue',
            width: '100%',
        },
        buttons: {
            display: 'flex',
            justifyContent: 'space - between',
            alignItems: 'center',
            marginTop: '50px'
        },


        button3: {
            marginLeft: '100px',
        }
    },
    ['@media only screen and (min-width: 789px) and (max-width: 1024px)']: {
        signuppage: {
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

        },
        box: {
            height: '80%',
            width: '60%',
        },
        content: {
            padding: '0px',
            width: '100%',
            height: '80%',
            marginTop: '10px',
            // border: '1px solid red'
        },
        rightSide: {
            display: 'none',
        },
    }
})
function Signup() {
    const signup = signUp();
    const navigate = useNavigate();
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
                .then((reponse) => {
                    console.log(reponse)
                    navigate('/');
                })
                .catch((error) => { console.log(error) });
        }
    }
    const Navigation = () => {
        navigate('/');
    }
    console.log(registrationObj)
    return (
        <div className={signup.signuppage}>
            <div className={signup.box}>
                <div className={signup.content}>
                    <img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" alt="Image" width="75"
                        height="40"></img>
                    <h2 className={signup.heading}>Create your Google Account</h2>
                    <div className={signup.section2}>
                        <div className={signup.column}>
                            <div className={signup.textField}>
                                <div className={signup.columnTextField}>
                                    <TextField fullWidth error={regexObj.firstNameBorder} helperText={regexObj.firstNameHelper} className="firstName" label="First name" size="small" margin="dense" name="firstName" variant="outlined" onChange={takingFirstName} />
                                </div>
                                <div className={signup.columnTextField}>
                                    <TextField fullWidth error={regexObj.lastNameBorder} helperText={regexObj.lastNameHelper} className="lastName" label="Last name" size="small" margin="dense" name="lastName" variant="outlined" width='98%' onChange={takingLastName} />
                                </div>
                            </div>
                            <div className={signup.rowTextField} style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', width: '98%' }}>
                                <TextField fullWidth error={regexObj.emailBorder} helperText={regexObj.emailHelper} className="userName" label='Username@gmail.com' size="small" margin="dense" variant="outlined" onChange={takingEmail} />
                                <div><span className={signup.spantext}>You can use letters, numbers and periods</span></div>
                            </div>
                            <div><a href="#" class={signup.useemail}><b>Use my current email address instead</b></a></div>
                            <div class={signup.form2}>
                                <div className={signup.textField}>
                                    <div className={signup.columnTextField}>
                                        <TextField fullWidth error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} className={signup.firstName} label="Password" size="small" margin="dense" name="firstName" variant="outlined" onChange={takingPassword} />
                                    </div>
                                    <div className={signup.columnTextField}>
                                        <TextField fullWidth className={signup.lastName} label="Confirm" size="small" margin="dense" name="lastName" variant="outlined" />
                                    </div>
                                </div>

                            </div>
                            <div className={signup.text2}>
                                <span className={signup.textAlign}>Use 8 or more characters with a mix of letters, numbers & symbols</span>
                            </div>

                            <div>
                                <form class={signup.form3}>
                                    <div><input type="checkbox" id="checkbox" name="vehicle1" className={signup.checkbox}></input></div>
                                    <div><label for="checkbox" class={signup.checkLabel}> Show password</label><br /></div>

                                </form>

                            </div>
                            <div className={signup.buttons}>
                                <Button size="small" onClick={Navigation}><b>Sign in</b></Button>
                                <div className={signup.button3} onClick={register}><Button variant="contained" className="registerButton" style={{ textTransform: 'none', fontSize: '16px', fontWeight: "bold", fontFamily: '"Google Sans",Roboto,Arial,sans-serif' }}>
                                    Register</Button></div>
                            </div>

                        </div>

                        <div className={signup.rightSide}>
                            <div><img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="Image" width="250"
                                height="250" className={signup.img}></img></div>
                            <div class={signup.string}>
                                <span>One account. All of Google</span>
                                <br />
                                <span>working for you.</span>
                                <text></text>
                            </div>


                        </div>

                    </div>
                </div>

            </div >
        </div >
    )
}
export default Signup