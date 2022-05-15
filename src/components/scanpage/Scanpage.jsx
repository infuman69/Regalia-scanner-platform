import axios from 'axios';
import React, {useState} from 'react'
import { QrReader } from 'react-qr-reader';
import './Scanpage.style.css'

const Scanpage = () => {
  const [data, setData] = useState('');
  return (
    <div className='qr-reader'>
      <h2 className='header2'>Scan QR Code</h2>
    <QrReader
      onResult={(result, error) => {
        if (!!result) {
          setData(result?.text);

        }

        if (!!error) {
          console.info(error);
        }
      }}
      videoContainerStyle={ { paddingTop: '75%' } }
      videoStyle={{ borderRadius:'10px'}}
      containerStyle={{marginLeft:'10%', marginRight:'10%', marginTop:'40%', display:'flex', justifyContent:'center', alignItems:'center'}}
    />
    <div className='uid-data'>{data}</div>
  </div>
  )
}

export default Scanpage