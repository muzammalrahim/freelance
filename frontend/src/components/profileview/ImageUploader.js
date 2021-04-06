import React,{ Component} from 'react'
import GetImage from "../../App/pages/registration/GetImage"


export default class ImageUploader extends Component {

  profilePicBinaryImg(binaryfile) {
    
  }


  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
      
        <div
          style={{
            height: "100px",
            width: "100px",
          }}
        >
        <GetImage
        
          profilePicUpload={this.profilePicBinaryImg}
          value="Profilepic"
        />
        
        </div>
    
      </div>
    );
  }
}





   
    
  
   
