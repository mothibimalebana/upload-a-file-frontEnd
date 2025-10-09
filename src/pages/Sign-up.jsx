import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  return(
    <div className="header">
      <h1>Upload A File</h1>
      <h3>Back up your digital life</h3>
    </div>
  )
}


const Form = () => {
  // State to handle form input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);  // Loading state
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!email || !password) {
      setResponse('Please fill in both fields');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setResponse('Please enter a valid email address');
      return;
    }

    if(password !== confirmPassword){
        setResponse('Passwords do not match')
        return;
    }
    // Clear any previous errors
    setResponse('');
    setLoading(true);

    // Prepare the payload for the POST request
    const payload = { email, password };

    try {
      // Make POST request to backend
      const response = await fetch('http://localhost:3000/auth/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

            
      if(responseData.message === 'email is already registered, please try again w/ new email'){
        setResponse('email is already registered, please try again w/ new email')
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        return;
      }

      setEmail('');
      setPassword('');
      setConfirmPassword('');
      navigate("/login")
      
    } catch (err) {
        setResponse(err.message);
    } finally {
      setLoading(false);
    }
  };
  return(
    <div className="form flex-1">
      <form onSubmit={handleSubmit} className='flex flex-col justify-evenly items-center h-full'>
        {/* Email Field */}
        <div className="form-group">
          <input 
            className="rounded-[0.625rem] border-1 border-[#E6E6E6] focus-visible:outline-[#8AC0FF] md:w-[27.5rem] h-[4.3125rem] shrink-0"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email@gmail.com"
            autoFocus
          />
        </div>

        {/* Password Field */}
        <div className="form-group">
          <input 
            className='rounded-[0.625rem] border-1 border-[#E6E6E6] focus-visible:outline-blue-300 md:w-[27.5rem] h-[4.3125rem] shrink-0'
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>

        {/* Confirm Password Field */}
        <div className="form-group">
          <input 
            className='rounded-[0.625rem] border-1 border-[#E6E6E6] focus-visible:outline-blue-300 md:w-[27.5rem] h-[4.3125rem] shrink-0'
            type="password"
            id="confirmPassword"
            name="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm Password"
          />
        </div>

        {/* response Message */}
        {response && <p className="response-message">{response}</p>}

        {/* Submit Button */}
        <button type="submit" className="sign-up-button md: w-[19.5rem] h-[3.875rem] shrink-0 bg-[#0366FF] rounded-[0.5rem] text-white" disabled={loading}>
          {loading ? 'Creating account...' : 'sign-up'}
        </button>
      </form>
    </div>
  )
}


// SignUpForm component
function SignUpForm() {
  return (
    <div className="sign-up-container bg-[#EEF2F5] h-full flex justify-center">
      <div className="sign-up flex gap-[3.625rem] flex-col bg-[#fff] h-full md:min-w-[32.6875rem] min-h-[37.5625rem]">
        <Header/>
        <Form/>
      </div>
    </div>
  );
}

export default SignUpForm;
