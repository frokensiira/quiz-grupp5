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

        this.props.handleAnswerInputText(answerData)
        
    }

    handleChangeValue = e => {

        const value = !this.props.answer.value

        const answerData = {
            id: this.props.answer.id,
            title: this.props.answer.title,
            value: value
        };

        this.props.handleAnswerInputRadiobutton(answerData)

    }

    render() {

        const { id, title, value } = this.props.answer;
        const placeholder = `Svarsalternativ ${id}`;
        const radio = `customRadio${id}`;

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
                        value={title}
                        
                    />
                </div>
                <div className="custom-control custom-radio mb-3">
                    <input 
                        type="radio" 
                        defaultChecked={value}
                        className="custom-control-input" 
                        id={radio}
                        name="customRadio"
                        onChange={this.handleChangeValue}
                        />
                        
                    <label 
                        className="custom-control-label" 
                        htmlFor={radio}
                    >Rätt svar</label>
                </div>
            </div>
        )
    }
}

export default AddAnswer



