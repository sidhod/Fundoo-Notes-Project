import './signin.css'
import React, { useState } from "react";
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import { loginApi } from '../../services/userService';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { border } from '@mui/system';
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const signIn = makeStyles({
    loginPage: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        /* border: 1px solid red; */

    },
    loginCard: {
        width: '30%',
        borderRadius: '8px',
        border: '1px solid #dadce0',
        height: '73%',
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center'
        /* border: 1px solid red; */
    },
    content: {
        height: '75%',
        width: '100%',
        marginTop: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
        /* border: 1px solid red; */
    },
    section1: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        /* border: 1px solid red; */
    },

    googleIcon: {
        marginTop: '70px',
        // border: ' 1px solid red',
    },

    headText: {
        color: '#202124',
        fontFamily: 'Google Sans, Noto Sans Myanmar UI,arial',
        fontSize: '24px',
        fontWeight: '500',
        lineHeight: '1.3333',
        marginBottom: '0',
        marginTop: '0',
        alignItems: 'center',
        justifyContent: 'center',
        // border: ' 1px solid red',
    },
    subtext: {
        marginTop: '5px',
        // border: '1px solid red',
    },

    section2: {
        padding: '2px',
        /* border: 1px solid blue; */
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        // border: '1px solid blue',
    },

    TextField: {
        width: '80%',
        // border: '1px solid blue',
        display: 'flex',
        flexDirection: 'column',
        /* border: 1px solid blue; */
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        // border: '1px solid red',
        width: '80%'

    },
    forgotPassword: {
        color: 'blue',
        textDecoration: 'none',
        fontSize: '14px',
        // marginRight: '265px',
        // border: '1px solid blue',
    },
    notComputer: {
        marginTop: '20px',
        // marginRight: '20px',
        color: '#5f6368',
        fontSize: '14px',
        lineHeight: '1.4286',
        // border: '1px solid blue',
    },
    link: {
        // border: '1px solid blue',
        color: '#1a73e8',
        display: 'inline - block',
        fontWeight: '500',
        letterSpacing: '0.5px',
        fontSize: '14px',
        textDecoration: 'none',
        // marginRight: '285px',

    },

    section3: {
        marginTop: '35px',
        width: '80%',
        /* border: 1px solid black; */
        display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        // border: '1px solid blue',

    },

    create: {
        color: '#1a73e8',
        // display: 'inline - block',
        fontWeight: '500',
        letterSpacing: '0.5px',
        textDecoration: 'none',
        outline: 'none',
        cursor: 'pointer',
        // marginRight: '100px'
    },
    loginButton: {
        background: '#1a73e8',
        color: '#fff',
        lineHeight: '22px',
        fontSize: '16px',
        minWidth: '88px',
        letterSpacing: '0.5px',
        fontWeight: '500',
    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        loginCard: {
            width: '100vw',
            height: '100vh',
            // border: '1px solid blue',
            marginTop: '0px',
            marginBottom: '280px',
            border: 'none'

        },
        content: {
            width: '100%',
            height: '95%',
            // border: '1px solid blue',

        },

        TextField: {
            width: '80%'
            /* border: 1px solid red; */
        },

        text: {
            /* border: 1px solid red; */
            marginLeft: '0px',
        },
        section3: {
            marginTop: '30px'
        }
    },
    ['@media only screen and (min-width: 481px) and (max-width: 768px)']: {
        loginCard: {
            width: '100vw',
            height: '100vh',
            // border: '1px solid blue',
            marginTop: '0px',
            marginBottom: '280px',
            border: 'none'

        },
        content: {
            width: '100%',
            height: '90%',
            // border: '1px solid blue',

        },
        // notComputer: {
        //     marginRight: '100px'
        // },

        TextField: {
            width: '80%'
            /* border: 1px solid red; */
        },

        text: {
            /* border: 1px solid red; */
            marginLeft: '0px',
        },
        section3: {
            marginTop: '30px'
        }
    },
    ['@media only screen and (min-width: 789px) and (max-width: 1024px)']: {
        loginPage: {
            width: '100vw',
            height: '100vh',
        },
        loginCard: {
            width: '60%',
            height: '75%',
            marginTop: '0px'
            // border: '1px solid blue',

        },
        content: {
            width: '95%',
            height: '85%',
            marginTop: '0px'
            // border: '1px solid blue',

        },
        // notComputer: {
        //     marginRight: '100px'
        // },

        TextField: {
            width: '80%'
            /* border: 1px solid red; */
        },

        text: {
            /* border: 1px solid red; */
            marginLeft: '0px',
        },
        section3: {
            marginTop: '30px'
        }
    }

})
function Signin() {
    const signin = signIn();
    const navigate = useNavigate();
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
                .then((response) => {
                    console.log(response);
                    localStorage.setItem('token', response.data.data)
                    navigate('/dashboard')
                })
                .catch((error) => { console.log(error) });
        }
    }
    const Navigation = () => {
        navigate('/signup')
    }
    return (
        <div className={signin.loginPage}>
            <div className={signin.loginCard}>
                <div className={signin.content}>
                    <div className={signin.section1}>
                        <div><img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" alt="Girl in a jacket" width="75"
                            height="40" className={signin.googleIcon}></img></div>
                        <h2 className={signin.headText}>Sign in</h2>
                        <p className={signin.subtext}>Use your Google Account</p>
                    </div>

                    <div className={signin.section2} >
                        <div className={signin.TextField}>
                            <div><TextField fullWidth error={regexObj.emailBorder} helperText={regexObj.emailHelper} className="outlined" label="Email" variant="outlined" onChange={takingEmail} /></div>
                            <div><TextField fullWidth error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} className="outlined" label="Password" variant="outlined" margin="normal" width="" onChange={takingPassword} /></div>
                        </div>

                        <div className={signin.text}>
                            <div><a href="#" class={signin.forgotPassword}>Forgot password</a></div>
                            <div className={signin.notComputer}>
                                <span>Not your computer? Use Guest mode to sign in privately.</span>
                            </div>



                            <div><a className={signin.link} href="" >Learn More</a></div>
                        </div>
                    </div>
                    <div className={signin.section3} >
                        <div className={signin.create} onClick={Navigation}>Create Account</div>
                        <Button className={signin.Button} variant="contained" onClick={submit}>Login</Button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Signin