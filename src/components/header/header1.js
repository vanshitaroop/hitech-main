import React from 'react'
import { Link } from 'react-router-dom';
const Header1 = () => {
  return (
    <div className="navbar-brand">
      <Link  to="/" className="navbar-item logo" style={{marginLeft: "10%"}}>
        <img src="Sources/images/hitech_logo.png" alt="logo" />
      </Link>
    </div>
  );
}

export default Header1