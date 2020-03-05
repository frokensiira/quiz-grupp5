import React from 'react'

class AddAnswer extends React.Component {
    render() {
        return(

            <div id="add-answer" className="form-row">
                <div className="form-group col-md-10">
                    <input onChange={this.handlechange} id="answer1" className="form-control form-control-lg" type="text" name="answer1" placeholder="Svarsalternativ 2" />
                </div>
                <div className="form-group col-md-2">
                    <select id="inputStatus" class="form-control form-control-lg">
                        <option>Rätt svar</option>
                        <option selected>Fel svar</option>
                    </select>
                </div>
            </div>

        )
    }
}

export default AddAnswer