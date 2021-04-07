import React, { useState, Fragment } from 'react'
import SingleColor from './components/SingleColor'


import Values from 'values.js'

function App() {
  const [color, setColor] = useState('initialState')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])

  return (
<Fragment>
  <section className="container"></section>
  <section className="colors"></section>
</Fragment>
  )
}

export default App
