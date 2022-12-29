import React from "react";
import './signup.css'
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
function Signup() {
    return (
        <div className="signuppage">
            <div className="box">
                <img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" alt="Image" width="75"
                    height="40"></img>
                <h2>Create your Google Account</h2>
                <div className="section-2">
                    <div class="column">
                        <div className="textField">
                            <div className="columnTextField">
                                <TextField className="firstName" label="First name" size="small" margin="dense" name="firstName" variant="outlined" />
                            </div>
                            <div className="columnTextField">
                                <TextField className="lastName" label="Last name" size="small" margin="dense" name="lastName" variant="outlined" />
                            </div>
                        </div>
                        <div className="rowTextField" style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', width: '98%' }}>
                            <TextField className="userName" label='UserName@gmail.com' size="small" margin="dense" variant="outlined" />
                            <div><span className="spantext">You can use letters, numbers and periods</span></div>
                        </div>
                        <div><a href="#" class="useemail"><b>Use my current email address instead</b></a></div>
                        <div class="form2">
                            <div className="textField">
                                <div className="columnTextField">
                                    <TextField className="firstName" label="Password" size="small" margin="dense" name="firstName" variant="outlined" />
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
                                <div><input type="checkbox" id="checkbox" name="vehicle1" class="checkbox"></input></div>
                                <div><label for="checkbox" class="checkLabel"> Show password</label><br /></div>

                            </form>

                        </div>
                        <div className="buttons">
                            <Button size="small" className=""><b>Sign in</b></Button>
                            <div className="button-3"><Button variant="contained" className="registerButton" style={{ textTransform: 'none', fontSize: '16px', fontWeight: "bold", fontFamily: '"Google Sans",Roboto,Arial,sans-serif' }}>
                                Register</Button></div>
                        </div>

                    </div>

                    <div className="right-side">
                        <div><img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="Image" width="250"
                            height="250" class="img"></img></div>
                        <div class="string">
                            <span>One account. All of Google</span>
                            <br />
                            <span>working for you.</span>
                            <text></text>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}
export default Signup