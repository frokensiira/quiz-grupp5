import  React from 'react';
import { auth } from '../modules/firebase'
import AddQuiz from './AddQuiz'




class LogIn extends React.Component {

    state = {
		email: '',
		password: '',
	}


    /*Skapa Konto/ Sign up*/
    signUp() {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        auth.createUserWithEmailAndPassword(email, password)
          .then((users) => {
            console.log('Successfully Signed Up');
            this.setState ({
                user: {
                    email: users.email,
                }
                
            })
            console.log (this.state)
          })
          .catch((err) => {
            alert('Error: ' + err.toString());
          })
      }
    /*Loga in*/
      login() {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
       auth.signInWithEmailAndPassword(email, password)
          .then((masssege) => {
            console.log('Successfully Logged In', (email));
            this.props.history.push('/');
          })
          .catch((err) => {
            console.log('Error: ' + err.toString());
          })
      }
      onSubmit = (e) =>{
          
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
            
          </div>
        )
      }
    }

export default LogIn;
