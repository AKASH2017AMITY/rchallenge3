import React, { useState } from 'react'
import styles from './GamePlay.module.css'
import RulesInstruction from '../RulesInstruction/RulesInstruction';

const GamePlay = () => {

    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");
    const [rules, setRules] = useState(false);

    let arrNumber = [1, 2, 3, 4, 5, 6];

    function generateRandomNumber(min, max) {

        return Math.floor(Math.random() * (max - min) + min);
    }

    function rollDice() {
        if (!selectedNumber) {
            setError("You have not selected any number")
            return
        }
        setError("");
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber);

        if (selectedNumber === randomNumber) {
            setScore(prev => prev + randomNumber);
        } else {
            setScore(prev => prev - 2)
        }

        setSelectedNumber(undefined);
    }

    function numberSelectedHandle(value) {
        setSelectedNumber(value)
        setError("")
    }

    function handleReset() {
        setScore(0);
    }

    function handleInstruction(){
        setRules((prev)=>!prev);
    }
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.leftHeader}>
                    <h1 className={styles.heading}>{score}</h1>
                    <p className={styles.para}>Total Score</p>
                </div>
                <div className={styles.rightHeader}>
                    <div className={styles.error}>
                        <p>{error}</p>
                    </div>
                    <div>
                        {arrNumber.map((value, i) => { return <Button isSelected={value === selectedNumber} key={i} onClick={() => numberSelectedHandle(value)}>{value}</Button> })}
                    </div>
                    <div >
                        <p className={styles.p}>Select Number</p>
                    </div>
                </div>
            </header>
            <main id={styles.main}>
                <div>
                    <img className={styles.mainImage} src={`images/dices/dice_${currentDice}.jpg`} alt="" onClick={rollDice} />
                </div>
                <div>
                    <p className={styles.mainText}>click on the dice to roll</p>
                </div>
                <div>
                    <button className={styles.mainButton} onClick={handleReset}>Reset score</button>
                </div>
                <div>
                    <button className={styles.mainButton1} onClick={handleInstruction}>{rules ? "Hide" : "Show"} rules</button>
                </div>
                <div>
                    {rules && <RulesInstruction onClick={handleInstruction} />}
                </div>
            </main>
        </div>
    )
}

export default GamePlay

function Button({ isSelected, className, key, onClick, children }) {

    return (
        <button className={isSelected ? styles.activeButton : styles.button} key={key} onClick={onClick}>{children}</button>
    )
}
