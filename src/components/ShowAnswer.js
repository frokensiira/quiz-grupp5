import React from 'react'


const ShowAnswer = (props) => {

    console.log('props array is', props.data.answers);
        const answerList = props.data.answers.map(answer =>{
            return (
                <div className="form-check my-2 text-white">
                    <input type="checkbox" name="q1" value="A"  className="mr-2"/>
                    <label className="form check-label">{answer.title}</label>
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