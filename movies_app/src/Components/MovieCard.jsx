export default function MovieCard(props){
    let{movieObj,addToWatchList,handleRemoveWatchList,handleWatchList,name,poster_path}=props;

    function isContain(movieObj){
        for(let i=0;i<addToWatchList.length;i++){
            if(addToWatchList[i].id === movieObj.id){
                return true;
            }
        }
        return false;
    }
    return(
        <div className="hover:cursor-pointer rounded-xl h-[40vh] w-[200px] bg-cover bg-center flex items-end flex-col justify-between overflow-hidden hover:scale-110" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
            {isContain(movieObj)?
            <div  onClick={()=>handleRemoveWatchList(movieObj)}className="m-4 bg-gray-900 flex justify-center items-center h-8 w-8 rounded-lg ">&#10060;</div>:
            <div onClick={()=>handleWatchList(movieObj)} className="m-4 bg-gray-900 flex justify-center items-center h-8 w-8 rounded-lg ">&#128525;</div>}
            
            <div className="text-xl text-white bg-gray-900/60 w-full p-2 text-center">{name}</div>
        </div>
    )
}