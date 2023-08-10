import React, { useState } from 'react'
import styles from './GamePlay.module.css'

const GamePlay = () => {

    const[selectedNumber,setSelectedNumber]=useState();
    let arrNumber =[1,2,3,4,5,6];
    
    // if(selectedNumber){
    //     const className+={styles.activeButton}
    // }

    
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.leftHeader}>
                    <h1 className={styles.heading}>0</h1>
                    <p className={styles.para}>Total Score</p>
                </div>
                <div className={styles.rightHeader}>
                    <div>
                        {arrNumber.map((value,i)=>
                            <button isSelected={value===selectedNumber} className={styles.button} key={i} onClick={()=>setSelectedNumber(value)}>{value}</button>
                        )}
                    </div>
                    <div >
                        <p className={styles.p}>Select Number</p>
                    </div>
                </div>
            </header>
            <main id={styles.main}>
                <div>
                    <img className={styles.mainImage}src="images/cubes.jpg" alt="" />
                </div>
                <div>
                    <p className={styles.mainText}>click on the dice to roll</p>
                </div>
                <div>
                    <button className={styles.mainButton}>Reset score</button>
                </div>
                <div>
                    <button className={styles.mainButton1}>show rules</button>
                </div>
            </main>
        </div>
    )
}

export default GamePlay
