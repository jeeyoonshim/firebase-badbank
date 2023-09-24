import { React, useState } from 'react';
// const { getFirestore } = require('firebase-admin/firestore');
// import { db } from './firebaseConfig';
import { readUserData } from './firebaseDatabase';

function Balance({ uid }) {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');
  const [balance, setBalance] = useState('');

  const handleSubmit = async e => {
    // const userRef = db.collection('users').doc('peter@mit.edu');
    // const doc = await userRef.get();
    // if (!doc.exists) {
    //   console.log('No such document!');
    // } else {
    //   console.log('Document data:', doc.data());
    // }
    console.log('button is clicked');
    const userDetails = await readUserData(uid);
    console.log(userDetails);
  };

  return (
    <>
      <h2>Balance</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Password:</label>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

function BalanceMsg(props) {
  return (
    <>
      <h5>Balance Check Successful</h5>
      <button
        type="submit"
        className="btn btn-light"
        onClick={() => {
          props.setShow(true);
          props.setStatus('');
        }}
      >
        Check balance again
      </button>
    </>
  );
}

function BalanceForm(props) {
  const [email, setEmail] = React.useState('');
  const [balance, setBalance] = React.useState('');

  function handle() {
    fetch(`/account/findOne/${email}`)
      .then(response => response.json())
      .then(data => {
        console.log('Data from server:', data);
        console.log('Balance from server:', data.balance); // Add this log

        if (data && data.balance !== undefined) {
          console.log('Setting balance:', data.balance); // Add this log
          setBalance(data.balance);
          props.setShow(false);
          props.setStatus('Your balance is: $' + data.balance);
        } else {
          props.setStatus('Failed to retrieve balance');
        }
      })
      .catch(err => {
        props.setStatus('Error while fetching balance');
      });
  }

  return (
    <>
      Email
      <br />
      <input
        type="input"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={e => setEmail(e.currentTarget.value)}
      />
      <br />
      <button type="submit" className="btn btn-light" onClick={handle}>
        Check Balance
      </button>
      {balance !== '' && <div>Your balance is: ${balance}</div>}
    </>
  );
}

export default Balance;
