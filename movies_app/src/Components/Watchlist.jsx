

function Watchlist(){
let movies=[
    
    {"adult":false,
    "backdrop_path":"/35z8hWuzfFUZQaYog8E9LsXW3iI.jpg",
    "id":335977,
    "title":"Indiana Jones and the Dial of Destiny",
    "original_language":"en",
    "original_title":"Indiana Jones and the Dial of Destiny",
    "overview":"Finding himself in a new era, and approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.",
    "poster_path":"/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
    "media_type":"movie",
    "genre_ids":[12,28,14],
    "popularity":2549.382,
    "release_date":"2023-06-28",
    "video":false,"vote_average":6.637,
    "vote_count":1270},
    {"adult":false,
    "backdrop_path":"/35z8hWuzfFUZQaYog8E9LsXW3iI.jpg",
    "id":335977,
    "title":"Indiana Jones and the Dial of Destiny",
    "original_language":"en",
    "original_title":"Indiana Jones and the Dial of Destiny",
    "overview":"Finding himself in a new era, and approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.",
    "poster_path":"/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
    "media_type":"movie",
    "genre_ids":[12,28,14],
    "popularity":2549.382,
    "release_date":"2023-06-28",
    "video":false,"vote_average":6.637,
    "vote_count":1270},
    {"adult":false,
    "backdrop_path":"/35z8hWuzfFUZQaYog8E9LsXW3iI.jpg",
    "id":335977,
    "title":"Indiana Jones and the Dial of Destiny",
    "original_language":"en",
    "original_title":"Indiana Jones and the Dial of Destiny",
    "overview":"Finding himself in a new era, and approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.",
    "poster_path":"/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
    "media_type":"movie",
    "genre_ids":[12,28,14],
    "popularity":2549.382,
    "release_date":"2023-06-28",
    "video":false,"vote_average":6.637,
    "vote_count":1270},
    {"adult":false,
    "backdrop_path":"/35z8hWuzfFUZQaYog8E9LsXW3iI.jpg",
    "id":335977,
    "title":"Indiana Jones and the Dial of Destiny",
    "original_language":"en",
    "original_title":"Indiana Jones and the Dial of Destiny",
    "overview":"Finding himself in a new era, and approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.",
    "poster_path":"/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
    "media_type":"movie",
    "genre_ids":[12,28,14],
    "popularity":2549.382,
    "release_date":"2023-06-28",
    "video":false,"vote_average":6.637,
    "vote_count":1270}
     
]

    return(
        <>
        <div className="h-[4rem] w-full justify-center gap-5 items-center flex text-white">
            <div className=" p-2 bg-blue-400 rounded-xl">All Genres</div>
            <div className=" p-2 bg-blue-400 rounded-xl">Action</div>
            <div className=" p-2 bg-blue-400 rounded-xl">Sci-Fi</div>
        </div>
        <div className=" border h-[4rem] w-full justify-center flex my-2 items-center">
            <input className=" h-[2rem] text-lg border-none bg-gray-500 px-3 rounded-lg" type="text" placeholder="Search for a movie" />
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-900 m-5">
            <table className="w-full text-center">
                <thead className="bg-gray-500 border-b-2">
                    <tr>
                        <th>Name</th>
                        <th className="flex items-center">
                            <div><i class="fa-solid fa-caret-up p-2"></i></div>
                            <div className="p-2">Ratings</div>
                            <div><i class="fa-solid fa-caret-down p-2"></i></div></th>
                        <th>Popularity</th>
                        <th>Genre</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="border-b-2">
                    {movies.map((movieObj)=>{
                        return <tr>
                        <td className="flex items-center">
                            <img className="h-[8rem] w-[10rem]" src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} alt="" />
                            <div className="w-full">{movieObj.title}</div>
                        </td>
                        <td>{movieObj.vote_average}</td>
                        <td>{movieObj.popularity}</td>
                        <td>Action</td>
                        <td className="text-red-700">Delete</td>
                    </tr>
                    })}
                </tbody>
            </table>
        </div>
        </>
        
    )
}

export default Watchlist;