import React from "react";
import { Image } from "react-datocms/image";

const TabElement = ({ data }) => {
    const title=data.imgblockbasedata[0].title.toUpperCase()
    const description=data.imgblockbasedata[0].description
    const image=data.blockimage.responsiveImage
  return <div style={{color:'black', border:'3px solid black', margin:'10px'}}>
   <Image data={image}/>
   <h2 style={{border:'2px solid black'}}>{title}</h2>
   <h3>{description}</h3>
  </div>;
};

export default TabElement;
