import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // all variables below
    // const course = 'Half Stack application development'
    // refactor for Exercises 1.1-1.2:
    // const course = 'Half Stack application development'
    // const part1 = 'Fundamentals of React'
    // const exercises1 = 10
    // const part2 = 'Using props to pass data'
    // const exercises2 = 7
    // const part3 = 'State of a component'
    // const exercises3 = 14

    // refactor for Exercises 1.3:
    // const course = 'Half Stack application development'
    // const part1 = {
    //     name: 'Fundamentals of React',
    //     exercises: 10
    // }
    // const part2 = {
    //     name: 'Using props to pass data',
    //     exercises: 7
    // }
    // const part3 = {
    //     name: 'State of a component',
    //     exercises: 14
    // }

    // refactor for Exercises 1.4:
    // const course = 'Half Stack application development'
    // const parts = [
    //     {
    //         name: 'Fundamentals of React',
    //         exercises: 10
    //     },
    //     {
    //         name: 'Using props to pass data',
    //         exercises: 7
    //     },
    //     {
    //         name: 'State of a component',
    //         exercises: 14
    //     }
    // ]

    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    /*  * End of Variables *  */

    // Map ONLY use for 1.4
    // const Parts = parts.map((p, index) =>
    //     <p key={index}>
    //         {p.name} {p.exercises}
    //     </p>
    // )

    // Map ONLY use for 1.5
    const Parts = course.parts.map((p, index) =>
        <p key={index}>
            {p.name} {p.exercises}
        </p>
    )
    // Sum of all exercises (Only use for 1.4)
    // let result  = parts.reduce((total, currentValue) => total + currentValue.exercises, 0)

    // Sum of all exercises (Only use for 1.5)
    let result  = course.parts.reduce((previousValue, currentValue) => previousValue + currentValue.exercises, 0)
    // console.log(result)
    
    // Header component
    const Header = (props) => {
        return (
            // Exercises 1.1-1.4
            // <h1>{props.course}</h1>

            // Exercise 1.5
            <h1>{props.course.name}</h1>
        )
    }

    // component Part for Content
    // eslint-disable-next-line
    const Part = (props) => {
        return (
            <div>
                {/*<p>*/}
                    {/*Part component for Exercises 1.1-1.3*/}
                    {/*{props.part} {props.exercise}*/}
                {/*</p>*/}

                {/* Exercises 1.4-5*/}
                {Parts}
            </div>
        )
    }

    // Content component, and no props needed
    const Content = () => {
        return (
            <div>
                {/*Part for Exercises 1.1-1.2*/}
                {/*<Part part={part1} exercise={exercises1}/>*/}
                {/*<Part part={part2} exercise={exercises2}/>*/}
                {/*<Part part={part3} exercise={exercises3}/>*/}
                {/*End of Exercises 1.1-1.2*/}

                {/*Part for Exercises 1.3*/}
                {/*<Part part={part1.name} exercise={part1.exercises}/>*/}
                {/*<Part part={part2.name} exercise={part2.exercises}/>*/}
                {/*<Part part={part3.name} exercise={part3.exercises}/>*/}

                {/*End of Exercises 1.3*/}

                {/*Part for Exercises 1.4-1.5*/}
                <Part />
            </div>
        )
    }

    // Total sum component
    // eslint-disable-next-line
    const Total = (props) => {
        return (
            <div>
                {/*Exercises 1.1-1.2*/}
                {/*<p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>*/}

                {/*Exercises 1.3*/}
                {/*<p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>*/}

                {/*Exercises 1.4-1.5*/}
                <p>Number of exercises {result}</p>
            </div>
        )
    }
    return (

        // Display all components
        <div>
            {/*Header component for Exercises 1.1-1.5*/}
            <Header course={course}/>

            <Content />

            {/*Total for Exercises 1.1-1.2*/}
            {/*<Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>*/}

            {/*Total for Exercises 1.3*/}
            {/*<Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>*/}

            {/*Total for Exercises 1.4-1.5*/}
            <Total />
        </div>

    )
}

ReactDOM.render(<App/>, document.getElementById('root'))