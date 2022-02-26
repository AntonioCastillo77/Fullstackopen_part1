import React from 'react'

function Total({parts}) {

  let sum =0;
  parts.forEach((element) => {
     sum = sum + element.exercises; 
  });

  return (
    <p>Number of exercises {sum} </p>
  )
}

export default Total;