import { useState } from "react";

const Form = () => {
    return(
        <div className="form">
            <form action="https://localhost:3000/sign-up" method="post">
                <label htmlFor="email"></label>
            </form>
        </div>
    )
}

const SignUpForm = () => {

    return(
        <div className="sign-up">
            <div className="header"><h1>Back up your digital life</h1></div>
            <p>Choose one of the options to login</p>
        </div>
    )
}

export default SignUpForm;