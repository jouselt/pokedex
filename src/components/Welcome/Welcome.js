import React from 'react'
import pikachu from '../../assets/pikachu.png';
import styles from './Welcome.module.css'
import Button from '../UI/Button/Button';

export default function Welcome() {
    return (
        <>
            <div className={styles.pikachu}>
                <img src={pikachu} alt="welcome-pikachu-waving" />
            </div>
            <h1>Welcome to Pokédex</h1>
            <p className={styles['welcome-message']}>The digital encyclopedia created by Professor Oak is an invaluable tool to trainers in the Pokémon world </p>
            <Button>Get Started</Button>
        </>
    )
}
