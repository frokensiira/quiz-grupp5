import React from 'react';
import AddSingleQuiz from './AddSingleQuiz'; 
import RenderSingleQuiz from './RenderSingleQuiz'
import { db } from '../modules/firebase'
import Header from './Header'


class AddQuiz extends React.Component {


    state = { 
        name: '',
        quiz: 
        {   
            id: '',
            name: '',
            description: '',
            quizItems: [],
        }
    }

    addQuestion = (props) => {

        const newQuizItems = [...this.state.quiz.quizItems];

        let newId;

        if(newQuizItems.length === 0) {
            newId = 1;
        } else{
            const ids = newQuizItems.map(answer => answer.id);
            newId = Math.max(...ids) + 1;
        }

        props.id = newId;

        newQuizItems.push(props);

        this.setState({
            quiz: {
                quizItems: newQuizItems
            }
        })
    }

    addNewQuiz = (e) =>{
        
        e.preventDefault();
        const quiz = this.state

        db.collection("quizes").add(quiz)
        .then(docRef => {
            console.log("Document written with ID: ", docRef.id);
            this.props.history.push('/');
        })
        .catch(err => {
            console.error("Error adding document: ", err);
        });

    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

 

    handleSubmit = (e) => {
        e.preventDefault();

        
    }
    
    render() {

        const singleQuizItem = this.state.quiz.quizItems.map(singleQuizItem => {
            return <RenderSingleQuiz 
            key={singleQuizItem.id} 
            singleQuizItem ={singleQuizItem }    
            />
        });

        return (
            <div>
            <Header />
            <div className="quiz py-4 bg-primary">
                <div className="mb-3 container-sm bg-white p-4 rounded-lg">
                    <h3 className="text-center mb-5">Skapa ditt eget Quiz</h3>
                        <form className="form-group" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input 
                                    id="name"
                                    name="quiz-title"
                                    className="form-control form-control-lg" 
                                    type="text" 
                                    placeholder="Namn på quiz"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    
                                />
                            </div>
                            <div className="form-group mb-5">
                                <textarea 
                                    id="description" 
                                    name="description" 
                                    className="form-control form-control-lg"
                                    type="text" 
                                    placeholder="Beskrivning av quiz"
                                    value={this.state.description} 
                                    onChange={this.handleChange} 
                                    maxLength="200"  
                                >
                                </textarea>
                            </div>
                  
                            <AddSingleQuiz addQuestion={this.addQuestion}/>

                        </form>

                        {singleQuizItem}

                        <div className="text-center">
                            <button 
                                id="btn-create-quiz" 
                                onClick={this.addNewQuiz}
                                className="btn btn-primary"
                            >Skapa Quiz</button>
                        </div>
                </div>

                <div className="App">
                    { this.state.user ?  ( this.props.history.push('/add-quiz')) : ( null ) }
                </div>
            </div>
        </div>
            
        )
    }
}

export default AddQuiz