import React from 'react';
import './App.css';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { DomRef } from './components/ref/DomRef';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
        <DomRef />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
