import './App.css';
import { Nav } from './Nav';
import { Showcase } from './Showcase';

function App() {
  return (
    <div className="App">
      <Nav style={{ marginBottom: "500px" }} />
      <Showcase style={{ marginTop: "500px" }} />
    </div>
  );
}

export default App;
