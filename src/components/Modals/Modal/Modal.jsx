import React from 'react'
import { createPortal } from 'react-dom'
import {AiOutlineCloseCircle} from "react-icons/ai"
import './Modal.style.css'

const Modal = ({open,children,onClose}) => {
    if(!open)
     return null

     return createPortal(
        <>
            <div className="overlay" ></div>
            {children}
            <div className="closebtn" onClick={onClose}>
            <AiOutlineCloseCircle />
            </div>
        </>
        ,document.getElementById('modal')
      )
}

export default Modal