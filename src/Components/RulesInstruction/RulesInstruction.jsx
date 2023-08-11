import React from 'react'
import Styles from './RulesInstruction.module.css'

const RulesInstruction = ({onClick}) => {
    return (
        <div className={Styles.main}>
            <h1>How to play dice game</h1>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then  2 point will be dedcuted </p>
            <button className={Styles.btn} onClick={onClick}>Close</button>
        </div>
    )
}

export default RulesInstruction
