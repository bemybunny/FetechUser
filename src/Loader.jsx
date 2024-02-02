import React from 'react'
import './loader.css';
const Loader = () => {
  return (
    <div>
      <div className="userbody">
              <div className="center">
                  <div className="ring"></div>
                  <span className="user_span">loading...</span>
              </div>
          </div>
    </div>
  )
}

export default Loader
