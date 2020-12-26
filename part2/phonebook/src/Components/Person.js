import React from 'react'

/**
 * Exercises 2.6-2.11 The phonebook
 * Person Component
 */
 
const Person =({person, personDelete}) => {
       
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                {person.name}
                            </td>
                            <td>
                                {person.number}
                            </td>
                            <td>
                                <button onClick={personDelete}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    
}

/**
 * End of Person Component
 */
export default Person