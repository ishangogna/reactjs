//make sure you import { Component }
// else use React.component instead of Component

import React, { Component } from 'react';
import NestedComponent from './components/nestedComponent';
import PropsComponent from './components/props'
import PropsComponent2 from './components/props2'
import OutputList from './components/outputList'
import Stateless from './components/functionBased'
import Conditional from './components/conditionalOutput'
import Forms2 from './components/forms2'
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

  //passing Function as prop
  //This function takes person as argument and is passed on as props to forms2
  //forms2 invokes it in the handleSubmit, passing its state as parameter
  //We therefore have access to form2's state as person now.
  addPerson = (person) => {
    //this will log the state of forms2
    console.log(person);
    
    //using spread operator to concatenate the new person object from forms2 with the people
    //on this component.
    let personList = [...this.state.People,person];
    //this will output the sttate received from forms2 + People
    console.log(personList);

    this.setState({
      People : personList,
    })
    console.log('Update people : ' + this.state.People);
  }

  //function as props to delete the person based on its id.
  deletePerson = (id) => {
    //updatedPeople filters People and returns only those persons whose id is not equal
    // to the id given by outputList when the function is passed down as props.
    let updatedPeople = this.state.People.filter(person => {
      return person.id !== id;
      
    })
    this.setState({
      People: updatedPeople,
    })
  } 

  //Lifecycle Methods : 
  //1. ComponentDidMount : fires when component is mounted to the DOM.
  componentDidMount(){
    console.log('component mounted.');
  }

  //2.componentDidUpdate : fires when component updates, ie props change or state.
  // takes 2 parameters : prevProps and prevState to compare with currentProps and currentState
  componentDidUpdate(prevProps,prevState){
    console.log('component updated.');
    console.log(prevProps,prevState);
  }
  render(){
    //IMP!! spread operator returns all the diff components of an iteratable.
    // You can then do [...this.state.People,anotherObject] to add another object to People.
    console.log(...this.state.People);
    return(
      <div>
          <h1>Hello from react.</h1>
          {/* <NestedComponent />

          <PropsComponent name = 'Ishan' age = '22'/>

          <PropsComponent2 name = 'Destructured' age = 'Destructured' /> */}

          <OutputList deletePerson = {this.deletePerson} people = {this.state.People} />
          

          {/* <Stateless people = {this.state.People}  />

          <Conditional people = {this.state.People}/> */}

          <Forms2 addPerson = {this.addPerson}/>
          
      </div>
      
      
    )
  }
}

//export this app so it can be imported elsewhere.
export default App;
