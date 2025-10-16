import { useState } from 'react';

const Header = () => {
  return(
    <div className="header">
      <h1 className='text-[1.75rem] font-[700] text-[#292929]'>Back up your digital life</h1>
      <p></p>
    </div>
  )
}


const Form = () => {
  // State to handle form input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);  // Loading state

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Clear any previous errors
    setError('');
    setLoading(true);

    // Prepare the payload for the POST request
    const payload = { email, password };

    try {
      // Make POST request to backend
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Login failed. Please try again.');
      }

      const data = await response.json();
      console.log('Login successful:', data);
      setEmail('');
      setPassword('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return(
    <div className="form flex flex-col justify-end grow-1 shrink-0 content-end items-center">
      <form onSubmit={handleSubmit} className='flex flex-col h-[80%] justify-between'>
        {/* Email Field */}
        <div className="form-group">
          <input 
            className="rounded min-h-[3.75rem] border-[#E6E6E6] border-[1px] w-full focus:outline-1 outline-[#8AC0FF]"
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
            className="rounded min-w-[14.375rem] min-h-[3.75rem] border-[#E6E6E6] border-[1px] w-full focus-visible:outline-1 outline-[#8AC0FF]"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}

        {/* Submit Button */}
        <button type="submit" className="login rounded min-w-[14.375rem] min-h-[3.75rem] text-[#FFFFFF] bg-[#0366FF]" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  )
}


// LoginForm component
function LoginForm() {
  return (
    <div className="login-container h-full bg-[#FFFFFF] pt-[30%] pb-[5rem] overscroll-none md:pt-[2rem]">
      <div className="login flex flex-col h-full justify-between">
        <Header/>
        <Form/>
      </div>
    </div>
  );
}

export default LoginForm;
