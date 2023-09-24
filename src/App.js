import React, { useState, useEffect, useReducer } from 'react';

import Register from './Register';
import Balance from './Balance';
import { getAuth, onAuthStateChanged } from './firebaseConfig';
import Login from './Login';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBarLoggedIn from './NavBarLoggedIn';
import NavBarLoggedOut from './NavBarLoggedOut';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div>
      {user ? <NavBarLoggedIn /> : <NavBarLoggedOut />}
      <Router>
        <Routes>
          {user ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/Login/" element={<Login />} />
              <Route path="/Register/" element={<Register />} />
              <Route path="/Balance/" element={<Balance uid={user.uid} />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/Login/" element={<Login />} />
              <Route path="/Register/" element={<Register />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
