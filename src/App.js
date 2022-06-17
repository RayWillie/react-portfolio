import React from 'react';
import Nav from './components/Nav';
import About from './components/about';
import Footer from './components/Footer';
import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
          <Resume></Resume>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
