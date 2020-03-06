import React from 'react'

class ShowQuiz extends React.Component{
    render() {
        return(
          <div className="Quiz">

            <div className="py-3 bg-white text-center">
              <div className="container">
                  <h2 className="text-primary display-3 my-4">Quiz-titel</h2>
              </div>
            </div>

            <div className="result py-4 d-none bg-light text-center">
              <div className="container lead">
                  <p>Du fick<span className="text-primary display-4 p-3">0</span> rätt</p>
              </div>
            </div>

            <div className="quiz py-4 bg-primary">
              <div className="container">
                  <h2 className="my-5 text-white">On with the questions...</h2>

                  <form className="quiz-form text-light">

                    <div className="my-5">
                      <p className="lead font-weight-normal">1. How do you give a ninja directions?</p>
                      <div className="form-check my-2 text-white">
                          <input type="radio" name="q1" value="A" checked className="mr-2"/>
                          <label className="form check-label">Show them the map</label>
                      </div>
                      <div className="form-check my-2 text-white">
                          <input type="radio" name="q1" value="B" className="mr-2"/>
                          <label className="form check-label">Dont' worry, the ninja will find you</label>
                      </div>
                    </div>

                    <div className="my-5">
                      <p className="lead font-weight-normal">2. How do you give a ninja directions?</p>
                      <div className="form-check my-2 text-white">
                          <input type="radio" name="q2" value="A" checked className="mr-2"/>
                          <label className="form check-label">Show them the map</label>
                      </div>
                      <div className="form-check my-2 text-white">
                          <input type="radio" name="q2" value="B" className="mr-2"/>
                          <label className="form check-label">Dont' worry, the ninja will find you</label>
                      </div>
                    </div>

                    <div className="my-5">
                      <p className="lead font-weight-normal">3. How do you give a ninja directions?</p>
                      <div className="form-check my-2 text-white">
                          <input type="radio" name="q3" value="A" checked className="mr-2"/>
                          <label className="form check-label">Show them the map</label>
                      </div>
                      <div className="form-check my-2 text-white">
                          <input type="radio" name="q3" value="B" className="mr-2"/>
                          <label className="form check-label">Dont' worry, the ninja will find you</label>
                      </div>
                    </div>

                    <div className="text-center">
                        <input type="submit" className="btn btn-light" value="Skicka svar"/>
                    </div>

                  </form>
              </div>
            </div>
          </div>
        )
    }
}

  export default ShowQuiz;
  
