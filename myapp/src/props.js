import React, { Component } from 'react';

class PropsComponent extends Component {

    render(){
        //all the props are recieved in the props object from parent component.
        // in this case, props : {name:'Ishan', age: 22}
        console.log(this.props)
        return (
            <div>
                <div id = 'name'>
                    Name : {this.props.name}
                </div>
                <div id = 'age'>
                    Age : {this.props.age}
                </div>
            </div>
        )
    }
}

export default PropsComponent;