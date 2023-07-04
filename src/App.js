import { useState } from 'react';
import './App.css';


function App() {




  const [ipaddress, setIpAddress] = useState("");

  const [reg, setReg] = useState("");
  const [zone, setZone] = useState("");
  const [isp, setISP] = useState("");
  


  const handleSubmit = (event) => {
    event.preventDefault();

     const fetchData =  async () => {
        try {
          const response = await  fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_zzzwqu3XyOTkDVpdYeC0qYwx5PIkJ&ipAddress=${ipaddress}`)
          const data = await response.json();
          setReg(data.location.region)
          setZone(data.location.timezone)
          setISP(data.isp)
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      }
 
      fetchData();

  }

  return (
    <div className="App">
      <h1>IP Address Tracker</h1>

      <form onSubmit={handleSubmit}>
        <label>
        <input type="text"
        value={ipaddress}
        onChange={(e) => setIpAddress(e.target.value)}
          />

        <input type="submit" value=">"/>
        </label>
      </form>
      <div className="display">
        <div className="output">
          <p>IP ADDRESS</p>
          <span className="result">{ipaddress}</span>
        </div>

        <div className="output">
          <p>LOCATION</p>
          <span className="result">{reg}</span>
        </div>

        <div className="output">
          <p>TIMEZONE</p>

          <span className="result">UTC{zone}</span>
        </div>

        <div  className="output">
          <p>ISP</p>
          <span className="result">{isp}</span>
        </div>

      </div>
    </div>
  );
  
}

export default App;
