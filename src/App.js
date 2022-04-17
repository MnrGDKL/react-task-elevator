import React from 'react'
import "./App.css";
import Floors from './components/Floors';

const App = () => {
  const [floorQue, setFloorQue] = React.useState([]);
  return (
    <div>
      <h1>Elevator Sequence: {floorQue.length !== 0 
                              ? floorQue.map(floor=> floor).join(' - ')
                              : "-"}</h1>
      <Floors floorQue={setFloorQue}/>
    </div>
  )
}

export default App
