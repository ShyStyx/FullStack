import React, { Component } from 'react'

/**
 * Exercises 2.6-2.11 The phonebook
 * PersonForm Component
 */
class PersonForm extends Component {
    
    render () {
        /**
         * return form to App Component
         */
        return (
            <div>
                <form onSubmit={(e)=>this.props.submitHandler(e)}>
                    <div>
                        name:
                        <input
                            value={this.props.nInsert}
                            onChange={(e)=>this.props.nInsertHandler(e)}
                        />
                    </div>
                    <div>
                        number:
                        <input
                            value={this.props.pInsert}
                            onChange={(e)=>this.props.pInsertHandler(e)}
                        />
                    </div>
                    
                    {/*<div>debug: {this.props.nInsert}</div>*/}
                    <div>
                        <button type="submit">add</button>
                    </div>
                </form>
            </div>
        )
        
    }
    /**
     * End of rendering
     */
}

/**
 * End of PersonForm Component
 */
export default PersonForm