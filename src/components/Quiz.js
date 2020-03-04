import React from 'react'



class Quiz extends React.Component{
    render() {
        return(
          <div className="Quiz">

            <div class="py-3 bg-white text-center">
              <div class="container">
                  <h2 class="text-primary display-3 my-4">Quiz-titel</h2>
              </div>
            </div>

            <div class="result py-4 d-none bg-light text-center">
              <div class="container lead">
                  <p>Du fick<span class="text-primary display-4 p-3">0</span> rätt</p>
              </div>
            </div>

            <div class="quiz py-4 bg-primary">
              <div class="container">
                  <h2 class="my-5 text-white">On with the questions...</h2>

                  <form class="quiz-form text-light">

                    <div class="my-5">
                      <p class="lead font-weight-normal">1. How do you give a ninja directions?</p>
                      <div class="form-check my-2 text-white">
                          <input type="radio" name="q1" value="A" checked className="mr-2"/>
                          <label class="form check-label">Show them the map</label>
                      </div>
                      <div class="form-check my-2 text-white">
                          <input type="radio" name="q1" value="B" className="mr-2"/>
                          <label class="form check-label">Dont' worry, the ninja will find you</label>
                      </div>
                    </div>

                    <div class="my-5">
                      <p class="lead font-weight-normal">2. How do you give a ninja directions?</p>
                      <div class="form-check my-2 text-white">
                          <input type="radio" name="q2" value="A" checked className="mr-2"/>
                          <label class="form check-label">Show them the map</label>
                      </div>
                      <div class="form-check my-2 text-white">
                          <input type="radio" name="q2" value="B" className="mr-2"/>
                          <label class="form check-label">Dont' worry, the ninja will find you</label>
                      </div>
                    </div>

                    <div class="my-5">
                      <p class="lead font-weight-normal">3. How do you give a ninja directions?</p>
                      <div class="form-check my-2 text-white">
                          <input type="radio" name="q3" value="A" checked className="mr-2"/>
                          <label class="form check-label">Show them the map</label>
                      </div>
                      <div class="form-check my-2 text-white">
                          <input type="radio" name="q3" value="B" className="mr-2"/>
                          <label class="form check-label">Dont' worry, the ninja will find you</label>
                      </div>
                    </div>

                    <div class="text-center">
                        <input type="submit" class="btn btn-light" value="Skicka svar"/>
                    </div>

                  </form>
              </div>
            </div>
          </div>
        )
    }
}

  export default Quiz;
  
