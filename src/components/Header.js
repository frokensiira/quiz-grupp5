import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {    
    return(
        <div className="py-3 bg-white text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 offset-md-8">
                    <Link to="/" className="btn btn-primary btn-lg">Tillbaka</Link>
                  </div>
                  <div className="col-md-6 offset-md-3">
                    <h2 className="text-primary display-3 my-4">Q5</h2>
                  </div>
                </div>
            </div>
          </div>
    )
}

export default Header