import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios"
import Pagination from "./Pagination";
function Movies(){
    let [movies, setMovies] = useState([]);
    let [pageNo, setPageNo] = useState(1);
    let [addToWatchList, setAddToWatchList]= useState([]);

    let handleWatchList=(movieId)=>{
        // console.log("inside handle Wathclist");
        // console.log(movieId);
        let newWatchList= [...addToWatchList,movieId]; // React will not be able to find out the changes and update on it's own, hence we need to pass a new reference each time so it gets rendered
        localStorage.setItem("moviesApp",JSON.stringify(newWatchList));
        setAddToWatchList(newWatchList);
    }
    console.log(addToWatchList);

    let handleRemoveWatchList=(movieId)=>{
        let filteredWatchList= addToWatchList.filter((id)=>{
            return id!==movieId;
        })
        localStorage.setItem("moviesApp",JSON.stringify(filteredWatchList));
        setAddToWatchList(filteredWatchList);
    }

    useEffect(()=>{
        let moviesFromLocalStorage= localStorage.getItem("moviesApp");
        setAddToWatchList(JSON.parse(moviesFromLocalStorage));
    },[])
    
    let handlePrev= ()=>{
        if(pageNo>1){
            setPageNo(pageNo-1);
        }
    }

    let handleNext= ()=>{
        setPageNo(pageNo+1);
    }

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
                    return <MovieCard key={movieObj.id} id={movieObj.id} addToWatchList={addToWatchList} handleWatchList={handleWatchList} handleRemoveWatchList={handleRemoveWatchList} name={movieObj.title} poster_path={movieObj.poster_path}/>
                })}
            </div>
            <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
        </div>
    )
}

export default Movies;