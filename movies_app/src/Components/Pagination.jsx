
export default function Pagination({pageNo,handleNext,handlePrev}){
    

    return(
        <div className="flex justify-center h-5 p-4 m-4 items-center bg-blue-400">
            <div onClick={handlePrev} className="p-4 hover:cursor-pointer"><i className="fa-solid fa-arrow-left"></i></div>
            <div className="p-4 hover:cursor-pointer">{pageNo}</div>
            <div onClick={handleNext} className="p-4 hover:cursor-pointer"><i className="fa-solid fa-arrow-right"></i></div>
        </div>
    )
}