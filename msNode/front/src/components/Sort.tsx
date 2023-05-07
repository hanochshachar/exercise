import axios from 'axios';
import '../styles/allComponents.scss'
import React, { useEffect, useState } from 'react'

export const Sort = () => {
  const [images, setImages] = useState<any>([])

  useEffect(() => {
    (async() => {
      try {
        const data = await axios.get('/node-ex/sorted-data')
        console.log(data);
        setImages(data.data)
        
      } catch (error) {
        console.error(error);
        
      }
      
    })()

  }, [])
  console.log(images);
  

  return (
    <div className='allImages'>
      {images && images.map((img:any, index: number)=> {
        return(

          <img key={index} className='image' src={img.largeImageURL} alt="image" />
        )
      })}
    </div>
  
  )
}
