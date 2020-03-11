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
        <nav id="navigation" className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container">


                
                
                
                <Link to="/" className="navbar-brand">Hem</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            
                        </li>
                        
                        
                        {
                            props.user
                            ? (<li className="nav-item">
                                    <NavLink to="/" className="nav-link" onClick={handleLogOut}>Logout</NavLink>    
                                </li>)
                                :
                                (<li className="nav-item">
                                <NavLink to="/create-quiz" className="nav-link">Login</NavLink>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Navi);

