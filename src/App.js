import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Layout from './pages/Layout';
import LatestMemes from './pages/LatestMemes';
import TrendingMemes from './pages/TrendingMemes';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<LatestMemes/>} />
          <Route path='/trending' element={<TrendingMemes/>} />
          <Route path='/about' element={<About/>} />
          <Route path='*' element={<PageNotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
