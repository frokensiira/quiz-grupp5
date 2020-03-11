import React from 'react'

const ShowAnswer = (props) => {

    const handleAnswer = (e) => {

        props.handleGuessedAnswers(props.answer, props.quizId)
    }

        const newId = `${props.quizId}.${props.answer.id}`;
        
            return(
                <div className="custom-control custom-radio">
                    <input 
                        type="radio" 
                        className="custom-control-input" 
                        id={newId}
                        name={props.quizId}
                        onChange={handleAnswer}
                        />
                    <label 
                        className="custom-control-label" 
                        htmlFor={newId}
                    >{props.answer.title}</label>
                </div>
            )
}
        
export default ShowAnswer