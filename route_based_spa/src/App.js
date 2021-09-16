import { Route, Switch } from 'react-router';
import './App.css';
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
