import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Layout from './pages/Layout';
import LatestMemes from './pages/LatestMemes';
import TrendingMemes from './pages/TrendingMemes';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';

function App() {
  const [allMemes, setAllMemes] = useState([]);
  const [trendingMemes, setTrendingMemes] = useState([]);

  const checkMeme = (memeData) => {
    return memeData.upvotes > 3 * memeData.downvotes;
  }

  const getData = () => {
    fetch('data.json', { headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }})
    .then(response => {
      return response.json();
    })
    .then(respJson => {
      setAllMemes(respJson);
      setTrendingMemes(respJson.filter(meme => checkMeme(meme)));
    })
    .catch(err => {
      console.error('Error fetching data from json file', err);
    })
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<LatestMemes memeList={allMemes} />} />
          <Route path='/trending' element={<TrendingMemes memeList={trendingMemes} />} />
          <Route path='/about' element={<About/>} />
          <Route path='*' element={<PageNotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
