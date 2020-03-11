import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { auth } from '../modules/firebase';

const Navi = props => {

    const handleLogOut = e => {
        e.preventDefault();

        auth.signOut()
        .then(() => {
            props.history.push('/')
        });
    }


    return (
        <div>
            <nav class="navbar navbar-light bg-light">
            <Link to="/" className="navbar-brand">Hem</Link>
                 
                           { props.user
                            ? (<NavLink to="/" className="nav-link" onClick={handleLogOut}>Logout</NavLink>)   
                                :
                               (<NavLink to="/create-quiz" className="nav-link">Login</NavLink>)
                           }
                    
                </nav>
            </div>
        
    )
}

export default withRouter(Navi);

