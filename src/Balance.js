import { useState } from "react";


function Balance(){
    const [show, setShow]     = useState(true);
    const [status, setStatus] = useState(''); 
    const [balance, setBalance] = useState('');
  
    const handleSubmit = async (e) => {

    }
  
    return (
        <>
 
    <h2>Balance</h2>
          <form onSubmit={handleSubmit}>
              {/* <div className="form-group">
                  <label>Email address:</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value
                  )} />
              </div> */}
              <div className="form-group">
                  <label>Password:</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value
                  )} />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </>
    )
  
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
          console.log('Balance from server:', data.balance)  // Add this log
  
          if (data && data.balance !== undefined) {
            console.log('Setting balance:', data.balance);  // Add this log
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
        Email<br />
        <input
          type="input"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}
        /><br />
  
        <button type="submit" className="btn btn-light" onClick={handle}>
          Check Balance
        </button>
        {balance !== '' && <div>Your balance is: ${balance}</div>}
      </>
    );
  }
  

  export default Balance;