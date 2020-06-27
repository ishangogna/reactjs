//make sure you import { Component }
// else use React.component instead of Component

import React, { Component } from 'react';
import NestedComponent from './nestedComponent';
import PropsComponent from './props'
import PropsComponent2 from './props2'

class App extends Component{
  render(){
    return(
      <div>
          <h1>Hello from react.</h1>
          <NestedComponent />

          <PropsComponent name = 'Ishan' age = '22'/>

          <PropsComponent2 name = 'Destructured' age = 'Destructured' />
      </div>
      
      
    )
  }
}

//export this app so it can be imported elsewhere.
export default App;
