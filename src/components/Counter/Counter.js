import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  
  // state = {
  //   value: 5,
  // };

  handleIncrement() {
    console.log(' Click + 1')
  };

  handleDecrement () {
    console.log(' Click - 1')
  };
  
  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">0</span>
        <div className="Counter__controls">
          <button className="button" onClick={this.handleIncrement}>+ 1</button>    
          <button className="button" onClick={this.handleDecrement}>- 1</button>  
        </div>  
      </div>
    )
  }
}
 
export default Counter;