import React from 'react';
import football from './assets/football.jpg'
import map from './assets/map.png'
import music from './assets/music.jpg'
import dog from './assets/dog.jpg'
//import { db } from './modules/firebase'

class App extends React.Component {
  render() {

    return (
      <div className="App">

        <div class="py-3 bg-white text-center">
          <div class="container">
            <div className="row">
              <div className="col-md-3 offset-md-8">
                <button className="btn btn-primary btn-lg ">Skapa eget quiz</button>
              </div>
              <div className="col-md-6 offset-md-3">
                <h2 className="text-primary display-3 my-4">Quiz</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="quiz py-4 bg-primary">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 mt-5">

              <div className="col mb-4 border-info">
                <div className="card h-100">
                  <img src={football} className="card-img-top" alt=""/>
                  <div className="card-body">
                    <h5 className="card-title">Sport</h5>
                    <p className="card-text">This is a longer card with
                    supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a href="" className="btn btn-primary mb-4">Starta quiz</a>
                    <div class="card-footer bg-transparent border-primary">10 frågor</div>
                  </div>
                </div>
              </div>

              <div className="col mb-4">
                <div className="card h-100">
                  <img src={dog} className="card-img-top" alt=""/>
                  <div className="card-body">
                    <h5 className="card-title">Hundar</h5>
                    <p className="card-text">This is a longer card with
                    supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a href="" className="btn btn-primary mb-4">Starta quiz</a>
                    <div class="card-footer bg-transparent border-primary">12 frågor</div>
                  </div>
                </div>
              </div>

              <div className="col mb-4">
                <div className="card h-100">
                  <img src={map} className="card-img-top" alt=""/>
                  <div className="card-body">
                    <h5 className="card-title">Geografi</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    <a href="" className="btn btn-primary mb-4">Starta quiz</a>
                    <div class="card-footer bg-transparent border-primary">15 frågor</div>
                  </div>
                </div>
              </div>

              <div className="col mb-4">
                <div className="card h-100">
                  <img src={music} className="card-img-top" alt=""/>
                  <div className="card-body">
                    <h5 className="card-title">Musik</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a href="" className="btn btn-primary mb-4">Starta quiz</a>
                    <div class="card-footer bg-transparent border-primary">20 frågor</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        
      </div> 

    );

  }

}

export default App;
