import './App.css';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Users from './User/pages/Users';
import NewPlace from './places/pages/NewPlace';

function App() {
  return (
    <div className="App">
       <Router>
      <Switch>
      <Route path="/" exact>
        <Users/>
      </Route>
      <Route path="/new" exact>
        <NewPlace/>
      </Route>
      <Redirect to="/"/>
      </Switch>

    </Router>
    </div>
  );
}

export default App;
