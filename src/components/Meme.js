import { FavButton } from './FavButton';
import { VotingButton } from './VotingButton';

export const Meme = ({ meme }) => {
    const upvoteValue = 1;
    const downvoteValue = -1;

    const publishDate = new Date(meme.datePublished);
    const publishDateString = publishDate.toISOString().substring(0, 10);
    const publishTimeString = publishDate.toISOString().substring(11, 16);

    return (<div className="meme-card">
        <div className="meme-card-header">
            <div className="card-title-bar">
                <h4 className="meme-title">{ meme.title }</h4>
                <FavButton meme={meme} />
            </div>
            <p className="meme-subtitle">{publishDateString} {publishTimeString} by <span className="meme-author">{meme.author}</span></p>
        </div>
        <div className="meme-card-content">
            <img className="meme-img" src={meme.image} alt={meme.title} />
        </div>
        <div className="meme-card-footer">
            <span>
                <span className="upvotes-counter has-tooltip" title="upvotes count">
                    { meme.rating }
                </span>
                &nbsp;
                (<span className="has-tooltip" title="upvotes to total votes">
                    { Math.round(100 * meme.rating/meme.votesCount) }%
                </span>)
            </span>
            <div className="voting-buttons">
                <VotingButton meme={meme} title="Yeah! Paws up!" voteValue={upvoteValue} />
                <VotingButton meme={meme} title="Meh" voteValue={downvoteValue} />
            </div>
        </div>
    </div>)
}
