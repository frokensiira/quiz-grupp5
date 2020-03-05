import React from 'react'
import QuizItem from './QuizItem'
import { db } from '../modules/firebase'

class QuizContainer extends React.Component {
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

        return(
            <div className="quiz py-4 bg-primary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 mt-5">
                        {quizItem}
                    </div>
                </div>
          </div>
        )
    }
}

export default QuizContainer