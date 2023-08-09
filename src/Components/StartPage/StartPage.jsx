import React from 'react'
import styles from "./StartPage.module.css"

function StartPage() {
  return (

    <div id={styles.container}>
      <div id={styles.image}>
        <img src="images/dices.jpg" alt="" />
      </div>
      <div id={styles.textandbtn}>
        <h1 id={styles.text}>Dice game</h1>
        <button id={styles.startbtn}>Start game</button>
      </div>
    </div>

  )
}

export default StartPage