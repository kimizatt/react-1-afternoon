import React, {Component} from 'react';

export default class FilterString extends Component {
    constructor () {
        super()
        this.state = {
            items: ['dog', 'apples', 'tree', 'ant', 'donut', 'dragon', 'timer', 'kite'],
            userInput: '',
            filteredItems: []
        }
    }

    handleChange(val) {
        this.setState ({userInput: val})   
    }

    filterItems(userInput) {
        let items = this.state.items
        let filteredItems = []
        
        for(let i = 0; i<items.length; i++) {
            if(items[i].includes(userInput) ) {
                filteredItems.push(items[i])
            }
        }
        this.setState({filteredItems: filteredItems})
    }
 
    render() {
        return (
        <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText"> Name: {JSON.stringify(this.state.items, null, 10)}</span>
            <input className="inputLine" onChange = {(e) => this.handleChange(e.target.value)} />
            <button className= "confirmationButton" onClick={() => this.filterItems(this.state.userInput) }> Filter </button>
            <span className= "resultBox FilterStringRB"> Filtered Names: {JSON.stringify(this.state.filteredItems)}</span>
        </div>
        )
    } 
}