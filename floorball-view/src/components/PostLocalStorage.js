//import React from 'react';

const PostLocalStorage = () => {

  let data = localStorage.getItem("myCat")

  if(data){

    fetch("http://localhost:57673/globals/log", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      return response.json();
    })
    .then( res => {
      localStorage.removeItem("myCat");
      console.log(res)
    })
    .catch(err => console.log(err));
    
    console.log(data)

  }
};

export default PostLocalStorage;