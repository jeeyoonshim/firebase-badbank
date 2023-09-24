
function Child2({currentUser, setCurrentUser}) {
    // console.log("child2 before: ", currentUser);
    // setCurrentUser('test2@gmail.com');
     console.log("child2 after: ", currentUser)
  return (
    <div>
       <button onClick={() => setCurrentUser('a@a.com')}>click</button>
    </div>
  );
}

export default Child2;
