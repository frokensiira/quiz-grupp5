import React from 'react'
import { db } from '../modules/firebase';
import ShowQuestion from './ShowQuestion';
import { Link } from 'react-router-dom'



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

		console.log('from ShowQuiz, these are my quizItems', this.state.quizItems);
			  const questionList = this.state.quizItems.map((quizItem, i) => {	
				//console.log(i+1)
				return <ShowQuestion handleGuessedAnswers={this.handleGuessedAnswers} quizItem={quizItem} key={i}/>  
				  });	 
		
		  return(
			<div>
				<div className="py-3 bg-white text-center">
					<div className="container">
						<div className="row">
							<div className="col-md-3 offset-md-8">
								<Link to='/' className="btn btn-primary btn-lg">Tillbaka</Link>
							</div>
						</div>
						<div className="col-md-6 offset-md-3">
							<h2 className="text-primary display-3 my-4">{this.state.title}</h2>
						</div>
					</div>
				</div>
				<form onSubmit={this.sendQuiz}>
					<div>
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

