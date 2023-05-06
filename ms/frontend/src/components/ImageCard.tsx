import React, {useState} from 'react';
import "../styles/main.scss";
import { useAppSelector } from '../app/hooks';
import { imagesSelector, imagesStatus } from '../features/images/imageSlice';
import { ImageDetails } from './ImageDetails';

export const ImageCard = () => {
    const [boolDetails, setBoolDetails] = useState(false)
    const [selectedImage, setSelectedImage] = useState<any>(null)
     
    const imagesArray:any = useAppSelector(imagesSelector); 
  return (<>
  
    <div className='images'>
        {imagesArray !== null && imagesArray.map((image: any, index: number) => {
            return (
                <div className="image" key={index}>
                    <img className='img' onClick={() => {setBoolDetails(true); setSelectedImage(image)}} src={image.largeImageURL} alt="" />
                    
                </div>
                )
}) 
        }
        {boolDetails === true && <ImageDetails
                     views={selectedImage.views}
                    downloads={selectedImage.downloads}
                    collections={selectedImage.collections}
                    likes={selectedImage.likes}
                    comments={selectedImage.comments}
                    user={selectedImage.user}
                    setBoolDetails={setBoolDetails}/>}
        
    </div>
            </>
  )
}
