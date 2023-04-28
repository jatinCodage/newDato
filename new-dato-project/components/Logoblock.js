import React from "react";

import ImageRow from "./ImageRow";

const Logoblock = ({ styling, maxCols, height, images }) => {
  let modifiedimages = [];
  let i = 0;
  images.map((element, index) => {
    if (i >= maxCols || index == 0) {
      modifiedimages.push([element]);
      i = 0;
    } else {
      modifiedimages[modifiedimages.length - 1].push(element);
    }
    i++;
  });
  return (
    <div>
      <div>
        We recommend plans from every single insurance carrier including:
      </div>
      {modifiedimages.map((i) => {
        console.log(i,'logog')
        return <ImageRow images={i} />;
      })}
    </div>
  );
};

export default Logoblock;
