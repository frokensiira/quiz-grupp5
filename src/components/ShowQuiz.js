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
	}
    render() { 

		console.log('this is quizItems', this.state.quizItems);

		    const questionList = this.state.quizItems.map((quizItem, i) => {	
				
				console.log('quizItem is', quizItem);
          return (
			<div className="quiz py-4 bg-primary" key={i}>
              	<div className="container">
					<div className="my-5">
                		<p className="lead font-weight-normal">{quizItem.question}</p>
						<ShowAnswer key={quizItem.id} data={quizItem}/>
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
  
