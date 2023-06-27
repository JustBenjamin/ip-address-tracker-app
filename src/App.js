
import './App.css';
import arrow from './images/icon-arrow.svg';

function App() {


  return (
    <div className="App">
      <h1 style={{  color: "#fff",
                    fontSize: "1.3rem" }}>IP Address Tracker</h1>
      <form>
        <label>
        <input type="text" />
        <button type="button"><img src={arrow}  alt=""/></button>
        </label>
      </form>
      <div className="output">
        <div>
          <p>IP ADDRESS</p>
          <span></span>
        </div>

        <div>
          <p>LOCATION</p>
          <span></span>
        </div>

        <div>
          <p>TIMEZONE</p>
          <span></span>
        </div>

        <div>
          <p>ISP</p>
          <span></span>
        </div>

      </div>
    </div>
  );
}

export default App;
