export default function MovieCard(props){
    return(
        <div className="hover:cursor-pointer rounded-xl h-[40vh] w-[200px] bg-cover bg-center flex items-end overflow-hidden hover:scale-110" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${props.poster_path})`}}>
            <div className="text-xl text-white bg-gray-900/60 w-full p-2 text-center">{props.name}</div>
        </div>
    )
}