import React, { Component } from 'react';


class PropsComponent2 extends Component {    
    render(){
        
        //This is another way of retrieving info from props.
        //It is called DESTRUCTURING the prop.
        // name of prop will go to name, age of prop will go to age.
        const { name, age}  = this.props;
        return(
            <div id = 'info'>
                <div id = 'name'>
                    Name : {name}
                </div>
                <div id = 'age'>
                    Age : {age}
                </div>
            </div>
            
        )
    }
}

export default PropsComponent2;