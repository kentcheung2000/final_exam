import React from 'react';
import { NavLink /* Link */ } from 'react-router-dom';

function NavBar(props) {
  const { currentUser, onSignOut } = props;
  const handleSignOutClick = event => {
    event.preventDefault();

    if (typeof onSignOut === "function") {
      onSignOut();
    }
  };

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 30px'
      }}
    >

      <NavLink to="/auctions">Auctions</NavLink>


      <NavLink to="/auctions/new">Create a new auction</NavLink>
      {currentUser ? (
        <>

          <span>Welcome {currentUser.full_name}</span>
          <a href="#sign_out" onClick={handleSignOutClick}>
            Sign Out
          </a>
        </>
      ) : (
          <>
            <NavLink to="/sign_in">Sign In</NavLink>
            <NavLink to="/sign_up">Sign Up</NavLink>
          </>
        )}


    </nav>
  );
}

export default NavBar;

