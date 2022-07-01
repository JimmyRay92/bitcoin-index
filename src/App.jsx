import { useState } from 'react'

function ShowCount({count}){
  return <p>You have clicked {count} times! </p>
}

function ShowClick({click}){
  return <p>You have clicked {click} times! </p>
}

function App() {
  let [count, setCount] = useState(0)
  let [click, setClick] = useState(0)
  // function updateCount() {
  //   setCount(count+1)
  // }
  function updateClick(){
    setClick(click+1)
  }
  return (
    <>
      <h1>State</h1>
      <ShowCount count = {count} />
      <ShowClick click = {click} />
      <p>You have clicked {count}</p>
      <p>You have clicked {click}</p>
      <button onClick={()=>setCount(count+1)}>Click me</button>
      <button onClick={updateClick}>click</button>
    </>

  )
}

export default App
