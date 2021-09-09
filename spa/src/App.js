import './App.css';
import { Coupons } from './Coupons';
import { Footer } from './Footer';
import { Nav } from './Nav';
import { Showcase } from './Showcase';
import { Tutorials } from './Tutorials';
import { Video } from './Video';

function App() {
  return (
    <div className="App">
      <Nav />
      <Showcase />
      <Tutorials />
      <Video />
      <Coupons />
      <Footer />
    </div>
  );
}

export default App;
