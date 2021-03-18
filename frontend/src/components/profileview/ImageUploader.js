import React from 'react'

 function Uploading(props) {
    
    const uploadedImage = React.useRef({
        imageUploader : '',
    });
    const imageUploader = React.useRef(null);
  
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
            height: "60px",
            width: "60px",
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