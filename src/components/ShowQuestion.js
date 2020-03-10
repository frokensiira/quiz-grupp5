import React from 'react'
import ShowAnswer from './ShowAnswer';



class ShowQuestion extends React.Component {

    state = {
        quizItems: [
            {
        id: '',
        points: 0,
        question: '',
        answers: []
        }
    ]
    }


/* 
    handleGuessedAnswers = (answer) => {

        //console.log('from handleGuessedAnswers', answer);

        //this.props.handleGuessedAnswers(answer)

        // const guessedAnswer = {
        //     id: answer.id,
        //     points: answer.points,
        //     title: answer.title,
        // }

        // const guessedAnswers = [...this.state.quizItems, guessedAnswer]

        //console.log('this is guessed answers', guessedAnswers);

        // this.setState({
        //     quizItems: guessedAnswers,
        // })

        //this.props.handleGuessedAnswers(guessedAnswers)


    } */

    

    render() {

        //console.log('this is state from showQuestion', this.state);
        //console.log('this.props.quizItem from ShowQuestion is', this.props.quizItem);

        
       
        const answerList = this.props.quizItem.answers.map(answer =>{

            

            return <ShowAnswer quizPoint={this.props.quizItem.points} quizId={this.props.quizItem.id} answer={answer} key={answer.id} handleGuessedAnswers={this.props.handleGuessedAnswers}/>
            
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