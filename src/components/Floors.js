import React, { useEffect } from 'react'
import { GoTriangleUp } from 'react-icons/go';
import { VscTriangleDown } from 'react-icons/vsc';

const Floors = ({floorQue}) => {
  const floors = [5,4,3,2,1,0]


  const [elevator, setElevator] = React.useState(0);
  const [que, setQue] = React.useState([]);
  let newQue = [];

  const handleGoUp = (floor) => {
    if (elevator < floors.length - 1 && floor === elevator) {
      setElevator(elevator + 1)
    }
  }

  const handleGoDown = (floor) => {
    if (elevator > 0 && elevator === floor) {
      setElevator(elevator - 1)
    }
  }

  const ButtonPushQue = (floor) => {
    if (!newQue.includes(floor) && floor !== elevator) {
      newQue.push(floor)
      newQue.sort((a, b) => a - b);
    }
    console.log("Que:", newQue);
  }

  const GoToFloors = () => {
    if (elevator >= Math.max(...newQue)) {
      newQue.sort((a, b) => b - a);

    } 
    else if (elevator <= Math.max(...newQue)) {
      newQue.sort((a, b) => a - b);
    }
    console.log("newQue:", newQue);
    setQue(newQue);
    floorQue(newQue);
  }

  useEffect(() => {
    if (que.length > 0) {
      setTimeout( () => {
        setElevator(que[0]);
        setQue(que.slice(1));
      }, 1000);
    }
  }, [que])

  return (
    floors.map(floor => (
      <div key={floor}>
        <div className='floor-box'>
          <div className={floor === elevator ? "floors active" : "floors"}>
            <div>
              {floor}
            </div>
            {elevator === floor ? (
              <div className='main-buttons-div'>
                <div className='floor-buttons-div'>
                  {floors.map(floor => 
                    <button className={`floor ${que.includes(floor) ? "selected" : ""}`} 
                            key={floor} 
                            onClick={()=> ButtonPushQue(floor)}>
                      {floor}
                    </button>)}
                </div>
                <div>
                  <button className='go-button' 
                          onClick={()=>GoToFloors()}><GoTriangleUp/><VscTriangleDown/></button>
                </div>
              </div>
            ) : null}
          </div>
          <div className="up-down">
            <button onClick={()=> handleGoUp(floor)}><GoTriangleUp/></button>
            <button onClick={()=> handleGoDown(floor)}><VscTriangleDown/></button>
          </div>
        </div>
      </div>)))
}

export default Floors