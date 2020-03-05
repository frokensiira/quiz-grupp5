import React from 'react'

class RenderSingleQuiz extends React.Component {



    render() {
        return(
            <div id="render-single-quiz" className="card mb-4">
                <div className="card-header">
                    Fråga 1
                </div>
                <div className="card-body">
                    <p>Hur många skog finns det i träden?</p>
                    <footer>Poäng: 10</footer>
                </div>
            </div>
        )
    }
}

export default RenderSingleQuiz

