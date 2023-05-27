import { useSelector } from 'react-redux';
import { Meme } from '../components/Meme';

function TrendingMemes() {
    const memeList = useSelector(state => state.bestMemes);

    return (<div>
        <h1>Top-notch stuff</h1>
        <div className='meme-list'>
            {memeList.map(meme => <Meme meme={meme} key={meme.id} />)}
        </div>
    </div>)
}

export default TrendingMemes;
