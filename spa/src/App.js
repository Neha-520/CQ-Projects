import './App.css';
import { Coupons } from './Coupons';
import { Footer } from './Footer';
import { Nav } from './Nav';
import { Showcase } from './Showcase';
import { Tutorials } from './Tutorials';
import { Video } from './Video';
// import { Switch, Route } from 'react-router-dom';

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
      <Video />
      <Coupons />
      <Footer />
    </div>
  );
}

export default App;
