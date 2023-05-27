import { useDispatch } from "react-redux";

export const Meme = ({ meme }) => {
    const dispatch = useDispatch();

    const handleUpvote = () => {
        dispatch({
            type: 'CAST_VOTE',
            payload: {
                memeId: meme.id,
                vote: 1
            }
        });
    }

    const handleDownvote = () => {
        dispatch({
            type: 'CAST_VOTE',
            payload: {
                memeId: meme.id,
                vote: -1
            }
        });
    }

    return (<div className="meme-card">
        <h4 className="meme-title">{ meme.title }</h4>
        <div className="meme-img-container">
            <img className="meme-img" src={meme.image} alt={meme.title} />
        </div>
        <div className="meme-rating">
            <span>{ meme.rating } / { meme.votesCount } ({ Math.round(100 * meme.rating/meme.votesCount) }%)</span>
            <button className="voting-btn upvote" onClick={handleUpvote}>Yeah!</button>
            <button className="voting-btn downvote" onClick={handleDownvote}>Meh</button>
        </div>
    </div>)
}
