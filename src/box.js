import React from "react";

export default function Card(props){
  return(
    <div>
      <img src={props.img}></img>
      <h1>{props.title}</h1>
      <p>{props.year}</p>
    </div>
  )

}