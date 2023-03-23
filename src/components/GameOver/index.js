import './index.css'

const GameOver = props => {
  const {finalScore, onClickPlayAgainButton} = props

  const onClickPlayAgain = () => {
    onClickPlayAgainButton()
  }

  return (
    <div className="gameOverContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophyImage"
      />
      <p className="heading">YOUR SCORE</p>
      <p className="scoreHead">{finalScore}</p>
      <button
        type="button"
        className="playAgainButton"
        onClick={onClickPlayAgain}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="resetImage"
        />
        <span>PLAY AGAIN</span>
      </button>
    </div>
  )
}

export default GameOver
