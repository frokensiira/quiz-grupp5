import React from 'react'
import football from '../assets/football.jpg'
//import { Link } from 'react-router-dom'

const QuizItem = (props) => {
    const {titel, description} = props.quiz

    return(
        <div className="col mb-4 border-info">
            <div className="card h-100">
                <img src={football} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{titel}</h5>
                    <p className="card-text">{description}</p>
                    {/* <Link to='/quiz' className="btn btn-primary mb-4">Starta quiz</Link> */}
                    <button className="btn btn-primary mb-4">Starta quiz</button>
                    <div className="card-footer bg-transparent border-primary">10 frågor</div>
                </div>
            </div>
    </div>
    )
}

export default QuizItem