import React from 'react';
import AddSingleQuiz from './AddSingleQuiz'; 
import RenderSingleQuiz from './RenderSingleQuiz'

class AddQuiz extends React.Component {

    state= {

        questions: [
            {
                id:'',
                number: 0,
                points: 1,
                question: '',
                answer1: '',
                answer2: '',
                answer3: '',
            }

        ],
        

        addQuestion: false,

    }
    handlechange = e => {
        this.setState({
            
        
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log(e)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState ({
       
    
        })
    }

    addQuestion = () => {
        this.setState({
            addQuestion: true,
        })
    }
    
    render() {


        return (
            <div className="quiz py-4 bg-primary">
                <div className="mb-3 container-sm bg-white p-4 rounded-lg">
                    <h3 className="text-center mb-5">Skapa ditt eget Quiz</h3>
                        <form className="form-group" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input 
                                    className="form-control form-control-lg" 
                                    type="text" 
                                    placeholder="Namn på quiz"
                                    value=""
                                    onChange={e => this.handleChange(e)}
                                />
                            </div>

                            

                            <AddSingleQuiz />

                            <ul>

                            </ul>

                            <div className="form-group">
                                <button 
                                id="btn-create-answer" 
                                onClick={this.addQuestion} 
                                className="btn btn-primary"
                                >
                                <span id="plus" className="font-weight-bold">+</span>
                                Lägg till fråga
                                </button>
                            </div>

                        </form>

                        <RenderSingleQuiz />

                        <div className="text-center">
                            <button id="btn-create-quiz" onClick={this.handleClick} className="btn btn-primary">Skapa Quiz</button>
                        </div>
                </div>
            </div>
        )
    }
}

export default AddQuiz