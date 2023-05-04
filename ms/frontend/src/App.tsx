import React, { useState } from 'react';
import './styles/main.scss';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { changeCategory, categorySelector } from './features/images/categorySlice';

function App() {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch()
  const options = ["backgrounds", "fashion", "nature", "science",
                   "education", "feelings", "health", "people",
                    "religion", "places", "animals", "industry",
                     "computer", "food", "sports", "transportation",
                      "travel", "buildings", "business", "music"]
  
  const handlePrev = () => {
    page > 1 ? setPage(page - 1): prompt("no previous data!!") 
  }

  const handleNext = () => {
    page < 10 ? setPage(page + 1): prompt("no more pages!!")
  }

  const handleChangeCategory = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    try {
      dispatch(changeCategory(ev.target.value))
      
    } catch (error) {
      console.error(error);
      
    }
  }

  const selectedCategory = useAppSelector(categorySelector)
  
  return (
    <div className="App">
      <div className="top">

      <button onClick={handlePrev}>prev</button>
      <select value={selectedCategory} onChange={handleChangeCategory}>
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button onClick={handleNext}>next</button>
      </div>
    </div>
  );
}

export default App;
