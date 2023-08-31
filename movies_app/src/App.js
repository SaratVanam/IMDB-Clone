import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import NavBar from './Components/NavBar';
import Watchlist from './Components/Watchlist';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={
          <>
            <Banner/>
            <Movies/>
          </>
        }>

        </Route>
        <Route path='/watchlist' element={
          <Watchlist/>
        }>

        </Route>
      </Routes>
    </BrowserRouter>
    // <>
    // <NavBar/>
    // <Banner/>
    // <Movies/>
    // <Watchlist/>
    // </>
  );
}

export default App;
