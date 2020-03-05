import React from 'react'
import football from '../assets/football.jpg'

const QuizItem = (props) => {
    const {titel, description} = props.quiz

    return(
        <div className="col mb-4 border-info">
            <div className="card h-100">
                <img src={football} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{titel}</h5>
                    <p className="card-text">{description}</p>
                    <a href="" className="btn btn-primary mb-4">Starta quiz</a>
                    <div className="card-footer bg-transparent border-primary">10 frågor</div>
                </div>
            </div>
    </div>
    )
}

export default QuizItem