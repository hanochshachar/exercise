import React, { useState, useEffect } from 'react';
import './styles/main.scss';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { imagesSelector } from './features/images/imageSlice';
import axios from 'axios';
import { ImageCard } from './components/ImageCard';
import { getImagesAsync } from './features/images/imagesAPI';

function App() {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('backgrounds')
  const dispatch = useAppDispatch()
  const options = ["backgrounds", "fashion", "nature", "science",
                   "education", "feelings", "health", "people",
                    "religion", "places", "animals", "industry",
                     "computer", "food", "sports", "transportation",
                      "travel", "buildings", "business", "music"]
  
  const handlePrev = () => {
    page > 1 ? setPage(page - 1): alert("no previous data!!") 
  }

  const handleNext = () => {
    page < 10 ? setPage(page + 1): alert("no more pages!!")
  }

  const handleChangeCategory = async (ev: React.ChangeEvent<HTMLSelectElement>) => {
    ev.preventDefault()
    try {
      setCategory(ev.target.value)
       
    } catch (error) {
      console.error(error);
      
    }
  }

  const fetchData = async () => {
    try {
      dispatch(getImagesAsync({category, page}))
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData()
  }, []);
  
  useEffect(() => {
    fetchData()
  }, [category, page]);
  
  return (
    <div className="App">
      <div className="top">

      <button onClick={handlePrev}>prev</button>
      <select value={category} onChange={handleChangeCategory}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button onClick={handleNext}>next</button>
      </div>
      <ImageCard/>
    </div>
  );
}

export default App;
