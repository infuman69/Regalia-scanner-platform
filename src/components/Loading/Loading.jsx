import React from 'react'
import style from './Loader.module.css'

const Loading = () => {
  return (
    <div className={style.spinner_container}>
        <div className={style.loading_spinner}>
        </div>
    </div>
  )
}

export default Loading
