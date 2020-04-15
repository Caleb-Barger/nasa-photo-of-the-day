import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'

function App() {
  const url = "https://api.nasa.gov/planetary/apod"
  const api_key = "TSSoaVgzZOkQkNzWiyTWb5SPBGa8bKuTxrKeinJS"
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get(`${url}?api_key=${api_key}`)
    .then(res => {
      debugger
    })
    .catch(err => {
      debugger
    })
  }, [])


  return (
    <div className="App">

    </div>
  );
}

export default App;
