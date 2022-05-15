import React,{useState} from 'react'
import { QrReader } from 'react-qr-reader';

const Scanpage = () => {
  const [data, setData] = useState('No result');
  return (
    <>
    <QrReader
      onResult={(result, error) => {
        if (!!result) {
          setData(result?.text);
        }

        if (!!error) {
          console.info(error);
        }
      }}
      style={{ width: '50%' ,height:'50%'}}
      containerStyle={{ width: '20%' ,height:'20%' ,display:'flex',justifyContent:'center',alignItems:'center'}}
    />
    <p>{data}</p>
  </>
  )
}

export default Scanpage