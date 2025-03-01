// // task1:
// import React from 'react'; 
// interface GreetingProps { name: string; }

// const Greeting :React.FC<GreetingProps>= ({ name }) => { 
// return <div>Hello, {name}!</div>;
//  };
//  export default Greeting;


// task2:
import React, { Component, JSX } from 'react'; 
class Counter extends Component { 
state = {
 count: 0
 }; 
increment = () => {
 this.setState({ count: this.state.count + 1 }); 
}; 
render(): JSX.Element { 
return ( <div> 
<p>Count: {this.state.count}</p> 
<button onClick={this.increment}>Increment</button> 
</div> );
 }
 } 
export default Counter;