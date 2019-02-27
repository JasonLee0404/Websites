import React, { Component } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { ClearButton } from './components/ClearButton';
import * as math from 'mathjs';
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };
  }

  //ES6 function style. Everytime you click on the row element
  //you want to execute this function to add to the input vaclue
  addToInput = val => {

    //input is part of the application's state
    this.setState({ input: this.state.input + val });
  };



  //so when the button is clicked, the handleEqual function will be executed and
  //then the handleEqual function is called, eval of math object is ran, and input is change
  //through setState()
  handleEqual = () => {

    this.setState( {input: math.eval(this.state.input) } )
  };

  render() {
    return (
      <div className="app">

        <div className="calc-wrapper">

          <Input input={this.state.input}></Input>

          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div> 

          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>X</Button>
          </div> 

          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div> 

          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>

            {/* the special equal sign, handleEqual, {} means running inside */}
            <Button handleClick={ () => this.handleEqual()}>=</Button>


            <Button handleClick={this.addToInput}>-</Button>
          </div> 

          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: "" })}>Clear</ClearButton>

          </div>




        </div>

      </div>
    );
  }
}

export default App;
