import React from 'react';




class AddQuiz extends React.Component {

    state= {
        id:'',
        quastion: null,
        answer1:null,
        answer2: null,
        answer3: null,
        answer4: null


    }
    handlechange = e => {
        this.setState({
            
        
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log(e)
        // React.createElement("input", {type: "text", value: "text"})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState ({
       
    
        })
    }

    
    render() {

        return (
            <div className="mb-3 container-sm">
                <h3 className="text-center">Skapa eget Quiz</h3>
                    <form id="quastion" className="inputGroup" onSubmit={this.handleSubmit}>
                        <label>Fråga</label>
                    <input onChange={this.handlechange} id="quastion" className="form-control" type="text" name="quastion" placeholder="Fråga"/>
                    <label> Alternativ 1</label>
                    <input onChange={this.handlechange} id="answer1" className="form-control" type="text" name="answer1" placeholder="Svarsalternativ 1 " />
                    <label> Alternativ 2</label>
                    <input onChange={this.handlechange} id="answer2" className="form-control" type="text" name="answer2" placeholder="Svarsalternativ 2 " />
                    <label> Alternativ 3</label>
                    <input onChange={this.handlechange} id="answer3" className="form-control" type="text" name="answer2" placeholder="Svarsalternativ 3 " />
                    <label> Alternativ 4</label>
                    <input onChange={this.handlechange} id="answer4" className="form-control" type="text" name="answer2" placeholder="Svarsalternativ 4 " />
                    <button onClick={this.handleSubmit} className="btn btn-success" >Skapa flera svarsalternativ</button>
                        
                       
				</form>
                <button onClick={this.handleClick} className="btn btn-success" >Skapa Quizet</button>
            </div>
        )
    }
}

export default AddQuiz