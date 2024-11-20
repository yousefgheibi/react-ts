import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: 'Yousef',
    last: 'Gheibi'
  }

  const nameList = [
    {
      first: 'Yousef',
      last: 'Gheibi'
    },
    {
      first: 'Clark',
      last: 'Kenk'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]

  return (
    <div className="App">
      <Greet name="Yousef" messageCount={10} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
