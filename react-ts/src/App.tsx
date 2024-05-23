import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByValue, stateType,decrement } from "./redus";
// import {incrementByValue} from "./redus";
function App() {
  const[val,setVal]=useState<number>(0);
  const dispatch =useDispatch();
  const count=useSelector((state:stateType)=>state.count)
  const incrementByValueHandler = () => {
    setVal(0);
    dispatch(incrementByValue(val))
  }
  const incrementHandler=()=>{
    dispatch(increment())
  }
  const decrementHandler=()=>{
    dispatch(decrement())
  }
  return (
    <>
      <div>
        <h1>toolkit</h1>
        <h2> Count:{count}</h2>
        <button onClick={incrementHandler}>+</button>
        <button onClick={decrementHandler}>-</button>
        <input type="number" value={val} onChange={(e)=>setVal(Number(e.target.value))} />
        <button disabled={val<0} onClick={incrementByValueHandler}>Add</button>
      </div>
    </>
  )
}

export default App
