import React, { useEffect, useState } from 'react'
import Item from '../Item/Item';
import Card from '../UI/Card/Card';
import styles from './List.module.css'
import axios from 'axios'


const List = (props) => {
    const { pokemons } = props;

    return (pokemons.map((pokemon, index) => {
                return (<Card className={styles.card}>
                    <Item key={index} name={pokemon.name} pokemon={pokemon} />
                </Card>)
            })
    )
}
export default List;