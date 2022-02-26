import React from 'react'


const Part = (props) => {
  
    console.log(props)

    const {part,exercise} = props;

    return(
      <p>{part} {exercise}</p>
    )
  }

export default Part