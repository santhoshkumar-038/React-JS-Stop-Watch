// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeElapsedInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onClickResetButton = () => {
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
    clearInterval(this.timeInterval)
  }

  onClickStopButton = () => {
    this.setState({isTimerRunning: false})
    clearInterval(this.timeInterval)
  }

  onClickStartButton = () => {
    this.setState({isTimerRunning: true})
    this.timeInterval = setInterval(this.updateTime, 1000)
  }

  updateTime = () => {
    // const {timeElapsedInSeconds} = this.state
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="app-container">
        <h1 className="stopwatch-heading">Stopwatch</h1>
        <div className="stopwatch-container">
          <div className="timer-image-text">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="image"
            />
            <p className="timer-text">timer</p>
          </div>
          <h1 className="time">{time}</h1>
          <div className="buttons-container">
            <button
              type="button"
              className="start-button"
              onClick={this.onClickStartButton}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              type="button"
              className="stop-button"
              onClick={this.onClickStopButton}
            >
              Stop
            </button>
            <button
              type="button"
              className="reset-button"
              onClick={this.onClickResetButton}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
