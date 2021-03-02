import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import ReactDropzone from "react-dropzone";
 import request from "superagent";
 import img from '../../../img/ImageUpload.png'
 
import './IdVerification.css'
import '../../../../src/common.css'

export default class GetImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filesBase64: '',
    };
  }

  

  onDrop = (files) => {
    //  POST to a test endpoint for demo purposes
    //  const req = request.post('https://httpbin.org/post');
    // 
    files.forEach(file => {
      // req.attach(file.name, file);

      this.setState({filesBase64: ''});
      
      const reader = new FileReader()
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        const binaryStr = reader.result
        // console.log(' binaryStr ', binaryStr);

        var base64Image = btoa(
          new Uint8Array(binaryStr)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
          // console.log(' base64Image ', base64Image);
          this.setState({filesBase64: base64Image});
          

       
       

      }
      reader.readAsArrayBuffer(file)
      

    });
    // req.end();
     
     

  }

  onPreviewDrop = (files) => {
    // this.setState({
      // files: this.state.files[0],
    // });
  }

  render() {
    const previewStyle = {
      display: 'inline',
      width: 100,
      height: 100,
    };
    console.log(this.state.files)
    return (

   
      <div className='style'>
          <div className="imgBack">
                {/* method to show base64 img*/}
          {/* <img src={`data:image/png;base64,`+this.state.filesBase64}  />*/}
            {/* method to show base64 img*/}

            <ReactDropzone

            className={this.props.value === 2 ? "dropzone2" : "dropzone"}
              accept="image/*"
              onDrop={this.onDrop}
              >
              <div  style={{textAlign:"center"}}> 

  
                <div className='iv_icon2' style={{backgroundImage: `url(${img})`}}></div> 
                
                <div>
                    <span style= {{cursor: "pointer"}}>Drop your image here,</span><span style={{color:"#1da799",cursor: "pointer"}} >  or browse </span>
                </div>  
              </div>
            </ReactDropzone>
            </div>
        {/*<h2>Image Previews</h2>
        {this.state.files.length > 0 &&
          <Fragment>
            <h3>Previews</h3>
            {this.state.files.map((file) => (
              <img
                alt="Preview"
                key={file.preview}
                src={file.preview}
                style={previewStyle}
              />
            ))}
          </Fragment>
        } */}

      </div>
    );
  }
}