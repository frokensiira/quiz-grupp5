import React from 'react'
import AddAnswer from './AddAnswer'

class AddSingleQuiz extends React.Component {

    state = { 
        
        id: 0,
        points: '',
        question: '',
        answers: [
            {
                id: 1,
                title: '',
                value: true,
            },
            {
                id: 2,
                title: '',
                value: false,
            },
        ]
      
    }

    handleAddAnswer = () => {

        const ids = this.state.answers.map(answer => answer.id);
        const newId = Math.max(...ids) + 1;

        const answer = {
            id: newId,
            title: '',
            value: false,
        }

        const newAnswers = [...this.state.answers];

        newAnswers.push(answer)

        this.setState({
            answers: newAnswers
        })
    }

    handleAnswerInput = (ans) => {

        const newAnswers = [...this.state.answers];

        let clickedAnswer = newAnswers.find(answer => {
            return answer.id == ans.id
        })

        clickedAnswer.title = ans.title;
        clickedAnswer.value = ans.value;

        this.setState({
            answers: newAnswers
        })

    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleAddQuestion = e => {

        const ids = this.state.answers.map(answer => answer.id);
        const newId = Math.max(...ids) + 1;

        this.props.addQuestion(this.state)

        this.setState({
            points: '',
            question: '',
            answers: [
                {
                    id: 1,
                    title: '',
                    value: true,
                },
                {
                    id: 2,
                    title: '',
                    value: false,
                },
            ]
        })
    }

    render() {

        const answers =  this.state.answers.map(answer => {
            return <AddAnswer handleAnswerInput={this.handleAnswerInput} key={answer.id} answer={answer} handleChangeAnswers={this.handleChangeAnswers}/>
        }) 

        return(
            <div id="quiz-item">

            <div className="form-group">
                <input 
                    onChange={this.handleChange} 
                    id="points" 
                    className="form-control form-control-lg" 
                    type="number" 
                    name="points" 
                    placeholder="Poäng som frågan är värd (minst 1p)" 
                    value={this.state.points}
                />
            </div>
            <div className="form-group">
                <textarea 
                    maxLength="200" 
                    onChange={this.handleChange} 
                    id="question" 
                    className="form-control form-control-lg" 
                    type="text" 
                    name="question" 
                    placeholder="Fråga"
                    value={this.state.question}
                    
                >
                </textarea>
            </div>

            
            {answers}
            

            <div className="form-row">

                <div className="form-group col-md-4">
                    <button 
                        id="btn-create-answer" 
                        onClick={this.handleAddAnswer} 
                        className="btn btn-outline-secondary" 
                    >
                        <span id="plus" className="font-weight-bold">+</span> 
                        Fler svarsalternativ
                    </button>
                </div>

            </div>

            <div className="form-group">
                <button 
                    id="btn-create-answer" 
                    onClick={this.handleAddQuestion} 
                    className="btn btn-primary"
                >
                <span id="plus" className="font-weight-bold">+</span>
                    Lägg till fråga
                </button>
            </div>

        </div>


        )
    }
}

export default AddSingleQuiz