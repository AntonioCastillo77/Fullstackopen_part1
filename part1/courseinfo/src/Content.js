import React from 'react'
import Part from './Part'


//.We should always write props in curly braces while susing in child components
const Content = ({parts}) =>  {

console.log(parts)

  return (
     <>
       {
        parts.map(part => <Part part={part.name} exercise={part.exercises}/>)
       }
    </>
  )
}

export default Content;