import React, { useEffect, useState } from 'react'
import Person from "./Components/Person"
import PersonForm from "./Components/PersonForm"
import Filter from "./Components/Filter"
import personService from "./services/persons"
import Notification from "./Components/Notification";

/**
 * @Description: App Component for Exercises 2.6-2.11, 2.15-2.20 The phonebook
 * @author Shy
 * @date 2020/12/19
 */
const App = () => {
    /**
     *  Data parts
     */
        // Initialize the persons Array
    const [persons, setPersons] = useState([])
    
    // [persons] 'name inserting'
    const [nameInsert, setNameInsert] = useState('')
    
    // [persons] 'phone number' inserting
    const [phoneInsert, setPhoneInsert] = useState('')
    
    // 'filter' inserting
    const [filterInsert, setFilterInsert] = useState('')
    
    const [notify, setNotify] = useState('')
    const [notifySuccess, setNotifySuccess] = useState(true)
    
    /**
     * using axios and Effect hook to fetch data
     * from json server
     */
    useEffect(() => {
        personService
        .getAll()
        .then(initialNotes => {
            setPersons(initialNotes)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    /**
     * Now the data is fetched from json-server
     * and given to [persons]
     */
    
    /**
     * End of the data part
     */
    
    /**
     *  handling data,
     *  some functions
     *  or algorithms parts
     */
        // several input textarea (events) handlers
    const filterInsertHandler = (e) => setFilterInsert(e.target.value)
    // function/method for filtering persons
    const filteredPersons = persons.filter(p => p.name.includes(filterInsert))
    
    // and collect the target 'values'
    const nameInsertHandler = (e) => setNameInsert(e.target.value)
    
    const phoneInsertHandler = (e) => setPhoneInsert(e.target.value)
    
    
    const noUploadPerson = () => {
        setNotify(`${nameInsert} is already added to phonebook!`)
        setNotifySuccess(false)
        timeout()
    }
    
    
    const uploadPerson = () => {
        const arrayId = persons.map(p => p.name).indexOf(nameInsert)
        const id = persons[arrayId].id;
        const person = persons.find(p => p.id === id)
        const changedPerson = {...person, number: phoneInsert}
        
        if (window.confirm(`${nameInsert} is already in phonebook, do you want to replace the old number?`)) {
            personService
            .update(id, changedPerson)
            .then(returnedNote => {
                setPersons(persons.map(person => person.id !== id ? person : returnedNote))
                setNotify('Number replaced!')
                setNotifySuccess(true)
                timeout()
            })
            .catch(error => {
                setNotify(`Person '${nameInsert}' was already removed from server`)
                setNotifySuccess(false)
                timeout()
                setPersons(persons.filter(p => p.id !== id))
            })
            initInsert()
        }
    }
    
    // (submit) => give [persons] 'name' and 'number'
    const submitHandler = (e) => {
        const newPerson = {
            name: nameInsert,
            number: phoneInsert
        }
        
        persons.map(p => p.name).includes(nameInsert) ?
            persons.map(p => p.number).includes(phoneInsert) ?
                noUploadPerson()
                :
                uploadPerson()
            :
            personService
            .create(newPerson)
            .then(returnedPersons => {
                setPersons(persons.concat(returnedPersons))
                setNotify(`Added ${nameInsert}`)
                setNotifySuccess(true)
                timeout()
                initInsert()
            })
        
        e.preventDefault()
    }
    
    // delete a person
    const personDelete = (personId) => {
        if (window.confirm("Do you want to delete this person?")) {
            personService.delPerson(personId)
            .catch(error => {
                setNotify(`Delete failed`)
                setNotifySuccess(false)
                timeout()
            })
            window.location.reload()
        }
    }
    
    const timeout =()=>{
        setTimeout(() => {
            setNotify('')
        }, 10000)
    }
    
    const initInsert =()=>{
        setNameInsert('')
        setPhoneInsert('')
    }
    
    /**
     *  End of the data handling part
     */
    
    /**
     * return the rendering
     */
    return (
        <div>
            <h2>Phonebook</h2>
            
            <Notification
                notify={notify}
                notifySuccess={notifySuccess}
            />
            
            <Filter
                fInsert={filterInsert}
                filterInsertHandler={filterInsertHandler}
            />
            
            <h3>add a new person</h3>
            
            <PersonForm
                nInsert={nameInsert}
                pInsert={phoneInsert}
                submitHandler={submitHandler}
                nInsertHandler={nameInsertHandler}
                pInsertHandler={phoneInsertHandler}
                persons={persons}
            />
            
            <h3>Numbers</h3>
            
            {filteredPersons.map((person, i) => (
                <Person
                    key={i}
                    person={person}
                    personDelete={() => personDelete(person.id)}
                />
            ))}
        </div>
    )
    /**
     * Finish the rendering
     */
}
/**
 * Finish App Component
 */
export default App