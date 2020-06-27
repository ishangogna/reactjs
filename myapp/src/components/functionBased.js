//There are two kinds of components : ones which need a state , ones which dont
// THe ones which need a state, have to made using classed based components and are called 'Containers'
//The ones which dont need a state, can be made with functions, and are called UI Components
//or 'Stateless' components. They only care about dispaying info received as props from parent component
//and therefore do not need a state of their own.

//you dont need to import component since you're not extending component in function based.
import React from 'react';

//or const Stateless = ({people}) => {}, if you want to deconstruct the props in () itself.
const Stateless = (props) => {
    //note how you dont need to say this. anymore coz you're not working with an instance of a class here.
    const { people } = props;
    const peopleList = people.map(person => {
        return (
            <div id = 'info' key = {person.id}>
                <div id = 'name'>{person.name}</div>
                <div id = 'age'>{person.age}</div>
            </div>
        )
    })

    return(
        <div>
            {peopleList}
        </div>
    )

}

export default Stateless;