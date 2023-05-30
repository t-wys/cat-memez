import { useSelector } from 'react-redux';
import { Meme } from '../components/Meme';
import { PageTitle } from '../components/PageTitle';

function BestMemes() {
    const memeList = useSelector(state => state.bestMemes);

    return (<div>
        <section>
            <PageTitle title="Top-notch stuff" />
            <p>Only the best memez, approved by community</p>
            <p>The meme must get <em>100+ votes</em> with <em>over 66% upvotes</em> to claim its spot among the best</p>
        </section>
        <section className="meme-list">
            {memeList.toSorted((a, b) => (b.rating / b.votesCount) - (a.rating / a.votesCount)).map(meme => <Meme meme={meme} key={meme.id} />)}
        </section>
    </div>)
}

export default BestMemes;
