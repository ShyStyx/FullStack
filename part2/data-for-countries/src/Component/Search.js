import React, { Component } from 'react';

/**
 * @Description: Search Component
 * @author Shy
 * @date 2020/12/19 
*/
class Search extends Component {
    render () {
        
        return (
            <div>
                <p>fill countries
                    <input
                           value={this.props.search}
                           onChange={(e)=>this.props.searchHandler(e)}
                    />
                </p>
            </div>
        )
    }
}

/**
 * End of Search Component
 */
export default Search