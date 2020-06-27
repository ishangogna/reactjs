import React from 'react';

//lets say we only want to display the people with age > 22.
//We can either use a basic if statement or javascript's ternary syntax to do so.
//Note : ternary works in the folliwing way :
// (condition) ? (output if condition is true) : (else output)
const Conditional = ({people}) => {
    const peopleList = people.map(person => {
        return person.age > 22 ? (
            <div>
                <h1>This is a conditional. (only age greater than 22 are displayed)</h1>
                <div id = 'name'>{person.name}</div>
                <div id = 'age'>{person.age}</div>
            </div>
        ) : null;
    })
    //Above is same as : 
    // if(person.age > 22){
    //     return ()
    // } else return null;

    return(
        <div className = 'info'>
            {peopleList}
        </div>
    )
}



export default Conditional;