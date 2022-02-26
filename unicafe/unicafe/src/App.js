
import { useEffect, useState } from 'react'

const Statistics = (props) => {

  return (
  <>
  
      <table>
        <thead>
          <tr>
            <th>
            <h1>Statistics</h1>
            </th>
          </tr>
        </thead>
      <tbody>
          <tr>
             <StatisticLine text="Good" value={props.good}>Good</StatisticLine>
          </tr>
          <tr>
             <StatisticLine text="Neutral" value={props.neutral}>Neutral</StatisticLine>
          </tr>
      <tr>
      <StatisticLine text="Bad" value={props.bad}>Bad</StatisticLine>
      </tr>
       <tr>
       <StatisticLine text="Total" value={props.total}>Total</StatisticLine>
       </tr>
        <tr>
        <StatisticLine text="Average" value={isNaN(props.average) ? 0 : props.average}>Average</StatisticLine>
        </tr>
        <tr>
        <StatisticLine text="Positive" value={isNaN(props.positive)? 0 : props.positive}>positive</StatisticLine>
        </tr>  
      </tbody>
      </table>
   </>
  )
}


const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <>
    <td>{props.text}</td>
    <td>{props.value}</td>
    </>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total,setTotal] = useState(0)
  const [average,setAverage] =useState(0)
  const [positive,setPositive] =useState(0)


  const handleClick = (e) => {
    if(e.target.innerHTML === "Good"){
      setGood(good+1);
    } else if (e.target.innerHTML === "Neutral"){
      setNeutral(neutral+1); 
    } else {
      setBad(bad+1);
    }
    setTotal(total+1);
  }

  useEffect(()=>{
    setAverage(((good - bad) / total).toFixed(2));
    setPositive(((good / total) * 100).toFixed(2));
  },[total]);

  return (
    <div>
      <h1>Give feedback</h1>
        <Button onClick={(e) => handleClick(e)} text="Good">Good</Button>
        <Button onClick={(e) => handleClick(e)} text="Neutral">Neutral</Button>
        <Button onClick={(e) => handleClick(e)} text="Bad">Bad</Button>
        {
          total === 0 ? <p>No feedback given</p> 
          : <Statistics good={good} bad={bad} neutral={neutral} total={total} average={average} positive={positive}/>
        }
        
    </div>
  )
}

export default App