import { useSelector } from 'react-redux';
import { Meme } from '../components/Meme';

function BestMemes() {
    const memeList = useSelector(state => state.bestMemes);

    return (<div>
        <h1>Top-notch stuff</h1>
        <hr className="decorative-hrule" />
        <p>Only the best memez, approved by community</p>
        <p>The meme must get <em>100+ votes</em> with <em>over 66% upvotes</em> to claim its spot among the best</p>
        <div>
            {memeList.toSorted((a, b) => (b.rating / b.votesCount) - (a.rating / a.votesCount)).map(meme => <Meme meme={meme} key={meme.id} />)}
        </div>
    </div>)
}

export default BestMemes;
