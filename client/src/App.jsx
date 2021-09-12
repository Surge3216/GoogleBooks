import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Saved from './pages/saved';
import Search from './pages/search';

function App() {
  return(
    <Router>
      <Switch>
      <Route path="/saved" component={Saved}/>
      <Route path="/" component={Search}/>
      </Switch>
    </Router>
  )
}
export default App;