import { useState } from 'react';

const Header = () => {
  return(
    <div className="header">
      <h1>Upload A File</h1>
      <h3>Back up your digital life</h3>
    </div>
  )
}
// LoginForm component
function LoginForm() {
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

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}

        {/* Submit Button */}
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
