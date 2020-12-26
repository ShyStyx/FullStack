import React, { Component } from 'react'

/**
 * Exercises 2.6-2.11 The phonebook
 * Filter Component
 */
class Filter extends Component {
    render () {
        return (
            <div>
                filter:
                <input
                    value={this.props.fInsert}
                    onChange={(e)=>this.props.filterInsertHandler(e)}
                />
            </div>
        )
    }
}

/**
 * End of Filter Component
 */
export default Filter