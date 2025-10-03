import { useState } from 'react';

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
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);  // Loading state
  const [active, setActive] = useState(false)

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
    <div className="form flex-1">
      <form onSubmit={handleSubmit} className='flex flex-col justify-evenly items-center h-full'>
        {/* Email Field */}
        <div className="form-group">
          <input 
            className="rounded-[0.625rem] border-1 border-[#E6E6E6] focus-visible:outline-[#8AC0FF] md:w-[27.5rem] h-[4.3125rem] shrink-0"
            type="email"
            onFocus={() => setActive("email")}
            onBlur={() => setActive("")}
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

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}

        {/* Submit Button */}
        <button type="submit" className="login-button md: w-[19.5rem] h-[3.875rem] shrink-0 bg-[#0366FF] rounded-[0.5rem] text-white" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  )
}


// LoginForm component
function LoginForm() {
  return (
    <div className="login-container bg-[#EEF2F5] h-full flex justify-center">
      <div className="login flex gap-[3.625rem] flex-col bg-[#fff] h-full md:min-w-[32.6875rem] min-h-[37.5625rem]">
        <Header/>
        <Form/>
      </div>
    </div>
  );
}

export default LoginForm;
