import React from 'react';
<<<<<<< HEAD
import AddQuiz from './modules/AddQuiz';
import QuizItem from './components/QuizItem'
import { db } from './modules/firebase';
// import { Authentication } from './modules/firebase';
import LogIn from './components/LogIn'

=======
import AddQuiz from './components/AddQuiz';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom'
import ShowQuiz from './components/ShowQuiz'
import QuizContainer from './components/QuizContainer'
>>>>>>> master


class App extends React.Component {

  

  render() {

   

    return (
      <BrowserRouter>
        <div className="App">

          <div className="py-3 bg-white text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-3 offset-md-8">
                <Link to="create-quiz" className="btn btn-primary btn-lg">Skapa eget quiz</Link>
                </div>
                <div className="col-md-6 offset-md-3">
                  <h2 className="text-primary display-3 my-4">Quiz</h2>
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </div>

        <div className="quiz py-4 bg-primary">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 mt-5">
            <LogIn />
            {quizItem}
              <AddQuiz /> 
            </div>
          </div>
        </div>
        
      </div> 
=======

          
>>>>>>> master

          <Switch>
            <Route exact path='/' component={QuizContainer}/>
            <Route path='/quiz/:id' component={ShowQuiz}/>
            <Route path='/create-quiz' component={AddQuiz}/>
          </Switch>
          
        </div> 
      </BrowserRouter> 

    );

  }

}

export default App;
