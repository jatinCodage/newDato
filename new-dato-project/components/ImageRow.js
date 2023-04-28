import React from "react";
import { Image } from "react-datocms/image";

const ImageRow = ({ images }) => {
  return (
    <div>
      {images.map((i, index) => (
        <h2  style={{ border: "3px solid black", margin:'10px', color:'black', textAlign:'center'}}>
            {index+1}{" "}Image
          <Image data={i.responsiveImage} />
        </h2>
      ))}
      
      <br />
      <br />
      <br />
      <br />
    
    </div>
  );
};

export default ImageRow;
