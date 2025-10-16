import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1 className="text-[1.75rem] font-[700] text-[#292929]">Back up your digital life</h1>
      <p></p>
    </div>
  );
};

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAlert = async () => {
    alert(response);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setResponse('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setResponse('Please fill in both fields');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setResponse('Please enter a valid email address');
      return;
    }

    if (password !== confirmPassword) {
      setResponse('Passwords do not match');
      return;
    }

    setResponse('');
    setLoading(true);

    const payload = { email, password };

    try {
      const response = await fetch('http://localhost:3000/auth/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();

      if (responseData.message === 'email is already registered, please try again w/ new email') {
        setResponse('email is already registered, please try again w/ new email');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        return;
      }

      setEmail('');
      setPassword('');
      setConfirmPassword('');
      navigate("/login");
    } catch (err) {
      setResponse(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form flex flex-col justify-end grow-1 shrink-0 content-end items-center">
      <form onSubmit={handleSubmit} className="flex flex-col h-[80%] justify-between">
        {/* Email Field */}
        <div className="form-group">
          <input
            className="rounded min-h-[3.75rem] border-[#E6E6E6] border w-full focus-visible:outline-1 focus:outline-[#8AC0FF]"
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
            className="rounded min-h-[3.75rem] border-[#E6E6E6] border w-full focus-visible:outline-1 focus:outline-[#8AC0FF]"
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
            className="rounded min-h-[3.75rem] border-[#E6E6E6] border w-full focus-visible:outline-1 focus:outline-[#8AC0FF]"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm Password"
          />
        </div>

        {/* Response Message */}
        {response && handleAlert()}

        {/* Submit Button */}
        <button
          type="submit"
          className="login rounded min-w-[14.375rem] min-h-[3.75rem] text-[#FFFFFF] bg-[#0366FF]"
          disabled={loading}
        >
          {loading ? 'Creating account...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

function SignUp() {
  return (
    <div className="login-container h-full bg-[#FFFFFF] pt-[30%] pb-[5rem] overscroll-none md:pt-[2rem]">
      <div className="login flex flex-col h-full justify-between">
        <Header />
        <Form />
      </div>
    </div>
  );
}

export default SignUp;