import React from 'react'
import { db } from '../modules/firebase'

class Quiz extends React.Component {

  state = {
    quizes: [],
  }

  getQuiz = () => {
    db.collection("quizes").get().then((querySnapshot) => {

      const quizes = [];

      querySnapshot.forEach((doc) => {
          quizes.push({
            titel:doc.data().titel,
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
        
      return (
          <div className="quiz">
              <h1> Hej filip </h1>
          </div>
      )
  
    }
  
  }
  
  export default Quiz;
  