import React, { useState,useEffect } from 'react'

const Interview = () => {
    const [count,setcount]=useState(0);
const onclickHandler =()=>{
    setcount(count => count +1)
    console.log("button click");
}

useEffect(()=>{
    console.log(`button click conut:${count}`)
},[count])

console.log("app render")
  return (
    <div>
    <button onClick={onclickHandler}>button</button>
    </div>
  );
};

export default Interview;

