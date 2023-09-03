export default function MovieCard(props){
    return(
        <div className="hover:cursor-pointer rounded-xl h-[40vh] w-[200px] bg-cover bg-center flex items-end flex-col justify-between overflow-hidden hover:scale-110" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${props.poster_path})`}}>
            {props.addToWatchList.includes(props.id)?
            <div  onClick={()=>props.handleRemoveWatchList(props.id)}className="m-4 bg-gray-900 flex justify-center items-center h-8 w-8 rounded-lg ">&#10060;</div>:
            <div onClick={()=>props.handleWatchList(props.id)} className="m-4 bg-gray-900 flex justify-center items-center h-8 w-8 rounded-lg ">&#128525;</div>}
            
            <div className="text-xl text-white bg-gray-900/60 w-full p-2 text-center">{props.name}</div>
        </div>
    )
}