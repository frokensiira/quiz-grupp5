import React from 'react';
import AddQuiz from './modules/AddQuiz';
import QuizItem from './components/QuizItem'
import { db } from './modules/firebase'



class App extends React.Component {

  state = {
    quizes: [],
  }

  getQuiz = () => {
    db.collection("quizes").get().then((querySnapshot) => {
      const quizes = [];
      querySnapshot.forEach((doc) => {
          quizes.push({
            titel:doc.data().titel,
            description: doc.data().description,
          });
      });
      console.log('this is our quiz',quizes)
      
      this.setState({
        quizes:quizes
      })
      
    });
  }
  
    componentDidMount() {
      this.getQuiz()
    }

  render() {

    const quizItem = this.state.quizes.map(quizItem =>{
      return (
        <QuizItem
          quiz={quizItem}
          key={quizItem.id}
        />
      )
    })

    return (
      <div className="App">

        
       
      


        <div className="py-3 bg-white text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-3 offset-md-8">
                <button className="btn btn-primary btn-lg ">Skapa eget quiz</button>
              </div>
              <div className="col-md-6 offset-md-3">
                <h2 className="text-primary display-3 my-4">Quiz</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="quiz py-4 bg-primary">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 mt-5">

            {quizItem}
              <AddQuiz /> 
            </div>
          </div>
        </div>
        
      </div> 


    );

  }

}

export default App;
