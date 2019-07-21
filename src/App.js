import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//components
import Home from './pages/Home.jsx'
import MainNav from './components/MainNav.jsx';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBracketsCurly, faPencilAlt, faEnvelope, faHomeAlt } from '@fortawesome/pro-regular-svg-icons'
import { faFilePdf } from '@fortawesome/pro-light-svg-icons'
import { faGithub, faVimeoV } from '@fortawesome/free-brands-svg-icons';
// import logo from './logo.svg';
import './App.css';
library.add(
  faBracketsCurly, 
  faPencilAlt, 
  faEnvelope, 
  faHomeAlt, 
  faGithub,
  faVimeoV,
  faFilePdf);

function App() {
  return (
    <div className='App'>
      <Router>
        <MainNav />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/code' component={Home}/>
          <Route exact path='/art' component={Home}/>
          <Route exact path='/contact' component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
