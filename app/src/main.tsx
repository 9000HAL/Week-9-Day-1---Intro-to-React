import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NavBar from './components/NavBar' //YESSSSSSSS NO ERRORS
// NOOOOOOOO: import NavBar from 'app/src/components/NavBar.tsx'
//import NavBar from '/Users/gabesanchez/Desktop/Week-9-Day-1---Intro-to-React/app/src/components/NavBar.tsx' //YESSSSSSS WITH ERROR MESSAGE
import '../node_modules/bootstrap/dist/css/bootstrap.css'






ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App/>
    <NavBar/>
  </React.StrictMode>,
)



//  /Users/gabesanchez/Desktop/Week-9-Day-1---Intro-to-React/app/src/components/NavBar.tsx

// app/src/components/NavBar.tsx