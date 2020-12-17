import React from 'react';
import ReactDOM from 'react-dom';

/*
    The structure of course-info2 should be like this
    App
      Course
        Header
        Content
          Part
          Part
          ...
      ...
    ...
    
    Exercises 2.1-2.5
*/

const Course =({courses}) =>{
    // courses is an Array, we can use map()
    // if we use course before
    // we need add these several lines
    // const { name, parts } = course
    // <Header name={course.name} />
    // <Content parts={course.parts}/>
    const coursesMap = courses.map((course, i) =>
        <div key={i}>
            <Header name={course.name} />
            <Content parts={course.parts}/>
        </div>
    )
    return(
        <div>
            {coursesMap}
        </div>
    )
    
}

const Header = ({ name }) => {
    return (
        <h2>{name}</h2>
    )
}

const Content = ({ parts }) => {
    // console.log(parts)
    // No matter how many parts the course has
    // they all will be shown by this map()
    const partsMap = parts.map((part, i)=>
        <div key={i}>
            <Part part={part}/>
        </div>
    )
    
    // calculating the total amount of exercises
    const sum  = parts.reduce((previousValue, currentValue) => previousValue + currentValue.exercises, 0)
    
    return (
        <div>
            {partsMap}
            <p>total {sum} exercises</p>
        </div>
    )
}

const Part = ({part}) => {
    
    return (
        <div>
            <p>{part.name} {part.exercises}</p>
        </div>
    )
}

const App = () => {
    // the new courses is an Array!!
    // If using course Object, we cannot use map straightly for course Object
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]
    
    return (
        <div>
            <Course courses={courses} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))