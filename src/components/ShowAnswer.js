import React from 'react'

class ShowAnswer extends React.Component {

    state = {
        answer: 
            {
            id:'',
            title: '', 
            value: '',
            }
        
    }

    handleCheckbox = (e) => {

        //console.log('this props is', this.props);

        //console.log('this is e.target,', e.target);

        //console.log('this.props.answer.value is', this.props.answer.value);
        
        //console.log('this.state.answer.value is', this.state.answer.value);

        //const newAnswers = [...this.state.answers]

        //console.log('calling handleGuessedAnswers');

        //const guessedAnswers = []
        

        const value = !this.state.answer.value
        //const value = !this.props.value

        // console.log('my question id is', this.props.quizId);

        // console.log('my quizPoints', this.props.quizPoints);

        const answer = {
            questionID: this.props.quizId,
            points: this.props.quizPoints,
            id: this.props.answer.id,
            title: this.props.answer.title,
            value: value
        }

        //guessedAnswers.push(answer)

        //this.props.handleGuessedAnswers(answer)

        //newAnswers.push(answer)

        this.setState({
            answer
        })

/*         if(value === this.props.answer.value){
            console.log('you answered correct'); 
         } else {
            console.log('you answered wrong'); 
         } */

        //console.log('from showAnswer, this.props.answer.value', this.props.answer.value);

        // console.log('value', value);
        // console.log('this.props.answer.value is', this.props.answer.value);
        //console.log('answer is', answer);
        //this.props.handleCheckboxAnswer()
        this.props.handleCheckboxAnswer(answer)
        //this.props.handleCheckboxAnswer(this.state.answer.value, this.props.answer.value)
    }

    

    render() {

        const newId = `${this.props.quizId}${this.props.answer.id}`;

        //console.log('this.props.answer.id is', this.props.answer.id);
        //console.log('props array is', this.props);
            return(
                <div className="custom-control custom-checkbox">
                    <input 
                        type="checkbox" 
                        checked={this.state.value}
                        className="custom-control-input" 
                        id={newId}
                        onChange={this.handleCheckbox}
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


/* class ShowAnswer extends React.Component {

    state = {
        value: false,
    }

    handleCheckbox = (e) => {
        console.log('checkbox is', e.target);

        const value = !this.state.value

        this.setState({
            value: value
        })

        //this.props.handleAnswerInput(answerData)
    }

    

    render() {
        //console.log('props array is', this.props.data.answers);
        const answerList = this.props.data.answers.map((answer, i) =>{

            return(
                <div className="custom-control custom-checkbox" key={i}>
                    <input 
                        type="checkbox" 
                        checked={this.state.value}
                        className="custom-control-input" 
                        id={i}
                        onChange={this.handleCheckbox}
                        />
                        
                    <label 
                        className="custom-control-label" 
                        htmlFor={i}
                    >{answer.title}</label>
                </div>
            )
            // return (
            //     <div className="custom-control custom-checkbox my-2 text-white" key={i}>
            //         <input 
            //             type="checkbox" 
            //             checked={this.state.value} 
            //             className="mr-2 custom-control-input"
            //             onChange={this.handleCheckbox}                         
            //         />
            //         <label className="custom-control-label">{answer.title}</label>
            //     </div>
            // )
        })

        return(
            <div>
                {answerList}
          </div>
        )
    }
    }
        

export default ShowAnswer */