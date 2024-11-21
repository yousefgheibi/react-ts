import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';

function App() {
  return (
    <div className="App">
      <Container styles={{border:'1px solid #3333', padding: '1rem'}}/>
      <LoggedIn />
      <User />
    </div>
  );
}

export default App;
