import React, {useState} from 'react'
import { QrReader } from 'react-qr-reader';
import { useHistory } from 'react-router-dom';
import './Scanpage.style.css'


const Scanpage = () => {
  const [data, setData] = useState('');
  let history = useHistory()
  return (
    <div className='qr-reader'>
      <h2 className='header2'>Scan QR Code</h2>
    <QrReader
      onResult={(result, error) => {
        if (!!result) {
          console.log(result)
          
          history.push('/'+result.getText())
          // history.push(`/6aebabead084e6b63c92c2f7`)
          // history.push(`/6aebabead084e6b63c92c2f7`)
          // if (true) {
          //   history.push(`/${data}`)
          // }
        }

        if (!!error) {
          console.info(error);
        }
      }}
      constraints={{
        facingMode: 'environment'
      }}
      videoContainerStyle={ { paddingTop: '75%' } }
      videoStyle={{ borderRadius:'10px'}}
      containerStyle={{marginLeft:'10%', marginRight:'10%', marginTop:'40%', display:'flex', justifyContent:'center', alignItems:'center'}}
      scanDelay={500}
    />
    <p>{data}</p>
  </div>
  )
}

export default Scanpage