import React from 'react'
//import QuizItem from './QuizItem'
import { db } from '../modules/firebase'
import { Link } from 'react-router-dom'
//import football from '../assets/football.jpg'
import logo from '../assets/logo.jpg'




class QuizContainer extends React.Component {
    state = {
        quizes: [],
      }
    
      getQuiz = () => {
        db.collection("quizes").get().then((snapshot) => {
          const quizes = [];
          snapshot.forEach((doc) => {
            const quizName = {
              id: doc.id,
              titel:doc.data().titel,
              description: doc.data().description,
            }
              quizes.push(quizName)
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

        const quizItem = this.state.quizes.map(quizItem =>{
            return (
              <div className="col mb-4 border-info">
                <div className="card h-100">
                <img src={logo} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{quizItem.titel}</h5>
                    <p className="card-text">{quizItem.description}</p>
                    <button className="btn btn-primary mb-4"><Link to={'/quiz/'+ quizItem.id} className="btn btn-primary mb-4">Starta quiz</Link></button>
                    <div className="card-footer bg-transparent border-primary">10 frågor</div>
                </div>
            </div>
          </div>
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