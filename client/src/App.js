import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import NavBar from './Components/NavigationBar/NavBar';
import Footer from './Components/Footer/Footer';

// Pages
import Homepage from './Pages/Homepage/Homepage';
import About from './Pages/About/About';
import SinglePage from './Pages/SinglePage/SinglePage';
import Error from './Pages/Error/Error';
import Publish from './Pages/Publish/Publish';
import Houses from './Pages/ListOfHouses/Houses';
import Login from './Pages/Login/Login';
import React from 'react';

function App() {

  return (
    <Router>
      <NavBar/>
        <Switch>
          <Route exact path='/'>
            <Homepage/>
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route exact path='/houses'>
            <Houses/>
          </Route>
          <Route path='/houses/publish'>
            <Publish/>
          </Route>
          <Route path='/houses/:id'>
            <SinglePage/>
          </Route>
          <Route path='*'>
            <Error/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
