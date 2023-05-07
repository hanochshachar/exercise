import React, { useState } from 'react';
import axios from 'axios';
import '../styles/allComponents.scss'

export const Pagination = () => {
  const [images, setImages] = useState<any>([]);
  const [perNu, setPerNu] = useState<any>()

  const handlePagination = async (ev: any) => {
    ev.preventDefault()
    try {
     
        const data = await axios.get(`/node-ex/pagination?per=${perNu}`)
        setImages(data.data)
     
      
    } catch (error) {
      console.error(error);
      
    }
  }
  return (
    <div>
      <form className='form' onSubmit={handlePagination}>
      <input type="number" name="per" max={20}
        onChange={(ev) => setPerNu(ev.target.value)} />
        <input type="submit" value="get pagination" />
      </form>

      <div className='allImages'>
      {images && images.map((img:any, index: number)=> {
        return(

          <img key={index} className='image' src={img.largeImageURL} alt="image" />
        )
      })}
    </div>
    </div>
  )
}
