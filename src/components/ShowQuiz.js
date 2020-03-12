import React from 'react'
import { db } from '../modules/firebase';
import ShowQuestion from './ShowQuestion';
import Header from './Header'

class ShowQuiz extends React.Component{
	state = {
		  id: '',
		  title: '',
		  quizItems: [],
		  totalPoints: '',
	  }
  
	  componentDidMount() {
		  this.getQuiz()
	  }

	  handleGuessedAnswers = (guessedAnswer, question) => {

		const newQuizItems = [...this.state.quizItems];

		const guessedQuestion = newQuizItems.find(quizItem => quizItem.id === question)

		if(guessedAnswer.value === true){
			guessedQuestion.correctAnswer = true;
		} else {
			guessedQuestion.correctAnswer = false;
		}

		this.setState({
			quizItems: newQuizItems
		})

    }
  
	  sendQuiz = e =>{
		  
		e.preventDefault();

		const correctAnswers = this.state.quizItems.filter(quizItem => quizItem.correctAnswer === true)

		const points = correctAnswers.map(correctAnswer => correctAnswer.points)

		const totalPoints = points.reduce((acc, curr) => {
			return acc += Number(curr)
		}, 0)

		this.setState({
			totalPoints
		})

		window.scrollTo(0,0)
	  }

	  getQuiz = () => {
		db.collection("quizes").doc(this.props.match.params.id).get()
		.then((response) => {

			const quizItems = response.data().quiz.quizItems

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

		const renderResult = () => {
		  
			if(this.state.totalPoints){
				return (<div className="result py-4 text-center">
							<div className="container border border-primary rounded">
								<p>Grattis! Du fick<span className="text-primary display-4 p-3">{this.state.totalPoints}</span> poäng</p>
							</div>
							
						</div>) 
			} else if(this.state.totalPoints === 0){
				return (<div className="result py-4 text-center">
							<div className="container border border-primary rounded">
								<p>Du fick tyvärr<span className="text-primary display-4 p-3">{this.state.totalPoints}</span> poäng</p>
							</div>
						</div>)
			} else {
				return ''
			}
		}
			  
		const questionList = this.state.quizItems.map((quizItem, i) => {	
			return <ShowQuestion handleGuessedAnswers={this.handleGuessedAnswers} quizItem={quizItem} key={i}/>  
		});	 
		
		return(
			<div>
				<Header/>
				{renderResult()}
				<form onSubmit={this.sendQuiz}>
					<div>
						<h2 className="text-center">{this.state.title}</h2>
						{questionList}
						<div className="text-center">
							<button type="submit" className="btn btn-primary mb-2">Skicka svar</button>
						</div>
					</div>
				</form>
			</div>
		)
	  }
  }
  
	export default ShowQuiz;