import React, { useState } from 'react'
import Fav from '../../assets/Fav.svg'
import noFav from '../../assets/noFav.svg'
import styles from './Item.module.css'

const Item = (props) => {
    const [isFav, setIsFav] = useState(false);
    const favHandler = () => {
        setIsFav(prev => {
            return !prev
        });
    }
    console.log(props)
    const {pokemon} = props

    return (
        <div className={styles.item}>
            <p className={styles.name}>{pokemon.name}</p>
            <div className={styles['star-container']}>
                {isFav ?
                    <img src={Fav} alt='fav' onClick={favHandler} />
                    :
                    <img src={noFav} alt='fav' onClick={favHandler} />
                    // this can be better, maybe by changing the svg fill atribute 
                }
            </div>
        </div>
    )
}

export default Item;