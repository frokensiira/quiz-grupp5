import React from 'react'
import ShowAnswer from './ShowAnswer';



class ShowQuestion extends React.Component {

    render() {     
       
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