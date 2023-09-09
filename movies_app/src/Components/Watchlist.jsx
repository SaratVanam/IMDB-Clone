import { useEffect, useState } from "react";
import genreIds from "../Utilities/genres.js";

function Watchlist(props){

    let {addToWatchList,handleRemoveWatchList,setAddToWatchList} = props;
    let [genreList, setGenreList]= useState(["All Genres"]);

    let [currGenre, setGenre] = useState("All Genres");

    let [search, setSearch] = useState("");


    let handleFilter = (genre) =>{
        setGenre(genre)
    }

    let handleSearch = (e)=>{
        setSearch(e.target.value)
    }

    let ascending = ()=>{
        let sorted = addToWatchList.sort((movieA,movieB)=>{
            return movieA.vote_average-movieB.vote_average;
        })

        setAddToWatchList([...sorted]);
    }

    let descending = ()=>{
        let sorted = addToWatchList.sort((movieA,movieB)=>{
            return movieB.vote_average-movieA.vote_average;
        })

        setAddToWatchList([...sorted]);
    }

    useEffect(()=>{
        let temp=addToWatchList.map((movieObj)=>{
            return genreIds[movieObj.genre_ids[0]];
        })
        temp=new Set(temp);
        setGenreList(["All Genres", ...temp]);
    },[addToWatchList])

    return(
        <>
        <div className="h-[4rem] w-full justify-center gap-5 items-center flex text-white flex-wrap">
            {genreList.map((genre)=>{
               return <div key={genre} onClick={()=> handleFilter(genre)} className={currGenre===genre?"hover:cursor-pointer p-2 bg-blue-400 rounded-xl":"hover:cursor-pointer p-2 bg-gray-400 rounded-xl"}>{genre}</div>
            })}
            
        </div>
        <div className=" border h-[4rem] w-full justify-center flex my-2 items-center">
            <input onChange={handleSearch} value={search} className=" h-[2rem] text-lg border-none bg-gray-500 px-3 rounded-lg" type="text" placeholder="Search for a movie" />
        </div>
        <div  className="overflow-hidden rounded-lg border border-gray-900 m-5">
            <table className="w-full text-center">
                <thead className="bg-gray-500 border-b-2">
                    <tr>
                        <th>Name</th>
                        <th className="flex items-center">
                            <div><i onClick={ascending} className=" hover:cursor-pointer fa-solid fa-caret-up p-2"></i></div>
                            <div className="p-2">Ratings</div>
                            <div><i onClick={descending} className="hover:cursor-pointer fa-solid fa-caret-down p-2"></i></div></th>
                        <th>Popularity</th>
                        <th>Genre</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="border-b-2">
                    {addToWatchList.filter((obj)=>{
                        if(currGenre==="All Genres"){
                            return true;
                        }
                        else{
                            return genreIds[obj.genre_ids[0]] === currGenre;
                        }
                    })
                    .filter((o)=>{
                        return o.title.toLowerCase().includes(search.toLowerCase());
                    })
                    .map((movieObj)=>{
                        return <tr key={movieObj.id} className="border-b-2">
                        <td className="flex items-center">
                            <img className="h-[8rem] w-[10rem]" src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} alt="" />
                            <div className="w-full">{movieObj.title}</div>
                        </td>
                        <td>{movieObj.vote_average}</td>
                        <td>{movieObj.popularity}</td>
                        <td>{genreIds[movieObj.genre_ids[0]]}</td>
                        <td onClick={()=>handleRemoveWatchList(movieObj)}  className=" hover:cursor-pointer text-red-700">Delete</td>
                    </tr>
                    })}
                </tbody>
            </table>
        </div>
        </>
        
    )
}

export default Watchlist;