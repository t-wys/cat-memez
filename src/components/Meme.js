import { FavButton } from "./FavButton";
import { VotingButton } from "./VotingButton";

export const Meme = ({ meme }) => {
    const upvoteValue = 1;
    const downvoteValue = -1;

    return (<div className="meme-card">
        <div className="meme-card-header">
            <div className="card-title-bar">
                <h4 className="meme-title">{ meme.title }</h4>
                <FavButton meme={meme} />
            </div>
            <p className="meme-subtitle">2023-05-06 by <span className="meme-author">User</span></p>
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
