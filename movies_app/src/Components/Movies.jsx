import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios"
import Pagination from "./Pagination";
function Movies(props){
    let{handleNext,handlePrev,pageNo,addToWatchList, setAddToWatchList,handleWatchList,handleRemoveWatchList}= props;
    let [movies, setMovies] = useState([]);
    

    useEffect(()=>{
        let moviesFromLocalStorage= localStorage.getItem("moviesApp");
        if(!moviesFromLocalStorage){
            return;
        }
        setAddToWatchList(JSON.parse(moviesFromLocalStorage));
      },[])

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=cd3b90152fe991306b189d1e8dd01428&page=${pageNo}`)
        .then(function(res){
        // console.log(res);
        // console.log(res.data.results)
        setMovies(res.data.results);
    })
    },[pageNo])


    
    return(
        <div className="p-5">
            <div className="text-2xl m-5 font-bold text-center">Trending Movies</div>
            <div className="flex flex-wrap justify-around gap-8">
                {movies.map((movieObj)=>{
                    // console.log(movieObj);
                    return <MovieCard key={movieObj.id} movieObj={movieObj} addToWatchList={addToWatchList} handleWatchList={handleWatchList} handleRemoveWatchList={handleRemoveWatchList} name={movieObj.title} poster_path={movieObj.poster_path}/>
                })}
            </div>
            <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
        </div>
    )
}

export default Movies;