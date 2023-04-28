import React from 'react'

import TabElement from './TabElement'

const Tab = ({images, top, styling}) => {
  return (
    <div style={{padding:styling.padding, margin: styling.margin, backgroundColor:styling.bgcolor?.hex}}>
<h1 style={{color:'black', textAlign:'center'}}>THE TABS BLOCK</h1>
        {images.map((i)=>{
          return <TabElement data={i}/>})}
    </div>
  )
}

export default Tab