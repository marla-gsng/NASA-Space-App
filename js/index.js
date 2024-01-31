import { API_Key_NASA } from "./credentials.js";


const nasaCall = () => {
  const randomNumber = Math.floor(Math.random() * 30);

  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_Key_NASA}&date=2023-01-${randomNumber}`
  )
    .then((response) => response.json())
    // .then((json) => console.log(json))
    .then((data) => {
     let allimage=document.querySelectorAll("img");//

      if (allimage.length<=1){//
        const paragraph = document.createElement("p");
        paragraph.id = "myparagraph";//
      paragraph.textContent = data.explanation;
      paragraph.style.fontSize = "20px";
      const image = document.createElement("img");
      
      image.id = "myimage";//
      image.src = data.hdurl;
      image.style.width = "500px";
      image.style.height = "500px";
      image.style.margin = "auto";
      document.body.appendChild(paragraph);
      document.body.appendChild(image);
      }
      else//
      {
     const paragraph = document.querySelector("#myparagraph")
      paragraph.textContent = data.explanation;
    
     const image = document.querySelector("#myimage")
    
      image.src = data.hdurl;
     
      }
    });
};


const gtn = document.querySelector('#gtn');

gtn.addEventListener('click', (event) => {
  event.preventDefault()
  nasaCall()
 
})