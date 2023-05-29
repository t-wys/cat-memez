import { useSelector } from 'react-redux';
import { Meme } from '../components/Meme';

function LatestMemes() {
    const memeList = useSelector(state => state.allMemes);

    return (<div>
        <h1>
            New funny cat memez!
            <span className='excesive-exlamation-marks-1'>1!!</span>
            <span className='excesive-exlamation-marks-2'>!11</span>
            <span className='excesive-exlamation-marks-3'>one</span>
        </h1>
        <hr className='decorative-hrule' />
        <p>The latest content from our users</p>
        <div className='meme-list'>
            {memeList.map(meme => <Meme meme={meme} key={meme.id} />)}
        </div>
    </div>)
}

export default LatestMemes;
