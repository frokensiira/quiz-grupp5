import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import ShowQuiz from './components/ShowQuiz'
import QuizContainer from './components/QuizContainer'
import LogIn from './components/LogIn'
import AddQuiz from './components/AddQuiz'
import {auth} from './modules/firebase'
import Navi from './components/Navigation'

class App extends React.Component {

  

  state = {
    user: null,
  }

  componentDidMount() {
    // save reference to onAuthStateChanged listener so we can unsubscribe from events when unmounted to prevent memory leaks
    this.onAuthStateChangedListener = auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user: {
            email: user.email,
          },
          currentUser: auth.currentUser,
        });
      } else {
        this.setState({
          user: null,
          currentUser: auth.currentUser,
        });
      }
    });
  }

  componentWillUnmount() {
  
    this.onAuthStateChangedListener();
  }





  render() {

   

    return (
      <BrowserRouter>
        <div className="App">

          <Navi user={this.state.user} />

          {
            this.state.user
            ? (<p className="username">Welcome Back! {this.state.user.email}!</p>)
            : (<p className="username">No one is logged in.</p>)
          }      

          <div className="py-3 bg-white text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-3 offset-md-8">
               
                </div>
                <div className="col-md-6 offset-md-3">
                  
                </div>
              </div>
            </div>
          </div>

        
          <Route exact path='/' component={QuizContainer}/>
          <Route path='/quiz/:id' component={ShowQuiz}/>
          <Route path='/create-quiz' component={LogIn}/>
          <Route path='/add-quiz' component={AddQuiz}/>
    
          
        </div> 
      </BrowserRouter> 

    );

  }

}

export default App;

