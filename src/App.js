import React from 'react';
import './App.css';


async function App() {
  let result = await fetch('./MASTER.html')
  console.log(result)

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
