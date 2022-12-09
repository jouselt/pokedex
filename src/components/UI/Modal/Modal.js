import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card';
import Button from './Button';
import styles from './Modal.module.css'
import fav from '../../assets/fav.svg';

const Backdrop = (props) => {
    return (<div className={styles.backdrop} onClick={props.onDismiss} />);

}
const ModalOverlay = (props) => {
    return (<Card className={styles.modal}>
        <header className={styles.header}><h1>{props.title}</h1></header>
        <div className={styles.content}>
            <p>
                {props.message}
            </p>
        </div>

        <footer className={styles.footer}>
            <Button onClick={props.onDismiss}>Share to my friends</Button>
            <img src={fav} alt='fav-btn' className={styles.fav} />
        </footer>
    </Card>);

}

const modal = props => {
    return (
        <>
            {ReactDOM.createPortal((<Backdrop onDismiss={props.onDismiss} />), document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal((<ModalOverlay onDismiss={props.onDismiss} title={props.title} message={props.message} />), document.getElementById('modal-overlay-root'))}
        </>
    )
}
export default modal;
