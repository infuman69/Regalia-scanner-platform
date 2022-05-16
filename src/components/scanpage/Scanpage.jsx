import React from 'react'
import { QrReader } from 'react-qr-reader';
import { useHistory } from 'react-router-dom';
import './Scanpage.style.css'
import 'react-toastify/dist/ReactToastify.css';


const Scanpage = () => {
  let history = useHistory()
  return (
    <div className='qr-reader'>
      <h2 className='header2'>Scan QR Code</h2>
    <QrReader
      onResult={(result, error) => {
        if (!!result) {
          //https://stackoverflow.com/a/22648406/10951873
          //to avoid any websites in the scanned text
          if (result.getText().match('^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$') == null) {
            history.replace('/'+result.getText())
          } else {
            history.replace('/')
          }
        }
        if (!!error) {
          console.info(error);
        }
      }}
      constraints={{
        facingMode: 'environment'
      }}
      videoContainerStyle={ { paddingTop: '69%' } }
      videoStyle={{ borderRadius:'10px'}}
      containerStyle={{marginLeft:'10%', marginRight:'10%', marginTop:'0%', display:'flex', justifyContent:'center', alignItems:'center' ,height:'79%', width:"92%"}}
      scanDelay={500}
    />
  </div>
  )
}

export default Scanpage