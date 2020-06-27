//make sure you import { Component }
// else use React.component instead of Component

import React, { Component } from 'react';
import NestedComponent from './nestedComponent';
class App extends Component{
  render(){
    return(
      <div>
          <h1>Hello from react.</h1>
          <NestedComponent />
      </div>
      
      
    )
  }
}

//export this app so it can be imported elsewhere.
export default App;
