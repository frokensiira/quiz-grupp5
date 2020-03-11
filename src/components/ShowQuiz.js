import React from 'react'
import { db } from '../modules/firebase';
import ShowQuestion from './ShowQuestion';
import Header from './Header'



class ShowQuiz extends React.Component{
	state = {
		  id: '',
		  title: '',
		  quizItems: [],
	  }
  
	  componentDidMount() {
		  this.getQuiz()
	  }

	  handleGuessedAnswers = (guessedAnswer, question) => {

		const newQuizItems = [...this.state.quizItems];

		const guessedQuestion = newQuizItems.find(quizItem => {
			return quizItem.id === question
		})

		if(guessedAnswer.value === true){
			guessedQuestion.correctAnswer = true;
		} else {
			guessedQuestion.correctAnswer = false;
		}

		console.log('is my question correct?', guessedQuestion.correctAnswer);

		this.setState({
			quizItems: newQuizItems
		})

    }
  
	  sendQuiz = (e) =>{
		  
		e.preventDefault();

		const correctAnswers = this.state.quizItems.filter(quizItem => quizItem.correctAnswer === true)

		console.log('my correct answers are:', correctAnswers);

		const points = correctAnswers.map(correctAnswer => correctAnswer.points)

		console.log('My pointsarray is', points);

		const totalPoints = points.reduce((acc, curr) => {
			return acc += Number(curr)
		}, 0)
	
		console.log('my total points are', totalPoints);
	  }


  
	  getQuiz = () => {
		  db.collection("quizes").doc(this.props.match.params.id).get()
		  .then((response) => {

			  const quizItems = response.data().quiz.quizItems
			  //randomize question 
			  //quizItems.sort(function (a, b) { return 0.5 - Math.random() })

			  this.setState({
				  id: response.id,
				  title: response.data().name,
				  quizItems
			  })
		  }).catch(err => {
			  console.error(err);
		  });
	  }
  
	  render() {   
			  
			  const questionList = this.state.quizItems.map((quizItem, i) => {	
				return <ShowQuestion handleGuessedAnswers={this.handleGuessedAnswers} quizItem={quizItem} key={i}/>  
				  });	 
		
		  return(
			<div>
				<Header/>
				<form onSubmit={this.sendQuiz}>
					<div>
						<h2 className="text-center">{this.state.title}</h2>
						{questionList}
						<div className="text-center">
							<button type="submit" className="btn btn-primary">Skicka svar</button>
						</div>
					</div>
				</form>

			</div>
		  )
	  }
  }
  
	export default ShowQuiz;

