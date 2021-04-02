import React,{ useState,useRef } from 'react'
import Cooper from '../../assets/Cooper.png';

 function Uploading(props) {
    const [state, setstate] = useState('')
    const uploadedImage = useRef({
        imageUploader : '',
    });
    const imageUploader = useRef(null);
  
    const handleImageUpload = e => {
      const [file] = e.target.files;
      if (file) {
        const reader = new FileReader();
        const { current } = uploadedImage;
        current.file = file;
        reader.onload = e => {
          current.src = e.target.result;
        };
        reader.readAsDataURL(file);
        setstate(uploadedImage);
        console.log("fileload :",  uploadedImage)
      }
    };
    
  
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={imageUploader}
          style={{
            display: "none",
          
          }}
        />
        <div
          style={{
            height: "100px",
            width: "100px",
          }}
          onClick={() => imageUploader.current.click()}
        >
          <img
            ref={uploadedImage}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              border : '0.4px solid '
            }}
        
          />
        
        </div>
    
      </div>
    );
  }
export default Uploading;