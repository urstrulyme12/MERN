import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./User/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/Navigation/MainNavigation";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/" exact>
              <Users />
            </Route>
            <Route path="/places/new" exact>
              <NewPlace />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
