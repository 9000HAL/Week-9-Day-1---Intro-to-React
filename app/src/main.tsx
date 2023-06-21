import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NavBar from './components/NavBar'
import '../node_modules/bootstrap/dist/css/bootstrap.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App/>
    <NavBar/>
  </React.StrictMode>,
)
