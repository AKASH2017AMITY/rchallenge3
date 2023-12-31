import React from 'react'
import styles from "./StartPage.module.css"

function StartPage({handleClick}) {
  return (

    <div id={styles.container}>
      <div id={styles.image}>
        <img src="images/dices.jpg" alt="" />
      </div>
      <div id={styles.textandbtn}>
        <h1 id={styles.text}>Dice game</h1>
        <button id={styles.startbtn} onClick={handleClick}>Play now</button>
      </div>
    </div>

  )
}

export default StartPage