import React, {useState} from 'react';
import logo from './logo.svg';
import MySquad from './Components/Team';
import Form from './Components/Form';
import './App.css';

function App() {
  const [squadMembers, setSquadMembers] = useState([{
    id: 1,
    name: "Courtney Jackson",
    role: "Web Developer",
    email: "courtney.jackson08234@gmail.com"
  }])

  const addMemberFn = squadMember =>{
    const newSquadMember={
      id: Date.now(),
      name: squadMember.name,
      role: squadMember.role,
      email: squadMember.email
    }
    setSquadMembers([...squadMembers, newSquadMember]);
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Add a New Squad Member</h1>
        <Form addMemberFn={addMemberFn}/>
        <MySquad squadMembers={squadMembers}/>
      </header>
    </div>
  );
}

export default App;
