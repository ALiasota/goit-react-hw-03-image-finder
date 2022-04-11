import React, {Component} from "react";
import { createPortal } from "react-dom";
import styles from './Modal.module.css';

const modalRoot = document.getElementById('#modal-root');

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
        if(e.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackdroopClick = e => {
        if (e.currentTarget === e.target ) {
            this.props.onClose();
        }
    }

    render() {
        
        return(
            <div className={styles.overlay} onClick={this.handleBackdroopClick}>
                <div className={styles.modal} >
                    <img src={this.props.largeImg} alt="" />
                </div>
            </div>
        )
    }
}