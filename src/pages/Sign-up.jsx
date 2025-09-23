import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
    return(
        <div className="OAuth">
            <div className="google"></div>
            <div className="meta"></div>
            <div className="apple"></div>
        </div>
    )
}

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassowrd, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
 
    const userCreated = async (response) => {
        if(response.status === 201 || response.status === '201'){
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            alert('User created');
            useNavigate('/login');
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(password != confirmPassowrd){
            setError('passwords do not match')
        }
        if(!email || !password || !confirmPassowrd){
            setError('Please fill in all the fields')
        }
        
        setError('');
        setLoading(true);

        try{
        const response = await axios.post("http://localhost:3000/user", JSON.stringify({email, password, }), {headers: { "Content-Type": "application/json" }, withCredentials: true})
        .then(userCreated)
        }
        catch(err){
            setError(err.message);
        }
        finally{
            setLoading(false)
        }
    }

    return(
        <div className="form">
            <form action="https://localhost:3000/sign-up" onSubmit={handleSubmit} method="post">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="email" required/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="password" required/>
                <input type="password" value={confirmPassowrd} onChange={(e) => setConfirmPassword(e.target.value)} name="confirmPassword" id="confirmPassword" placeholder="confirm password" required/>
                <OAuth />
                <button type="submit" onSubmit={handleSubmit} disabled={loading}>Sign Up</button>
            </form>
        </div>
    )
}

const SignUpForm = () => {

    return(
        <div className="sign-up">
            <div className="header"><h1>Back up your digital life</h1></div>
            <p>Choose one of the options to login</p>
            <Form />
        </div>
    )
}

export default SignUpForm;