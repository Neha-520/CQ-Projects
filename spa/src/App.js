import './App.css';
import { Nav } from './Nav';
import { Showcase } from './Showcase';
import { Tutorials } from './Tutorials';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Switch>
        <Route path="/Showcase" component={Showcase} />
        <Route path="/Tutorials" component={Tutorials} />
      </Switch> */}
      <Showcase />
      <Tutorials />
    </div>
  );
}

export default App;
