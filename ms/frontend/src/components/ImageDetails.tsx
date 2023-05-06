import React from 'react';
import '../styles/main.scss'
interface details{
      views: number,
      downloads: number,
      collections: number,
      likes: number,
      comments: number,
      user: string,
      setBoolDetails: Function
}

export const ImageDetails = ({
    views,
    downloads,
    collections,
    likes,
    comments,
    user,
    setBoolDetails}: details) => {
  return (
    <div className='details'>
        <p>user: {user}</p>
        <p>views: {views}</p>
        <p>downloads: {downloads}</p>
        <p>collections: {collections}</p>
        <p>likes: {likes}</p>
        <p>comments: {comments}</p>
        <h4 onClick={() => setBoolDetails(false)}>exit</h4>
    </div>
  )
}
