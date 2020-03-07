import React from 'react'
import AddAnswer from './AddAnswer'

class AddSingleQuiz extends React.Component {

    state = {
        answers: [
            {
                id: 1,
                input: '',
                value: 'correct',
            },
            {
                id: 2,
                input: '',
                value: 'wrong',
            },
        ]
        
    }

    handleChange = () => {

    }

    handleAddAnswer = () => {

        const ids = this.state.answers.map(answer => answer.id);
        const newId = Math.max(...ids) + 1;

        const answer = {
            id: newId,
            input: '',
            value: 'wrong',
        }

        const newAnswers = [...this.state.answers];

        newAnswers.push(answer)

        this.setState({
            answers: newAnswers,
        })
    }

    render() {

        const answers =  this.state.answers.map(answer => {
            return <AddAnswer key={answer.id} answer={answer} handleChange={this.handleChange}/>
        })

        return(
            <div id="quiz-item">

            <div className="form-group">
                <input onChange={this.handlechange} id="points" className="form-control form-control-lg" type="number" name="points" placeholder="Poäng som frågan är värd (minst 1p)" />
            </div>
            <div className="form-group">
                <textarea maxLength="200" onChange={this.handlechange} id="question" className="form-control form-control-lg" type="text" name="question" placeholder="Fråga"></textarea>
            </div>

            <ul id="show-answer-input">
                {answers}
            </ul>

            

            <div className="form-row">

                <div className="form-group col-md-4">
                    <button id="btn-create-answer" onClick={this.handleAddAnswer} className="btn btn-outline-secondary" ><span id="plus" className="font-weight-bold">+</span> Fler svarsalternativ</button>
                </div>

            </div>

        </div>
        )
    }
}

export default AddSingleQuiz