import React, { Component } from 'react';

//This component takes the list as props from app.js(parent component),
//Destructures the props and stores them in 'people'
//We then make a peopleList which maps every person to return a template containing name/age
//and Finally pass the peopleList onto the 'return' function to render out the JSX.
class OutputList extends Component {
    render(){
        console.log('List props : ' + this.props);
        const { people } = this.props;
        const peopleList = people.map(person => {
            return (
                <div>
                <div id = 'name'>
                    {person.name}
                </div>
                <div id = 'age'>
                    {person.age}
                </div>
            </div>
            )
        })
        return(
            <div>
                {peopleList}
            </div>
           
        )
    }
}

export default OutputList;