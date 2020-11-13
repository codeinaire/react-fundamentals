// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

const Box = ({size, style, className = '', ...otherProps}) => {
  // let className
  // if (size === 'small') {
  //   className = 'box--small'
  // } else if (size === 'medium') {
  //   className = 'box--medium'
  // } else {
  //   className = 'box--large'
  // }
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

const smallBox = (
  <div className="box--small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </div>
)
const mediumBox = (
  <div className="box--medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </div>
)
const largeBox = (
  <div className="box--large" style={{backgroundColor: 'orange'}}>
    large orange box
  </div>
)

function App() {
  return (
    <div>
      <Box size="large" style={{backgroundColor: 'red'}} />
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
