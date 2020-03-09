import React from 'react'
//import football from '../assets/football.jpg'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const QuizItem = (props) => {
    const {id ,titel, description} = props.quiz

    return(
        <div className="col mb-4 border-info">
            <div className="card h-100">
                <img src={logo} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{titel}</h5>
                    <p className="card-text">{description}</p>
                    <button className="btn btn-primary mb-4"><Link to={'/quiz' + id} className="btn btn-primary mb-4">Starta quiz</Link></button>
                    <div className="card-footer bg-transparent border-primary">10 frågor</div>
                </div>
            </div>
    </div>
    )
}

export default QuizItem