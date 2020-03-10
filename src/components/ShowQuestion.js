import React from 'react'
import ShowAnswer from './ShowAnswer';


class ShowQuestion extends React.Component {

/*     state = {
        quizItems: [
            {
        questionID: '',
        question: '',
        answers: []
        }
    ]
    } */

    state = {
        quizItems: []
    }

    handleCheckboxAnswer = (answer) => {

        console.log('from handleCheckboxAnswer', answer);

        //this.props.handleGuessedAnswers(answer)

        const guessedAnswers = [...this.state.quizItems]

        console.log('this is guessed answers', guessedAnswers);

        guessedAnswers.push(answer)

        this.setState({
            quizItems: [guessedAnswers]
            
        })

        //this.props.handleGuessedAnswers(guessedAnswers)


    }

    

    render() {

        //console.log('this.props.quizItem from ShowQuestion is', this.props.quizItem);

        console.log('ShowQustions state is', this.state);

        const answerList = this.props.quizItem.answers.map(answer =>{
            return <ShowAnswer handleGuessedAnswers={this.props.handleGuessedAnswers} quizPoints={this.props.quizItem.points} quizId={this.props.quizItem.id} answer={answer} key={answer.id} handleCheckboxAnswer={this.handleCheckboxAnswer}/>
				  
        });
        

        return(
            <div className="quiz py-4 bg-primary mb-4">
                <div className="container">
                    <div className="my-5">
                        <p className="lead font-weight-normal">{this.props.quizItem.id}. {this.props.quizItem.question} ({this.props.quizItem.points} poäng)</p>
                        {answerList}
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowQuestion;