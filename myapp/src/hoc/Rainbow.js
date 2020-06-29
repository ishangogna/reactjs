//This is a custom higher order component (function based) which when wrapped around another component,
// will give it a random font-color.
import React from 'react';


const Rainbow = (WrappedComponent) => {
    var colors = ['red','blue','green','black','green'];
    var randomColor = colors[Math.floor(Math.random()*5)];
    var className = randomColor + '-text'
    
    //Need to make sure that the component gets the props. So always do this:
    //to pass props to the component, use spread operator.
    return(props) => {
        return(
        <div className ={className}>
            <WrappedComponent {...props}/>

        </div>
    )}
}

export default Rainbow;