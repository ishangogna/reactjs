import React from 'react';
import Rainbow from '../../hoc/Rainbow'

const Home = (props) => {
    // To redirect to /contact
    // props.history.push('/contact');
    return(
        <div className = 'container'>
            <h4 className = 'center'>Home</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, eius iusto praesentium nam maxime incidunt, adipisci molestiae numquam hic id, inventore saepe velit fugiat cupiditate? Minima debitis in praesentium cum?</p>
        </div>
    )
}

export default Rainbow(Home);