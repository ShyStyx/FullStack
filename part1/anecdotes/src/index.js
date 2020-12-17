import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({anecdotes}) => {
    const [selected, setSelected] = useState(0)
    
    // *****exercise 11.13*****
    // initialize the array
    const points = Array(6).fill(0)
    //
    const [point, setPoint] = useState(points)
    const voteHandler = () => setPoint({...point, [selected]: point[selected] + 1})
    
    // console.log(selected + ' ' + point[selected])
    
    // *****exercise 1.12*****
    // random(0-1)* (length-1) (0-1)*(6-1)==>0-5
    const selectHandler = () => setSelected(Math.floor(Math.random() * (anecdotes.length - 1)))
    // console.log(selected)
    
    // exercise 1.14
    const most = Math.max.apply(null, Object.values(point))
    // function to find most voted index
    const mostVoted = () => {
        /*  after counter, point becomes an object
            switch to array to continue */
        const index = Object.values(point).indexOf(most)
        
        // console.log(Object.values(point))
        // console.log('most: ' + most + ' mostVote: ' + index)
        
        // return the certain anecdotes
        return anecdotes[index]
    }
    
    return (
        <div>
            <h2>Anecdotes of the day</h2>
            <p>{anecdotes[selected]}</p>
            <p>has {point[selected]} votes</p>
            <button onClick={voteHandler}>vote</button>
            <button onClick={selectHandler}>next anecdote</button>
            <h2>Anecdotes with most votes</h2>
            <p>{mostVoted()}</p>
            <p>has {most} votes</p>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes}/>,
    document.getElementById('root')
)
