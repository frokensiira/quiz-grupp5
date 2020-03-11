import React from 'react'

class ShowAnswer extends React.Component {

    state = {
        answer: [
            {
            id: 0,
            title: '',
            value: '',
            points: 0
            }
        ]
    }

    

    handleAnswer = (e) => {

        this.props.handleGuessedAnswers(this.props.answer, this.props.quizId)
    }

    

    render() {

        const newId = `${this.props.quizId}.${this.props.answer.id}`;
        

            return(
                <div className="custom-control custom-radio">
                    <input 
                        type="radio" 
                        //checked={this.props.value}
                        //checked={this.state.value}
                        className="custom-control-input" 
                        id={newId}
                        name={this.props.quizId}
                        onChange={this.handleAnswer}
                        />
                        
                    <label 
                        className="custom-control-label" 
                        htmlFor={newId}
                    >{this.props.answer.title}</label>
                </div>
            )
        
    }
}
        

export default ShowAnswer