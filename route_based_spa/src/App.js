import { Route, Switch } from 'react-router';
import { Link } from "react-router-dom"
import './App.css';
import Signin from './Signin';
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Link to="/signin"><button>SignIn</button></Link>
          <Link to="/signup"><button style={{ alignSelf: "center", margin: "3rem" }}>SignUp</button></Link>
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
