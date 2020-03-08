import React from 'react'


const ShowAnswer = (props) => {
        const answerList = props.data.answer.map(answer =>{
            return (
                <div className="form-check my-2 text-white">
                    <input type="radio" name="q1" value="A" checked className="mr-2"/>
                    <label className="form check-label">{answer}</label>
                </div>
            )
        })
        return(
            <div>
                {answerList}
          </div>
        )
    }

export default ShowAnswer