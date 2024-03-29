// import logo from './logo.svg';
import react from 'react'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'

import Header from './components/Header/Header'
import './App.scss';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <div className='app'>
        <Router>
          <Header />
          <div className='container'>
            <Routes>
              <Route path='/' exact Component={Home} />
              <Route path='/movie/:imdbID' Component={MovieDetail} />
              <Route path='/*' Component={PageNotFound} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
