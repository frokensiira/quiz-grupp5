import React from 'react'
import ShowAnswer from './ShowAnswer';

class ShowQuestion extends React.Component {

    state = {
        answers: []
    }

    componentDidMount() {

        const answers = [...this.props.quizItem.answers]
        const randomizedAnswers = []

        while(answers.length !== 0){
            const randomIndex = Math.floor(Math.random()* answers.length)

            randomizedAnswers.push(answers[randomIndex])

            answers.splice(randomIndex, 1)
        }

        this.setState({
            answers: randomizedAnswers
        })        
    }

    render() {     
       
        const answerList = this.state.answers.map(answer =>{

            return <ShowAnswer quizPoint={this.props.quizItem.points} quizId={this.props.quizItem.id} answer={answer} key={answer.id} handleGuessedAnswers={this.props.handleGuessedAnswers}/>
            
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