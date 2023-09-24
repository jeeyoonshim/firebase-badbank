import React, { useState, useEffect } from 'react';
import Register from './Register';
import NavbarLoggedIn from './NavbarLoggedIn';
import NavbarLoggedOut from './NavbarLoggedOut';
import { getAuth, onAuthStateChanged } from './firebaseConfig';
import Login from './Login';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  // const [loggedInUser, setLoggedInUser] = React.useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div>
    <Router>
      {user ? <NavbarLoggedOut /> : <NavbarLoggedIn />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login/" element={<Login />} />
        <Route path="/Register/" element={<Register />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;