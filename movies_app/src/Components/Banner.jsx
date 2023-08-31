import axios from "axios";
import { useEffect, useState } from "react";

function Banner(){
    let [path,setPath]= useState("");
    let [title,setTitle] =useState("");


    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=cd3b90152fe991306b189d1e8dd01428')
        .then(function(res){
            console.log(res.data.results[0].poster_path);
            setPath(res.data.results[0].poster_path);
            setTitle(res.data.results[0].title);
        })
    },[]);
    return(
        <div className="h-[20vh] md:h-[70vh] bg-cover bg-center flex items-end"
         style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${path})`}}>
            <div className="text-xl text-white bg-gray-900/60 w-full p-4 text-center">{title}</div>
         </div>
    )
}

export default Banner;