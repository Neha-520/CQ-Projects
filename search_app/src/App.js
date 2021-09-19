import React, { useState } from 'react';
import data from './data.json'
import './App.css';

function App() {
  const [state, setstate] = useState("");

  return (
    <div className="App container">
      <input type="text" name="name" onChange={(e) => setstate(e.target.value)} placeholder="Search Your Restaurants"></input>
      <table style={{ width: "100%", marginTop: "1rem" }}>
        <tr style={{ backgroundColor: "white", textAlign: "left" }}>
          <th className="a" colspan="1">Name</th>
          <th  >Location</th>
        </tr>
        {
          data.employee.filter((val) => {
            if (state === "") return val;
            else if (val.name.toLowerCase().includes(state.toLowerCase()))
              return val;
            return false;
          }).map((val) => {
            return (
              <tr>
                <td >{val.name}</td>
                <td>{val.location}</td>
              </tr>
            );
          })
        }
      </table>
    </div>
  );
}

export default App;
