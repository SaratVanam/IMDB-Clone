import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import NavBar from './Components/NavBar';
import Watchlist from './Components/Watchlist';
import { useState,useEffect } from 'react';

function App() {

  let [pageNo, setPageNo] = useState(1);
    
    let handlePrev= ()=>{
        if(pageNo>1){
            setPageNo(pageNo-1);
        }
    }

    let handleNext= ()=>{
        setPageNo(pageNo+1);
    }

  let [addToWatchList, setAddToWatchList]= useState([]);
  let handleWatchList=(movieObj)=>{
    let newWatchList= [...addToWatchList,movieObj]; // React will not be able to find out the changes and update on it's own, hence we need to pass a new reference each time so it gets rendered
    localStorage.setItem("moviesApp",JSON.stringify(newWatchList));
    setAddToWatchList(newWatchList);
}

let handleRemoveWatchList=(movieObj)=>{
    let filteredWatchList= addToWatchList.filter((movie)=>{
        return movie.id!==movieObj.id;
    })
    localStorage.setItem("moviesApp",JSON.stringify(filteredWatchList));
    setAddToWatchList(filteredWatchList);
}

useEffect(()=>{
  let moviesFromLocalStorage= localStorage.getItem("moviesApp");
  if(!moviesFromLocalStorage){
      return;
  }
  setAddToWatchList(JSON.parse(moviesFromLocalStorage));
},[])



  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={
          <>
            <Banner/>
            <Movies handleNext={handleNext} handlePrev={handlePrev} pageNo={pageNo} setAddToWatchList={setAddToWatchList} addToWatchList={addToWatchList} handleRemoveWatchList={handleRemoveWatchList} handleWatchList={handleWatchList}/>
          </>
        }>

        </Route>
        <Route path='/watchlist' element={
          <Watchlist setAddToWatchList={setAddToWatchList} addToWatchList={addToWatchList} handleRemoveWatchList={handleRemoveWatchList}/>
        }>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
