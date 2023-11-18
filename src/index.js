import React from "react";
import  ReactDOM  from "react-dom"
import "./main.css"
import Card from "./box";

function App(){

  let[movies,setmovies]=React.useState([])
  let[s,sets]=React.useState("")
  
  let searchMovies= async(title)=>{
    let response=await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=52a872d9&s=${title}`)
    let data= await response.json()

    setmovies(data.Search)

  }
  function handleChange(event){
    sets(event.target.value)

  }

  function search(){
    searchMovies(s)
  }
  React.useEffect(()=>{
    searchMovies("batman")
  },[])




  return(
    <div className="movie">
      <h1 className="logo">MovieLand</h1>
      <div className="movie-search">
        <input onChange={handleChange} placeholder="Enter Movie"></input>
        <button onClick={search}>Search</button>
      </div>
      <div className="movie-content">
        {movies.map((x)=>(
          <Card title={x.Title} img={x.Poster} year={x.Year} />
        ))}
          
      </div>

    </div>
  )
}

ReactDOM.render(<App/>,document.querySelector("#root"))