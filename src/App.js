import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
//components
import Home from './pages/Home.jsx'
import MainNav from './components/MainNav.jsx';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBracketsCurly, faPencilAlt, faEnvelope, faHomeAlt, faLaptopCode, faTimes, faServer, faDatabase, faPlus, faBrain, faChartPie } from '@fortawesome/pro-regular-svg-icons'
import { faFilePdf, faChartScatter, faHorizontalRule, faProjectDiagram } from '@fortawesome/pro-light-svg-icons'
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
  faLaptopCode,
  faTimes,
  faServer,
  faDatabase,
  faProjectDiagram,
  faHorizontalRule,
  faChartScatter,
  faBrain,
  faChartPie,
  faPlus,
  faFilePdf);

function App({dResizeTracker}) {
  useEffect(() => {
    dResizeTracker();
    window.addEventListener('resize', dResizeTracker);
    return () => {
      window.removeEventListener('resize', dResizeTracker)
    }
  }, [])
  return (
    <div className='App'>
      <Router>
        <MainNav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/code' component={Home} />
          <Route exact path='/art' component={Home} />
          <Route exact path='/contact' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  function resizeTracker(e) {
    const { innerWidth } = e ? e.target : window
    if (innerWidth <= 600) {
      dispatch({ type: 'UPDATE_MOBILE', payload: true })
    } else {
      dispatch({ type: 'UPDATE_MOBILE', payload: false })
    }
  }
  const dResizeTracker = debounce(resizeTracker, 100);
  return {
    dResizeTracker
  }
}
export default connect(null,mapDispatchToProps)(App);
