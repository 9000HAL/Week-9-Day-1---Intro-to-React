//-------> "jsxml is what it is"

import Card from "./components/Card";
import NavBar from "./components/NavBar";

/////////////////////////////////

const App = () => {
  //JavScript XML
  
  return (
    <div>
      <h5>Gabe's Intro To React HW Ver.2 : Not-so-random Mode</h5>
      <NavBar/>
      <Card/>
    </div>)

};


export default App;






/*
const App = () => {
    //JavaScript XML
  const name = "Dylan";
  if (name) {}
  return (
    <div>hello {name}</div>
  )
}
export default App


//////////////////////////////////////////////////////////////////////////////////////////


export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyOtherButton />
    </div>
  );
}

function MyOtherButton() {
  function handleClick() {
    alert('You clicked me!');
  }


  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

*/

//////////////////////////////////////////////////////////////////////////////////////////

/*


export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}



function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

//////////////////////////////////////////////////////////////////////////////////

*/
