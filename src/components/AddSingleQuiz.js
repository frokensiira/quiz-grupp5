import React from 'react'

class AddSingleQuiz extends React.Component {

    state = {
        value: 'wrong'
    }

    handleChange = () => {

    }

    render() {
        return(
            <div id="quiz-item">

            <div className="form-group">
                <input onChange={this.handlechange} id="points" className="form-control form-control-lg" type="number" name="points" placeholder="Poäng som frågan är värd (minst 1p)" />
            </div>
            <div className="form-group">
                <textarea maxLength="200" onChange={this.handlechange} id="question" className="form-control form-control-lg" type="text" name="question" placeholder="Fråga"></textarea>
            </div>

            <div className="form-row">
                <div className="form-group col-md-10">

                    <input onChange={this.handlechange} id="answer1" className="form-control form-control-lg" type="text" name="answer1" placeholder="Svarsalternativ 1" />
                </div>
                <div className="form-group col-md-2">
                    <select 
                        id="inputStatus" 
                        className="form-control form-control-lg" 
                        value={!this.state.value}
                        onChange={this.handleChange}
                    >
                        <option value="correct">Rätt svar</option>
                        <option value="wrong">Fel svar</option>
                    </select>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-10">

                    <input onChange={this.handlechange} id="answer1" className="form-control form-control-lg" type="text" name="answer1" placeholder="Svarsalternativ 2" />
                </div>
                <div className="form-group col-md-2">
                    <select 
                        id="inputStatus1" 
                        className="form-control form-control-lg" 
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <option value="correct">Rätt svar</option>
                        <option value="wrong">Fel svar</option>
                    </select>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-10">
                    <input onChange={this.handlechange} id="answer1" className="form-control form-control-lg" type="text" name="answer1" placeholder="Svarsalternativ 3" />
                </div>
                <div className="form-group col-md-2">
                    <select 
                    id="inputStatus2" 
                    className="form-control form-control-lg" 
                    value={this.state.value}
                    onChange={this.handleChange}
                    >
                        <option value="correct">Rätt svar</option>
                        <option value="wrong">Fel svar</option>
                    </select>
                </div>
            </div>

            <div className="form-row">

                <div className="form-group col-md-4">
                    <button id="btn-create-answer" onClick={this.handleSubmit} className="btn btn-outline-secondary" ><span id="plus" className="font-weight-bold">+</span> Fler svarsalternativ</button>
                </div>

            </div>

        </div>
        )
    }
}

export default AddSingleQuiz