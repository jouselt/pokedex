import React from 'react'
import logo from '../../assets/poke_ball.svg';
import styles from './Loading.module.css'

export default function Loading() {
    return (
        <div>
            <img src={logo} className={styles.loading} alt="logo" />
        </div>
    )
}
