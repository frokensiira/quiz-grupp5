import  React from 'react';
import { Authentication } from '../modules/firebase'


class LogIn extends React.Component {


	state = {
		email: '',
		password: '',
	}

	handleOnChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
    }
    
    // const handleSignOut = e => {
    //     Authentication.signOut()
    //     .then(() => {
    //         // redirect to login page
    //         console.log("Signed out");
    //     });
    // }




	handleSubmit = e => {
        e.preventDefault();
        

        
		Authentication.signInWithEmailAndPassword(this.email, this.password)
		.then(credentials => {
			console.log("Authentication successful!", credentials);
            this.props.history.push('/');
		})
		.catch(err => {
			console.error("Authentication failed!", err);
		})
	}

	render() {
		return (
                <div id="login">
                    <h1 className="text-centerS">Login</h1>

                    <form id="loginForm" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input onChange={this.handleOnChange} type="email" id="email" className="form-control"  />
                        </div>


                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input onChange={this.handleOnChange} type="password" id="password" className="form-control" />
                        </div>
                            <button onCkick={this.handleSubmit} type="submit" className="btn btn-success text-center">Log in</button>
                        
                    </form>
                </div>
		);
	}
}

export default LogIn;
