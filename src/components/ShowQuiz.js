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
  
	  sendQuiz = (e) =>{
		  
		  e.preventDefault();

		  //console.log('this is our quiz from state', this.state);

		  console.log('this is our quiz from props', this.props);
  
	  }

	  handleGuessedAnswers = guessedAnswer => {

		console.log('from handleGuessedAnswers. guessedAnswer is', guessedAnswer);

		// console.log('this is ShowQuiz this.state.quizItems', this.state.quizItems);

		// //Guessed checking

		// console.log('guessedAnswer is', guessedAnswer);

		const guessedQuizItems = [];

		guessedQuizItems.push(guessedAnswer)

		console.log('guessedQuizItems is', guessedQuizItems);

		// //Solution checking

		// const correctQuizItems = [...this.state.quizItems]

		// const correctQuizItem = correctQuizItems[0]

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

