import React, { Component } from 'react';
import './index.css';
// import TopicBrowser from './components/TopicBrowser/TopicBrowser'
//Topics
import EvenAndOdd from '../src/components/Topics/EvenAndOdd'
import FilterObject from '../src/components/Topics/FilterObject'
import FilterString from '../src/components/Topics/FilterString'
import Palindrome from '../src/components/Topics/Palindrome'
import Sum from '../src/components/Topics/Sum'

class App extends Component {
  render() {
    return (
      <div>
        <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum /> 
      </div>
    )
  }
}

export default App;
