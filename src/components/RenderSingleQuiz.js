import React from 'react'

class RenderSingleQuiz extends React.Component {


    render() {

        console.log('this is props in RenderSingelQuiz', this.props.question);

        const { number,question, points } = this.props.question

        return(
            <div id="render-single-quiz" className="card mb-4">
                <div className="card-header">
                    Fråga {number}
                </div>
                <div className="card-body">
                    <p>{question}</p>
                    <footer>Poäng: {points}</footer>
                </div>
            </div>
        )
    }
}

export default RenderSingleQuiz

