import React, { Component, Fragment } from "react";
import ReactDropzone from "react-dropzone";
import request from "superagent";
import img from '../../../img/ImageUpload.png'
import './IdVerification.css'
import '../../../../src/common.css'

import {ProfessionalProfileAction} from "../../../redux/actions/ProfessionalProfileAction"
import {connect} from "react-redux"

 class GetImage extends Component {
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
            files.forEach(file => 
              {
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
                      
                      if(base64Image)
                      {
                        this.props.uploadImageHandler(base64Image)
                        console.log("if true",base64Image)
                      }
                  }
                  reader.readAsArrayBuffer(file) 
            });  
  }// drop end;


  render() {
  
    return (
      <div className='style'>
          <div className="imgBack">
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

const mapDispatchToProps = (dispatch)=>
{
   return{
     uploadImageHandler:(imageBase64)=>
     {
       dispatch(ProfessionalProfileAction({type:'UPLOAD_IMAGE',payload:imageBase64}))
     }
   }
}


export default connect(null, mapDispatchToProps)(GetImage)