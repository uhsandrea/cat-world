import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Cat( { id, name, desc, img, temp, life, origin, wikipedia, array }) {
  const [item, setItem] = useState("hi");

  function newImageArray(catId, imgUrl) {
    const result = array.find(item => item.id === catId);
    if (!result) {
      array.push({id: catId, url: imgUrl});
    } 
    console.log(array);
    const result2 = array.find(item => item.id === catId);
    return result2.url;
  }
  function getNewImageData() {
    console.log(name);
    return new Promise((resolve, reject) => {
      fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${id}`)
        .then(response => response.json())
        .then(data => newImageArray(id, data[0].url))
        .then(result => resolve(result));
    })
  }
  
  useEffect(() => {
    if (!img || !img.url) {
      getNewImageData().then(data => {
        console.log(data);
        setItem(data);
      });
    }
  })
  return (
    <div className="cat">
      <img src={(!img || !img.url) ? item : img.url} alt="Not Available" />
      <h1>{name}</h1>
    </div> 
  );
}

export default Cat;
