import { React, useState } from 'react';
import { readUserData } from './firebaseDatabase';

function Balance({ uid }) {
  // const [show, setShow] = useState(true);
  // const [status, setStatus] = useState('');
  // const [balance, setBalance] = useState('');

  const handleSubmit = async e => {
    const userDetails = await readUserData(uid);
    console.log(userDetails);
  };

  return (
    <>
      <h2>Balance</h2>
      <div className="form-group">
        <label>Password:</label>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}

export default Balance;
