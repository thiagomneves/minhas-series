import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import Home from './Home'
import Generos from './Generos'
import NovoGenero from './NovoGenero'
import EditarGenero from './EditarGenero'

function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('/api').then(res => {
      setData(res.data)
    })
  }, [])
  return (
    <Router>
      <div>
        <Header />
        <Route  path='/' exact component={Home}/>
        <Route  path='/generos/:id' exact component={EditarGenero}/>
        <Route  path='/generos/novo' exact component={NovoGenero}/>
        <Route  path='/generos' exact component={Generos}/>
        <pre>{JSON.stringify(data)}</pre>
      </div>
    </Router>
  );
}

export default App
