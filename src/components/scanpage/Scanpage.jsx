import React from 'react';
import Html5QrcodePlugin from '../Html5QrcodePlugin'
class Scanpage extends React.Component {
  constructor(props) {
      super(props);

      // This binding is necessary to make `this` work in the callback.
      this.onNewScanResult = this.onNewScanResult.bind(this);
  }

  render() {
      return (<div>
          <h1>Html5Qrcode React example!</h1>
          <Html5QrcodePlugin 
              fps={10}
              qrbox={250}
              disableFlip={false}
              qrCodeSuccessCallback={this.onNewScanResult}/>
      </div>);
  }

  onNewScanResult(decodedText, decodedResult) {
      console.log(decodedText);
  }
};
export default Scanpage;