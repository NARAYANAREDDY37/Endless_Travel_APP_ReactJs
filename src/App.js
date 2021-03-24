import logo from './logo.svg';
import './App.css';
import Navabar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Navabar/>
      <Switch>
        <Route path="/" exact/>
      </Switch>
    </Router>
      
    </>
    
  );
}


export default App;
