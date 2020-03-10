import React from 'react'
import ShowAnswer from './ShowAnswer';
import {  Link } from 'react-router-dom'



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

       
        const answerList = this.props.quizItem.answers.map(answer =>{

            

            return <ShowAnswer quizId={this.props.quizItem.id} answer={answer} key={answer.id} handleCheckboxAnswer={this.handleCheckboxAnswer}/>
            
        });
        //answerList.sort(function (a, b) { return 0.5 - Math.random() });

        

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