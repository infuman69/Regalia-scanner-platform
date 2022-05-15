import React from 'react'
import './Scanpage.style.css'
import Html5QrcodePlugin from '../Html5QrcodePlugin'

const Scanpage = () => {
  return (
    <div>
            <h1>Html5Qrcode React example!</h1>
            <Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={this.onNewScanResult}/>
        </div>
  )
}

export default Scanpage