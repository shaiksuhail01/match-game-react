import './index.css'

const NavHeader = props => {
  const {scoreValue, timerValue} = props

  return (
    <nav className="navContainer">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="websiteLogoImage"
        />
      </div>
      <div className="scoreAndTimeContainer">
        <p className="scoreText">
          Score: <span className="scoreValue">{scoreValue}</span>
        </p>
        <div className="imageAndTimeCont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timerImage"
          />
          <p className="timerText">{timerValue} sec</p>
        </div>
      </div>
    </nav>
  )
}

export default NavHeader
