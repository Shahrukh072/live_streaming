import React, { useState } from 'react';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    const data = { email, password };

    try {
      const response = await fetch('http://localhost:8080/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        // Sign in successful
        const result = await response.json();
        // Handle successful sign-in, e.g., store user data in context or state.
        console.log('Sign-in successful:', result);
      } else {
        // Sign in failed
        const error = await response.json();
        // Handle sign-in error, e.g., display an error message.
        console.error('Sign-in error:', error.message);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error);
    }
  };

  const formStyle = {
    width: '500px',
    margin: '0 auto',
    padding: '40px',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'grey',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '18px',
    margin: '10px 0',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn} style={formStyle}>
        <div>
          <label style={labelStyle}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        <div>
          <label style={labelStyle}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        <div>
          <button type="submit" style={buttonStyle}>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
