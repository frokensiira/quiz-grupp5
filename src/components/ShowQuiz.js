import React from 'react'
import { db } from '../modules/firebase';
import ShowAnswer from './ShowAnswer';

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
				questions: response.data.quiz,
				...response.data(),
			})
			console.log(response.data().quiz,'this is questionlist')
		});
	}
    render() { 

		const questionList = this.state.questions.map(question => {	
			console.log('this is questionList', question)	
          return (
			<div className="quiz py-4 bg-primary">
              	<div className="container">
					<div className="my-5">
                		<p className="lead font-weight-normal">{question.question}</p>
						<ShowAnswer data={question}/>
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
  
