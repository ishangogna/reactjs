import React from 'react';
import { Link, NavLink, withRouter} from 'react-router-dom';

//importing navlink and link from react-router-dom for react handling of requests
// so theat they do dont go to server each time. 
//react intercepts a url request and avoids making unecessary request to server.

//Note : Both Link and NavLink work in the same way. They can be used in place of a tags
// to prevent default behaviour of making request to server and reloading page.
//But NavLink also assigns an active class to the current component (helpful in making navbars)

const Navbar = (props) => {
    //to set a timeout to redirect to another component on non-route components.
    // setTimeout(()=> {
    //     props.history.push('/about');
    // },2000)

    return (
        <nav className = 'nav-wrapper red darken-3'>
            <div className = 'container'>
                <a className = 'brand-logo'>My React Website.</a>
                <ul className = 'right'>
                    <li><Link to= '/'>Home</Link></li>
                    <li><NavLink to = '/about'>About Us</NavLink></li>
                    <li><Link to = '/contact'>Contact us</Link></li>
                </ul>
            </div>
        </nav>
    )
}

// export default withRouter(Navbar);
export default Navbar;