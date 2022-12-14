import React from 'react'
import ReactDOM from 'react-dom'
import Card from '../Card/Card';
import Button from '../Button/Button';
import styles from './Modal.module.css'
import modalBg from '../../../assets/modal-header-bg.png'

const Backdrop = (props) => {
    return (<div className={styles.backdrop} onClick={props.onDismiss} />);

}
const ModalOverlay = (props) => {
    const { pokemon } = props;
    const pokeImg = pokemon.sprites.other.dream_world.front_default;
    console.log(props);
    var sectionStyle = {
        width: "100%",
        height: "fit-content",
        padding: '30px 0',
        background: `url(${modalBg}) no-repeat`,
        backgroundSize: 'cover'
    };
    return <>
        <Card className={styles.card}>
            <div className={styles.modal}>
                <header className={styles.header} style={sectionStyle}>
                    <img src={pokeImg} alt={pokemon.name} className={styles.pokemonImg} />
                </header>
                <div className={styles.content}>
                    <p>
                        Name: {pokemon.name}
                    </p>
                    <p>
                        Height: {pokemon.height}
                    </p>
                    <p>
                        Weight: {pokemon.weight}
                    </p>
                    <p>
                        Type: {
                            pokemon.types.map((type, index) => index > 0 ? 
                            `, ${type.type.name}` :
                            type.type.name)
                        }
                    </p>
                </div>

                <footer className={styles.footer}>
                    <Button onClick={props.onDismiss}>Share to my friends</Button>
                </footer>
            </div>
        </Card>
    </>;

}

const modal = props => {
    const { pokemon } = props;
    return (
        <>
            {ReactDOM.createPortal((<Backdrop onDismiss={props.onDismiss} />), document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal((<ModalOverlay onDismiss={props.onDismiss} pokemon={pokemon} />), document.getElementById('modal-overlay-root'))}
        </>
    )
}
export default modal;
