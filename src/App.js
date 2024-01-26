// import logo from './logo.svg';
import react from 'react'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'

import Header from './components/Header/Header'
import './App.scss';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <div className='app'>
        <Router>
          <Header />
          <Routes>
            <Route path='/' Component={Home} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
