import { useSelector } from 'react-redux';
import { Meme } from '../components/Meme';

function LatestMemes() {
    const memeList = useSelector(state => state.allMemes);

    return (<div>
        <h1>New funny cat memez!!!1!11one</h1>
        <div className='meme-list'>
            {memeList.map(meme => <Meme meme={meme} key={meme.id} />)}
        </div>
    </div>)
}

export default LatestMemes;
