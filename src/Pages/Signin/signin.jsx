import './signin.css'
import React from "react";
function Signin() {
    return (
        <body>
            <div class="box">
                <img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" alt="Girl in a jacket" width="75"
                    height="40"></img>
                <h2>Sign in</h2>
                <p>Use your Google Account</p>
                <form>
                    <div class="section-2">
                        <div>
                            <div class="inputBox">
                                <div>
                                    <input type="email" id="email" name="email" value=""></input>
                                    <label for="email" class="Label1">Email</label>



                                    <input type="text" id="pass" name="text" value=""></input>
                                    <label id="pass" class="Label2">Password</label>
                                </div>

                            </div>

                        </div>

                        <div><a href="#" class="forgot-Password">Forgot password</a></div>


                    </div>
                    <div class="section-3">
                        <div class="learn-more-label">
                            Not your computer? Use Guest mode to sign in privately.
                        </div>
                        <div> <a href="#" class="learn-more-button"><b>Learn more</b></a></div>
                    </div>
                    <div class="buttons">
                        <a href="googleCreateAccount.html" class="create-account"><b>Create account</b></a>
                        <input type="submit" name="sign-in" value="Next" class="button-2"></input>
                    </div>


                </form>
            </div>
        </body>
    )
}
export default Signin