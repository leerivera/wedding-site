import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cardone from './components/pages/Cardone';
import Cardtwo from './components/pages/Cardtwo';
import Cardthree from './components/pages/Cardthree';
import Cardfour from './components/pages/Cardfour';
import Cardfive from './components/pages/Cardfive';
import Cardsix from './components/pages/Cardsix';
import Details from './components/pages/Details';
// import SignUp from './components/pages/SignUp';
import Cards from './components/pages/Cards'
// import logo from './images/logo'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cardone' component={Cardone} />
          <Route path='/cardtwo' component={Cardtwo} />
          <Route path='/cardthree' component={Cardthree}/>
          <Route path='/cardfour' component={Cardfour}/>
          <Route path='/cardfive' component={Cardfive}/>
          <Route path='/cardsix' component={Cardsix}/>
         
          <Route path='/details' component={Details} />
          <Route path='/cards' component={Cards} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
