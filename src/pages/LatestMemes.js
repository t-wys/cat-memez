import { useSelector } from 'react-redux';
import { Meme } from '../components/Meme';
import { PageTitle } from '../components/PageTitle';

function LatestMemes() {
    const memeList = useSelector(state => state.allMemes);

    return (<div>
        <section>
            <PageTitle title={<>New funny cat memez!
                <span className="excesive-exlamation-marks-1">1!!</span>
                <span className="excesive-exlamation-marks-2">!11</span>
                <span className="excesive-exlamation-marks-3">one</span></>} />
            <p>The latest content from our users</p>
        </section>
        <section className="meme-list">
            {memeList.toSorted((a, b) => b.datePublished - a.datePublished).map(meme => <Meme meme={meme} key={meme.id} />)}
        </section>
    </div>)
}

export default LatestMemes;
