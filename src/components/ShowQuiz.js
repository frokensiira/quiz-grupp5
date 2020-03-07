import React from 'react'
import { db } from '../modules/firebase';
//import ShiwAnswer from './ShowAnswer';

class ShowQuiz extends React.Component{
  state = {
		id: '',
		title: '',
		questions: [],
	}

	componentDidMount() {
		this.getQuiz()
	}

	getQuiz = () => {
		db.collection("quizes").doc(this.props.match.params.id).get()
		.then((response) => {
			this.setState({
				id: response.id,
				title: response.data().title,
				...response.data(),
			})
		});
	}
    render() { 

		    const questionList = this.state.questions.map(question => {
			  console.log('question', question)
			
          return (
			<div className="quiz py-4 bg-primary">
              	<div className="container">
					<div className="my-5">
                		<p className="lead font-weight-normal">{question.question}</p>
						
					</div>
				</div>
			</div>
        )
      })

      
        return(
          <div>
              {questionList}
          </div>
        )
    }
}

  export default ShowQuiz;
  
