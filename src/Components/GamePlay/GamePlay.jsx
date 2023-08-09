import React from 'react'
import styles from './GamePlay.module.css'

const GamePlay = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.leftHeader}>
                    <h1>0</h1>
                    <p className={styles.para}>Total Score</p>
                </div>
                <div className={styles.rightHeader}>
                    <div>
                        <button>0</button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                    </div>
                    <div >
                        <p className={styles.p}>Select Number</p>
                    </div>
                </div>
            </header>
            <div>

            </div>
        </div>
    )
}

export default GamePlay
