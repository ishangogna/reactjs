//make sure you import { Component }
// else use React.component instead of Component

import React, { Component } from 'react';
import NestedComponent from './components/nestedComponent';
import PropsComponent from './components/props'
import PropsComponent2 from './components/props2'
import OutputList from './components/outputList'
import Stateless from './components/functionBased'
import Conditional from './components/conditionalOutput'
class App extends Component{

  //This time we are going to send a list of people to the child component as props.
  //The child component will take this list and render divs accordingly.
  //So we are storing people array in the state to pass on as props.
  state = {
    People : [
      {name : 'Ishan', age: 23, id: 1},
      {name : 'xyz', age : 22, id: 2}
    ]
  }
  render(){
    return(
      <div>
          <h1>Hello from react.</h1>
          <NestedComponent />

          <PropsComponent name = 'Ishan' age = '22'/>

          <PropsComponent2 name = 'Destructured' age = 'Destructured' />

          <OutputList people = {this.state.People} />

          <Stateless people = {this.state.People}  />

          <Conditional people = {this.state.People}/>
      </div>
      
      
    )
  }
}

//export this app so it can be imported elsewhere.
export default App;
