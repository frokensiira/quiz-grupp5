import React from 'react'
import ShowAnswer from './ShowAnswer';


class ShowQuestion extends React.Component {

    state = {
        question: '',
        answers: []
    }

    handleCheckboxAnswer = (answer) => {

        console.log('from handleCheckboxAnswer', answer);

        const guessedAnswers = [...this.state.answers]

        guessedAnswers.push(answer)

        this.setState({
            question: this.props.quizItem.question,
            answers: guessedAnswers
        })

        this.props.handleGuessedAnswers(this.state)


    }

    

    render() {



        //console.log(this.props.quizItem);

        const answerList = this.props.quizItem.answers.map(answer =>{
            return <ShowAnswer quizId={this.props.quizItem.id} answer={answer} key={answer.id} handleCheckboxAnswer={this.handleCheckboxAnswer}/>
				  
        });
        

        return(
            <div className="quiz py-4 bg-primary mb-4">
                <div className="container">
                    <div className="my-5">
                        <p className="lead font-weight-normal">{this.props.quizItem.id}. {this.props.quizItem.question}</p>
                        {answerList}
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowQuestion;