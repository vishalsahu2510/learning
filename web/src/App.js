import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  var [API_RESP, setAPIresp] = useState("API response will appear here");

  useEffect(() => {
    axios("/new-user")
      .then((resp) => {
        setAPIresp(JSON.stringify(resp.data.data));
      })
      .catch((e) => console.log(e));
    return () => {};
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from FrontEnd</h1>
        <br />
        <h5>{API_RESP}</h5>
      </header>
    </div>
  );
}

export default App;
