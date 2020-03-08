import React from 'react';
import AddSingleQuiz from './AddSingleQuiz'; 
import RenderSingleQuiz from './RenderSingleQuiz'
//import AddAnswer from './AddAnswer'

class AddQuiz extends React.Component {


    state = { 
        quiz: 
        {   
            id: 1,
            name: '',
            
            quizItems: []
        }
    }

    addQuestion = (props) => {

        // console.log('from addQuestion: this.state is', props);

        // console.log('these are myprops', props);

        const newQuizItems = [...this.state.quiz.quizItems];

        console.log('newQuizItems is', newQuizItems);

        let newId;

        if(newQuizItems.length === 0) {
            newId = 1;
        } else{
            const ids = newQuizItems.map(answer => answer.id);
            console.log('ids is', ids);
            newId = Math.max(...ids) + 1;
        }

        

        console.log('new id is', newId);

        console.log('props are', props);

        props.id = newId;

        console.log('props after newId is', props);

        //console.log('my quizItems are', newQuizItems);

        newQuizItems.push(props);

        this.setState({
            quiz: {
                quizItems: newQuizItems
            }
        })

    }


    handleChange = e => {

        //console.log('from handleChange', e.target);
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        //console.log(e)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState ({
       
    
        })
    }
    
    render() {
        
        //console.log('this.state.quiz is', this.state.quiz.quizItems);

        const singleQuizItem = this.state.quiz.quizItems.map(singleQuizItem => {
            //console.log('my singleQuizItem is', singleQuizItem);
            //console.log('my singleQuizItem id is', singleQuizItem.id);
            return <RenderSingleQuiz 
            key={singleQuizItem.id} 
            singleQuizItem ={singleQuizItem }    
            />
        });

        //console.log('this is my quiz name', this.state.name);

        return (
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
                                    required
                                />
                            </div>
                  
                            <AddSingleQuiz addQuestion={this.addQuestion}/>

                            

                        </form>

                        {singleQuizItem}

                        <div className="text-center">
                            <button 
                                id="btn-create-quiz" 
                                onClick={this.handleClick} 
                                className="btn btn-primary"
                            >Skapa Quiz</button>
                        </div>
                </div>
            </div>
        )
    }
}

export default AddQuiz