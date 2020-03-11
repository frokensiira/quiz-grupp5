import React from 'react'

const RenderSingleQuiz = (props) => {

    const { id, question, points } = props.singleQuizItem

    return(
        <div id="render-single-quiz" className="card mb-4">
            <div className="card-header">
                Fråga {id}
            </div>
            <div className="card-body">
                <p>{question}</p>
                <footer>Poäng: {points}</footer>
            </div>
        </div>
    )
    
}

export default RenderSingleQuiz

