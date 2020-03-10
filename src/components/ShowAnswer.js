import React from 'react'

class ShowAnswer extends React.Component {

    state = {
        answer: [
            {
            id: 0,
            title: '',
            value: '',
            points: 0
            }
        ]
    }

    handleAnswer = (e) => {

        // const value = !this.state.answer.value
        const value = !this.props.value

        // console.log('this.props.answer.id', e.target.id);
        // console.log('this.props.answer.title', this.props.answer.title);
        // console.log('value', value);

        const answerData = {
            id: e.target.id,
            title: this.props.answer.title,
            value: value,
            points: this.props.quizPoint
        };

        const newAnswers = [...this.state.answer, answerData]

        this.setState({
            answer: newAnswers
        })

        //this.props.handleGuessedAnswers(answerData)

/*         if(value === this.props.answer.value){
            console.log('you answered correct'); 

            console.log('this question is worth', this.props.quizPoint);

            const newPoints = [...this.state.points]

            newPoints.push(this.props.quizPoint)

            this.setState({
                points: newPoints
            })

            console.log('my newPoints are', newPoints);
        } else {
            console.log('you answered wrong'); 
        } */
    }

    

    render() {

/*         console.log('quiz id is', this.props.quizId);

        console.log('this quiz answer id is', this.props.answer.id); */

        //console.log('this state is now', this.state);

        const newId = `${this.props.quizId}.${this.props.answer.id}`;
        

            return(
                <div className="custom-control custom-radio">
                    <input 
                        type="radio" 
                        //checked={this.props.value}
                        checked={this.state.value}
                        className="custom-control-input" 
                        id={newId}
                        name={this.props.quizId}
                        onChange={this.handleAnswer}
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