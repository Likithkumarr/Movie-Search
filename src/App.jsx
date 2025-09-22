import React, { useState } from 'react'

const App = () => {
  const [search,setSearch]=useState("")
  const [data,setData]=useState([])

  function changeHandler(e){
    setSearch(e.target.value)
  }
  function submitHandler(e){
    e.preventDefault()
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=263d22d8`)
    .then(res=>res.json())
    .then(data=>setData(data.Search))
    .catch(err=>console.log(err))
  }
  return (
    <div>
      <center>
        <h1>Search Your Favorite Movie</h1>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder='enter movie name' value={search} onChange={changeHandler}/><br/><br/>
          <input type="submit" value="search"/><br/><br/>
        </form>
        <div className="row">
          {data.map(movie=>
          <div className='col-md-4'>
          <div className="card" style={{"width":"18rem"}} key={movie.imdbID}>
            <img src={movie.Poster} className="card-img-top" alt={movie.Title}/>
            <div className="card-body">
              <h4 className="card-title">{movie.Title}</h4>
              <a href={movie.Poster} className="btn btn-primary" /* download */
              onClick={()=>download(movie.Poster)}>Download Poster</a>
            </div>
          </div>
          </div>
          )}
        </div>
      </center>
    </div>
  )
}

export default App
