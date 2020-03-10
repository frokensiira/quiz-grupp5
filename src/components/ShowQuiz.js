import React from 'react'
import { db } from '../modules/firebase';
import ShowQuestion from './ShowQuestion';

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

		  console.log('this is our quiz from state', this.state);

		  console.log('this is our quiz from props', this.props);
		
		  //const quiz = this.state
  
  /*         db.collection("quizes").add(quiz)
		  .then(docRef => {
			  console.log("Document written with ID: ", docRef.id);
  
			  // redirect to start
			  this.props.history.push('/');
		  })
		  .catch(err => {
			  console.error("Error adding document: ", err);
		  }); */
  
	  }

	  handleGuessedAnswers = quizItems => {

		console.log('this is quizItems from ShowQuestion', quizItems);

/* 		const newQuizItems = [...this.state.quizItems]

		newQuizItems.push(quizItems)

		this.setState({
			quizItems: newQuizItems
		}) */

    }
  
	  getQuiz = () => {
		  db.collection("quizes").doc(this.props.match.params.id).get()
		  .then((response) => {
  
			  //console.log('response is', response.data().quiz.quizItems);
  
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
  
		  //console.log('this is quizItems', this.state.quizItems);
  
			  const questionList = this.state.quizItems.map(quizItem => {	
				return <ShowQuestion handleGuessedAnswers={this.handleGuessedAnswers} quizItem={quizItem} key={quizItem.id}/>  
			  	});	 
		
		  return(
			  <form onSubmit={this.sendQuiz}>
				  <div>
					  {questionList}
					  <div className="text-center">
						  <button type="submit" className="btn btn-primary">Skicka svar</button>
					  </div>
				  </div>
			</form>
		  )
	  }
  }
  
	export default ShowQuiz;

/* class ShowQuiz extends React.Component{
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
		
		console.log();
        //const quiz = this.state

        // db.collection("quizes").add(quiz)
        // .then(docRef => {
        //     console.log("Document written with ID: ", docRef.id);

        //     // redirect to start
        //     this.props.history.push('/');
        // })
        // .catch(err => {
        //     console.error("Error adding document: ", err);
        // });

    }

	getQuiz = () => {
		db.collection("quizes").doc(this.props.match.params.id).get()
		.then((response) => {

			//console.log('response is', response.data().quiz.quizItems);

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

		//console.log('this is quizItems', this.state.quizItems);

		    const questionList = this.state.quizItems.map((quizItem, i) => {	
				
				//console.log('quizItem is', quizItem);
          return (
			  
			<div className="quiz py-4 bg-primary mb-4" key={i}>
              	<div className="container">
					<div className="my-5">
                		<p className="lead font-weight-normal">{quizItem.id}. {quizItem.question}</p>
						<ShowAnswer data={quizItem}/>
					</div>
				</div>
			</div>
        )
      })
      
        return(
			<form onSubmit={this.sendQuiz}>
				<div>
					{questionList}
					<div className="text-center">
						<button type="submit" className="btn btn-primary">Skicka svar</button>
					</div>
				</div>
		  </form>
        )
    }
}

  export default ShowQuiz; */
  
