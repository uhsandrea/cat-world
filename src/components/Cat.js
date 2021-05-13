import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Some cats are missing image url in breeds list API. Had to get new image by searching specific breed id and update for those missing

function Cat( { id, name, desc, img, temp, life, origin }) {
  const [altImagesArray, setArray] = useState([]);
  const [altImageUrl, setImage] = useState("");

  function getNewImageData() {
    return new Promise((resolve, reject) => {
      fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${id}`)
        .then(response => response.json())
        .then(data => resolve(data));
    })
  }

  function updateImage() {
    const result = altImagesArray.find(item => item.id === id);
    if (result) {
      setImage(result.url);
    }
    else {
      getNewImageData()
        .then(data => {setArray([...altImagesArray, {id, url: data[0].url}]);
        setImage(data[0].url)});
    } 
  }
  
  useEffect(() => {
    if (!img || !img.url) {
      updateImage();
    }
  });

  return (
    <Link className="cat"
      to={{
        pathname: `/cat/${id}`,
        state: {
          id, name, desc, img, temp, life, origin, altImageUrl
        }
      }}
    >
      <img src={(!img || !img.url) ? altImageUrl : img.url} alt="Not Available" />
      <h1>{name}</h1>
    </Link>
  );
}

export default Cat;
