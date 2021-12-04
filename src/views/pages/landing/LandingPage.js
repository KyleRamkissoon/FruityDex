import React from 'react'
import './style.css'
import logo from './logo.png'
// import bg from './background.jpg'

const LandingPage = () => {
  return (
    <div className="__Landing_banner">
      <div className="__Landing_navbar">
        <img src={logo} className="__Landing_logo" alt={'logo'} />
      </div>
      <div className="__Landing_content">
        <h1>Welcome to Fruity-Dex</h1>
        <p>Please Navigate to the App to being Usage.</p>
        <div>
          <button
            className={'__Landing_button'}
            onClick={() => {
              window.location.reload()
            }}
            type="button"
          >
            <span className={'__Landing_span'} />
            <h2>Lets Go!</h2>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
