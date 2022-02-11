import React from 'react'

/** Create component StartBtn with props {onClick} **/
const StartBtn = ({onClick}) => {
	return (
    <button 
      className = 'btn' 
      onClick = {onClick}
    >
    Start
    </button>
	)
}

export default StartBtn