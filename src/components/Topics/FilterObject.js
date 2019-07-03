import React, {Component} from 'react';

export default class FilterObject extends Component {
   constructor() {
       super()
       this.state = { 
         person: [
            {
              name: 'Elizabeth', 
              age: 20, 
              hobby: 'Dancing'
            },
            {
              name: 'Jane',
              age: 22,
              hairColor: 'blonde'
            },
            {
              name: 'Lydia',
              hobby: 'Flirting'
            }
         ],
         userInput: '',
         filteredArray: [] 
    }
  }
    
    handleChange(val) {
        this.setState({ userInput: val});
    }

    filteredArray(prop) {
        let person = this.state.person
        let filteredArray = []

        for(let i =0; i<person.length; i++) {
            if(person[i].hasOwnProperty(prop)) {
                filteredArray.push(person[i])
            }
        }
        this.setState({ filteredArray: filteredArray})
    }

    
    render() {
        return (
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">Original:  { JSON.stringify(this.state.person, null, 10) }</span>
            <input className = "inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
            <button className = "confirmationButton" onClick={() =>this.filteredArray(this.state.userInput) }>Filter</button>
            <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray, null, 10)} </span>
        </div>
        )
    } 
}