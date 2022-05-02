import React from 'react' // You need to import React in every component file
import About from './components/About'
import Nav from './components/Nav'
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
