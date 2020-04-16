import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Header from './components/Header'
import Photo from './components/Photo'
import Description from './components/Description'
import AppContainer from './components/AppContainer'

import potd from './data.json' // for testing without using up all my get requests

function App() {
  const url = "https://api.nasa.gov/planetary/apod"
  const api_key = "TSSoaVgzZOkQkNzWiyTWb5SPBGa8bKuTxrKeinJS"
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get(`${url}?api_key=${api_key}`)
    .then(res => {
      setData(res.data)
    })
    .catch(err => {
      debugger
    })
  }, [])

  // useEffect(() => { // see line 8
  //   setData(potd)
  // }, [])

  return (
    <AppContainer>
      {data && <Header data={data}/>}
      {data && <Photo data={data}/>}
      {data && <Description data={data}/>}
    </AppContainer>
  );
}

export default App;
