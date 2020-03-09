import React from 'react'
import { db } from '../modules/firebase';
import ShowAnswer from './ShowAnswer';

class ShowQuiz extends React.Component{
  state = {
		id: '',
		title: '',
		quizItems: [],
	}

	componentDidMount() {
		this.getQuiz()
	}

	getQuiz = () => {
		db.collection("quizes").doc(this.props.match.params.id).get()
		.then((response) => {

			console.log('response is', response.data().quiz.quizItems);

			const quizItems = response.data().quiz.quizItems
			this.setState({
				id: response.id,
				title: response.data().name,
				quizItems
			})
		}).catch(err => {
			console.error(err);
		});

/* 		db.collection("quizes").get().then((snapshot) => {

          
			const quizes = [];
			snapshot.forEach((doc) => {
			  console.log('doc.data is', doc.data());
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
			
		  }); */
	}
    render() { 

		console.log('this is quizItems', this.state.quizItems);

		    const questionList = this.state.quizItems.map(quizItem => {	
				
				console.log('quizItem is', quizItem);
          return (
			<div className="quiz py-4 bg-primary">
              	<div className="container">
					<div className="my-5">
                		<p className="lead font-weight-normal">{quizItem.question}</p>
						<ShowAnswer data={quizItem}/>
					</div>
				</div>
			</div>
        )
      })

      
        return(
          <div>
			{questionList}
			<div className="text-center">
				<input type="submit" className="btn btn-light" value="Skicka svar"/>
			</div>
          </div>
        )
    }
}

  export default ShowQuiz;
  
