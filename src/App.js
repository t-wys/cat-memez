import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import logo from './logo.svg';
import { checkMeme } from './utils/utils';
import './App.css';
import Layout from './pages/Layout';
import LatestMemes from './pages/LatestMemes';
import BestMemes from './pages/BestMemes';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';

function App() {
  const dispatch = useDispatch();

  const getData = () => {
    fetch('data.json', { headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }})
    .then(response => {
      return response.json();
    })
    .then(respJson => {
      dispatch({
        type: 'LOAD_MEMES',
        payload: {
          allMemes: respJson,
          bestMemes: respJson.filter(meme => checkMeme(meme.rating, meme.votesCount))
        }
      })
    })
    .catch(err => {
      console.error('Error fetching data from json file', err);
    })
  };

  useEffect(() => {
    getData();
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<LatestMemes />} />
          <Route path='/best' element={<BestMemes />} />
          <Route path='/about' element={<About/>} />
          <Route path='*' element={<PageNotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
