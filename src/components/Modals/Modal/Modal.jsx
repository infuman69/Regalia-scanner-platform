import React from 'react'
import { createPortal } from 'react-dom'
import './Modal.style.css'

const Modal = ({open,children}) => {
    if(!open)
     return null

     return createPortal(
        <>
            <div className="overlay" ></div>
            {children}
            
        </>
        ,document.getElementById('modal')
      )
}

export default Modal