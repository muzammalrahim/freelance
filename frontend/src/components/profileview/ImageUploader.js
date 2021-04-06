import React,{ useState,useRef } from 'react'
import Cooper from '../../assets/Cooper.png';
import {post} from '../../App/pages/helper/api'

 function Uploading(props) {

  

  // const [image, setImage] = useState('')
  // const [loading, setLoading] = useState(false)

  // const uploadImage = async e => {
  //   const files = e.target.files
  //   const data = new FormData()
  //   data.append('file', files[0])
  //   data.append('upload_preset', 'darwin')
  //   setLoading(true)
  //   const res = await post(
  //     '	api/v1/freelancer_profile/',
  //     {
  //       method: 'POST',
  //       body: data
  
  //     }
  //   )
  //   const file = await res.json()

  //   setImage(file.secure_url)
  //   setLoading(false)
  // }


    const [state, setstate] = useState('')
    const uploadedImage = useRef({
        imageUploader : '',
    });
    const imageUploader = useRef(null);
  
    const handleImageUpload = e => {
      const [file] = e.target.files;
      // post('api/v1/freelancer_profile/')
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
          onChange={(e) => handleImageUpload(e)}
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
          onClick={(e) => handleImageUpload(e)}
        >
          <img
            ref={imageUploader}
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