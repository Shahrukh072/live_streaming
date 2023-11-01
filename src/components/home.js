import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Home() {
    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        backgroundColor: 'Green',
      };
    
      const linkStyle = {
        color: 'blue',
        fontSize: '18px',
        textDecoration: 'none',
        marginLeft: '20px',
      };

      const headingStyle = {
        fontSize: '24px',
        marginLeft: '20px',
        color: 'black',
      };
    
  return (
    <div style={headerStyle}>
      <h1 style={headingStyle}>Welcome</h1>
      <Link to="/signup" style={linkStyle}>Signup</Link>
      <Link to="/signin" style={linkStyle}>Signin</Link>
    </div>
  );
}

export default Home;
