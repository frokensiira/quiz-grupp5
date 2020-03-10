import React from 'react'

class AddAnswer extends React.Component {

    state = {
        
        answer: 
            {
                id: 0,
                title: '',
                value: '',
            }
        
    }

    handleChangeAnswer = (e) => {

        const answerData = {
            id: e.target.id,
            title: e.target.value,
            value: this.props.answer.value,
        };

        this.setState({
            answer: answerData
        })
        this.props.handleAnswerInput(answerData)
        
    }

    handleChangeValue = e => {

        console.log('this is my id', this.props.answer.id);
        
        const value = !this.state.answer.value

        const answerData = {
            id: this.props.answer.id,
            title: this.props.answer.title,
            value: value
        };

        this.setState({
            answer: answerData
        })

        this.props.handleAnswerInput(answerData)


    }

    render() {

        const { id } = this.props.answer;
        const placeholder = `Svarsalternativ ${id}`;
        const check = `customCheck${id}`;

        return(
            
            <div id="add-answer" className="form-row">
                <div className="form-group col-md-10">
                    <input 
                        onChange={this.handleChangeAnswer}
                        id={id} 
                        className="form-control form-control-lg" 
                        type="text" 
                        name="answer"
                        placeholder={placeholder} 
                        value={this.props.answer.title}
                        
                    />
                </div>
                <div className="custom-control custom-checkbox">
                    <input 
                        type="checkbox" 
                        checked={this.props.answer.value}
                        className="custom-control-input" 
                        id={check}
                        onChange={this.handleChangeValue}
                        />
                        
                    <label 
                        className="custom-control-label" 
                        htmlFor={check}
                    >Rätt svar</label>
                </div>
            </div>
        )
    }
}

export default AddAnswer






