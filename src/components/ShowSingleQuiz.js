import React from 'react'

class ShowSingleQuiz extends React.Component {
    render() {
        const quiz = this.state.quizes.map(quiz =>{
          console.log('quiz.answers is', quiz.answers.length);
            return (
              <div className="col mb-4 border-info">
                <div className="card h-100">
                <img src={logo} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{quiz.titel}</h5>
                    <p className="card-text">{quiz.description}</p>
                    <Link to={'/quiz/'+ quiz.id} className="btn btn-primary btn-lg mb-4">Starta quiz</Link>
                    <div className="card-footer bg-transparent border-primary">{quiz.answers.length} frågor</div>
                </div>
            </div>
          </div>
          )
        })
        return(
            <div>
                {quiz}
          </div>
        )
    }
}

export default ShowSingleQuiz