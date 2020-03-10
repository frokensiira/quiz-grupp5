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
				console.log(i+1)
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

