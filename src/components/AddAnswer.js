import React from 'react'

class AddAnswer extends React.Component {
    render() {

        const { id, input, value } = this.props.answer;

        const placeholder = `Svarsalternativ ${id}`;
        return(
                
            <div id="add-answer" className="form-row">
                <div className="form-group col-md-10">
                    <input onChange={this.props.handleChange} id={id} className="form-control form-control-lg" type="text" name="answerX" placeholder={placeholder} value={input}/>
                </div>
                <div className="form-group col-md-2">
                    <select 
                        id={id}
                        className="form-control form-control-lg" 
                        value={value}
                        onChange={this.props.handleChange}
                    >
                        <option value="correct">Rätt svar</option>
                        <option value="wrong">Fel svar</option>
                    </select>
                </div>
            </div>

        )
    }
}

export default AddAnswer