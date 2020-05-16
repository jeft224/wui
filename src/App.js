import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Tag } from './components'

function App () {
  const [visible,setVisible]  = React.useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"  />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => setVisible(!visible)}>显示</button>
        <Tag color={'red'} visible={visible}>标签</Tag>
      </header>
    </div>
  )
}

export default App