//make sure you import { Component }
// else use React.component instead of Component

import React, { Component } from 'react';

class NestedComponent extends Component {

    render(){

        return(
            <div id = 'info'>
                <div id = 'name'>Name : Ishan</div>
                <div id = 'age'> Age : 22</div>
            </div>
        )
    }
    
}

export default NestedComponent;