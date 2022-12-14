import React, { useState } from 'react'
import Item from '../Item/Item';
import Card from '../UI/Card/Card';
import styles from './List.module.css'

const List = (props) => {
    const { pokemons, selectPokemon } = props;
    return <>
        {pokemons.map(pokemon =>
            <Card className={styles.card} key={pokemon.name}>
                <Item pokemon={pokemon} showPokemon={selectPokemon} />
            </Card>
        )}
    </>
}
export default List; 