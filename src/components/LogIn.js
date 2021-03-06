import  React from 'react';
import { auth } from '../modules/firebase'

class LogIn extends React.Component {

    state = {
		email: '',
		password: '',
	}

	componentDidMount() {
		auth.onAuthStateChanged((user) => {
			if (user) {
			this.setState({ 
				user: {
							email: user.email,
						}
				});
			} else {
			this.setState({ user: null });
			}
		})
	}

    // Skapa Konto/ Sign up
    signUp = e => {
		e.preventDefault();
		const email = document.querySelector('#email').value;
		const password = document.querySelector('#password').value;
		auth.createUserWithEmailAndPassword(email, password)
			.then((user) => {
			console.log('Successfully Signed Up', user);
			this.setState({ 
				user: {
				email: user.email,
				}
				})
			})
			.catch((err) => {
			alert('Error: ' + err.toString());
			})
	}
	
	login = e => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
       auth.signInWithEmailAndPassword(email, password)
          .then((user) => {
            console.log('Successfully Logged In', user);
            this.props.history.push('./add-quiz');
            })
            
          
          .catch((err) => {
            alert('Error: ' + err.toString());
          })
      }

      render() {
        return (
			<div className="form-group">
				<h2>{this.state.users}</h2>
				<form onSubmit={this.login}>
				<div>Email</div>
				<input id="email" className="form-control" placeholder="Enter Email.." type="text"/>
			
			
				<div>Password</div>
				<input id="password" className="form-control" placeholder="Enter Password.." type="password"/>
			
			<button className="btn btn-primary btn-block">Login</button>
			</form>

			<button className="btn btn-success btn-block"  onClick={this.signUp}>Sign Up</button>

				<div className="App">
						{ this.state.user ? ( this.props.history.push('/add-quiz') ) : ( null ) }
				</div>

			</div>
        )
      }
    }

export default LogIn;