import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import ShowQuiz from './components/ShowQuiz'
import QuizContainer from './components/QuizContainer'
import LogIn from './components/LogIn'
import AddQuiz from './components/AddQuiz'


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
