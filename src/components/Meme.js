import { useDispatch } from "react-redux";

export const Meme = ({ meme }) => {
    const dispatch = useDispatch();

    const handleUpvote = () => {
        // TODO: Check if vote is already casted and pick either CAST_VOTE or REVOKE_VOTE actions
        dispatch({
            type: 'CAST_VOTE',
            payload: {
                memeId: meme.id,
                vote: 1
            }
        });
    }

    const handleDownvote = () => {
        // TODO: Check if vote is already casted and pick either CAST_VOTE or REVOKE_VOTE actions
        dispatch({
            type: 'CAST_VOTE',
            payload: {
                memeId: meme.id,
                vote: -1
            }
        });
    }

    return (<div className="meme-card">
        <div className="meme-card-header">
            <h4 className="meme-title">{ meme.title }</h4>
            <p className="meme-subtitle">2023-05-06 by <span className="meme-author">User</span></p>
        </div>
        <div className="meme-card-content">
            <img className="meme-img" src={meme.image} alt={meme.title} />
        </div>
        <div className="meme-card-footer">
            <span>
                <span className="upvotes-counter" title="upvotes count">
                    { meme.rating }
                </span>
                &nbsp;
                <span title="upvotes to total votes count">
                    ({ Math.round(100 * meme.rating/meme.votesCount) }%)
                </span>
            </span>
            <div className="voting-buttons">
                <button className={"voting-btn" + (meme.userVote === 1 ? " voted": "")} onClick={handleUpvote}>
                    Yeah! Paws up!
                </button>
                <button className={"voting-btn" + (meme.userVote === -1 ? " voted": "")} onClick={handleDownvote}>
                    Meh
                </button>
            </div>
        </div>
    </div>)
}
