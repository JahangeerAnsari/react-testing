import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [butttonColor,setButtonColor,] = useState("red")
  const newButtonColor = butttonColor === "red" ? 'blue':'red'
  return (
   <div>
      <button style={{backgroundColor:butttonColor}}
      onClick={() => setButtonColor(newButtonColor)}
      >Change to blue</button>
   </div>
  );
}

export default App;
