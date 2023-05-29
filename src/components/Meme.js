import { useDispatch } from "react-redux";
import { FavButton } from "./FavButton";

const upvoteValue = 1;
const downvoteValue = -1;

export const Meme = ({ meme }) => {
    const dispatch = useDispatch();

    const handleUpvote = () => {
        const isRevokingVote = meme.userVote === upvoteValue;
        dispatch({
            type: isRevokingVote ? 'REVOKE_VOTE' : 'CAST_VOTE',
            payload: {
                memeId: meme.id,
                vote: isRevokingVote ? 0 : upvoteValue
            }
        });
    }

    const handleDownvote = () => {
        const isRevokingVote = meme.userVote === downvoteValue;
        dispatch({
            type: isRevokingVote ? 'REVOKE_VOTE' : 'CAST_VOTE',
            payload: {
                memeId: meme.id,
                vote: isRevokingVote ? 0 : downvoteValue
            }
        });
    }

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
                <button className={"voting-btn" + (meme.userVote === upvoteValue ? " voted": "")} onClick={handleUpvote}>
                    Yeah! Paws up!
                </button>
                <button className={"voting-btn" + (meme.userVote === downvoteValue ? " voted": "")} onClick={handleDownvote}>
                    Meh
                </button>
            </div>
        </div>
    </div>)
}
