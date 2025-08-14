import "../src/css/App.css";
import Moviecard from './components/MovieCard'
import Favorites from './pages/Favorites';
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <MovieProvider>
      <main className='main-content'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/favorites' element={<Favorites />}></Route>
        </Routes>

      </main>

    </MovieProvider>
  );
}

export default App;
