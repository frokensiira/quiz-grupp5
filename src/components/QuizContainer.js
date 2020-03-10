import React from 'react'
import { db } from '../modules/firebase'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'

class QuizContainer extends React.Component {

    state = {
        quizes: [],
      }
    
      getQuiz = () => {
        db.collection("quizes").get().then((snapshot) => {

          //console.log('snapshot from QuizContainer is', snapshot);
          const quizes = [];
          snapshot.forEach((doc) => {
            //console.log('doc.data is', doc.data());
            const quiz = {
              id: doc.id,
              titel:doc.data().name,
              answers: doc.data().quiz.quizItems,
            }
            quizes.push(quiz)
          });        
          this.setState({
            quizes: quizes,
          })
          
        });
      }
      
        componentDidMount() {
          this.getQuiz()
        }
          
    render() {
        
        const quiz = this.state.quizes.map((quiz,i) =>{
          //console.log('quiz.answers is', quiz.answers.length);
            return (
              <div className="col mb-4 border-info" key={i}>
                <div className="card h-100">
                <img src={logo} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{quiz.titel}</h5>
                    <p className="card-text">{quiz.description}</p>
                    <Link to={'/quiz/'+ quiz.id} className="btn btn-primary btn-lg mb-4">Starta quiz</Link>
                    <div className="card-footer bg-transparent border-primary">{quiz.answers.length} frågor</div>
                </div>
            </div>
          </div>
          )
        })

        return(
          <div>
            <div className="py-3 bg-white text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 offset-md-8">
                    <Link to="create-quiz" className="btn btn-primary btn-lg">Skapa eget quiz</Link>
                  </div>
                  <div className="col-md-6 offset-md-3">
                    <h2 className="text-primary display-3 my-4">Q5</h2>
                  </div>
                </div>
            </div>
          </div>
          <div className="quiz py-4 bg-primary">
              <div className="container">
                  <div className="row row-cols-1 row-cols-md-2 mt-5">
                      {quiz}
                  </div>
              </div>
            </div>
        </div>
        )
    }
}

export default QuizContainer