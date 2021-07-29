import React, { Component } from "react";

class Filter extends Component {

    changeFilter = (event) => {
        console.log(event)
        // this.props.onChangeFilter()
        //
    }

    render() {
        return (
            <label>
                Find contacts by name
                <input
                    type="text"
                    value={this.props.state.filter}
                    onChange={this.changeFilter}
                
                
                />
                    

                
            </label>            
        )        
    }

   
}

 export default Filter;