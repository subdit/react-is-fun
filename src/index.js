
// import React from 'react' orbelow
import  React, {component} from 'react'

// import ReactDOM from 'react-dom'
import {render} from 'react-dom'
// to be more concise using {jsx} curry brackets

import './index.css';
import App from './App';

let golfData = {
  summer: 90,
  sunny: 20,
  practice: 5,
  goal:20,
  total: 5
}
const getPercent = decimal => {
  return decimal * 100 + '%'
}
const calGoalProgress = (total, goal) => {
  return getPercent(total/goal)
}

const GolfDayCounter = ({summer, sunny, practice, goal, total}) => {
  return(
      <section>
          <div>
          <p>Summer Days: {summer}</p>
          </div>
            <div>
              <p>Sunny Days: {sunny}</p>
            </div>
            <div>
              <p>Practice Days: {practice}</p>
            </div>
            <div>
              <p>Goal to play: {goal}</p>
            </div>
            <div>
            <p>Total Play Days: {total}</p>
            </div>
            <div>
              <p>Goal Progress: {calGoalProgress(total, goal)}</p>
            </div>
    </section>
    )
  }

// class GolfDayCounter extends React.Component {
//   // method to calculate of the goal progess in percentage

  // render() {
  //   const {summer, sunny, practice, goal, total} = this.props
  //   return (
  //     /* used to be Total Days: {this.props.summer}
  //                             : {this.props.powder}
  //                             : {this.props.practice}
  //                             : {this.props.goal}
  //                             : {this.props.total}
  //      */

// ReactDom.render()
render(
  <GolfDayCounter
    total={golfData.total}
    sunny={golfData.sunny}
    summer={golfData.summer}
    practice={golfData.practice}
    goal={golfData.goal}
    />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
