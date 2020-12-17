import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // save clicks of each button to own state
    // const [good, setGood] = useState(0)
    // const [neutral, setNeutral] = useState(0)
    // const [bad, setBad] = useState(0)
    
    // Exercise 1.6
    const [votes, setVotes] = useState({
            good: 0, neutral: 0, bad: 0
        }
    )
    
    // Plus 1 when click good
    const goodClickHandler = () => setVotes({...votes, good: votes.good + 1})
    
    // Plus 1 when click good
    const neutralClickHandler = () => setVotes({...votes, neutral: votes.neutral + 1})
    
    // Plus 1 when click good
    const badClickHandler = () => setVotes({...votes, bad: votes.bad + 1})
    
    // boolean for exercise 1.9
    let isVoted = false
    if (votes.good !== 0 || votes.neutral !== 0 || votes.bad !== 0) isVoted = true
    
    return (
        <div>
            <h2>Give Feedback</h2>
            
            {/* button for Exercises 1.6-1.7*/}
            <button onClick={goodClickHandler}>good</button>
            <button onClick={neutralClickHandler}>neutral</button>
            <button onClick={badClickHandler}>bad</button>
            <h2>Statistics</h2>
            
            {/*Only show data if there is: Exercise 1.9*/}
            {!isVoted ?
                <h4>No feedback given</h4> :
                <Statistics votes={votes}/>
            }
        
        
        </div>
    )
}

// Exercise 1.8
const Statistics = (props) => {
    // Functions for 1.7
    let sum = props.votes.good + props.votes.neutral + props.votes.bad
    let ave = (props.votes.good - props.votes.bad) / sum
    let posit = (props.votes.good / sum) * 100
    return (
        // table format for exercise 1.11
        <table>
            <tbody>
            {/* Destructuring the Statistics*/}
            <Statistic text={'good'} value={props.votes.good}/>
            <Statistic text={'neutral'} value={props.votes.neutral}/>
            <Statistic text={'bad'} value={props.votes.bad}/>
            
            {/*data shown for 1.7*/}
            <tr>
                <td>all</td>
                <td>{sum}</td>
            </tr>
            <tr>
                <td>average</td>
                <td>{ave}</td>
            </tr>
            <tr>
                <td>positive</td>
                <td>{posit}%</td>
            </tr>
            </tbody>
        </table>
    )
}

// Statistic component for exercise 1.10
const Statistic = (props) => {
    
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    )
}

ReactDOM.render(<App/>,
    document.getElementById('root')
)