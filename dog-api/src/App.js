import React, { useEffect, useState, useTransition } from 'react';
import axios from 'axios';
import './App.css';
import DogCard from './components/DogCard';

function App() {
  const [dogImages, setDogImages] = useState([]);
 
  const [options, setOptions] = useState({}) // step 1 create state for options
  useEffect(() => {

    //get 3 random dog images
    axios.get('https://dog.ceo/api/breeds/image/random/3').then(res => {
      console.log(res.data.message)
      setDogImages(res.data.message)
    })

    // get all the dog breeds
    axios.get('https://dog.ceo/api/breeds/list/all').then(res => {
      console.log(res.data.message)
      setOptions(res.data.message)
    })

  }, []);
  return (
    <div className='app'>
      {dogImages.map((image, index) => {
        let dog = {image}; //map through dogs creating dogcards
        return (
          <DogCard className="dogCard" dog={dog} key={index} />
        );
      })}
    </div>
  );
}

export default App;
