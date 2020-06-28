import React, { Component } from 'react';

class Forms2 extends Component {
    state = {
        name: '',
        age : '',
        id : '',
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            id : Math.random(),
        })
        this.props.addPerson(this.state);
    }
    
    render(){
        return(
            <div className = 'app-form'>
                 <h1>Form to add information using function as props : </h1>
                 <form onSubmit = {this.handleSubmit}>
                     <input onChange = {this.handleChange} type = 'text' placeholder = 'Enter Name' name = 'name' id = 'name' />
                     <input onChange = {this.handleChange} type = 'text' placeholder = 'Enter age' name = 'age' id = 'age' />
                     <button type = 'submit'>Submit</button>
                 </form>
                 
                {this.state.name}
                {this.state.age} 
            </div>
            

        )
    }
}

export default Forms2;


