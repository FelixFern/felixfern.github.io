import React, { useContext } from 'react'
import { ModalContext } from '../context/global'
import './Modal.css'

function Modal(props) {
    const { ModalToggle, setModalToggle } = useContext(ModalContext) 
    return (
        <div className='modal'>
            <div className='modal-background' onClick={() => {
                setModalToggle({ show : false, title : ''})
            }}></div>
            <div className='modal-box'>
                <div className='close-button' onClick={() => {
                    setModalToggle({ show : false, title : ''})
                }}>
                    <h2>X</h2>
                </div>
                <h3>{props.title}</h3>
                <p>Work in Progress</p>
            </div>
        </div>
    )
}

export default Modal