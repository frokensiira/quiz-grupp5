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
