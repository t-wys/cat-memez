import { useDispatch } from "react-redux"

export const VotingButton = ({ meme, title, voteValue }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        const isRevokingVote = meme.userVote === voteValue;
        dispatch({
            type: isRevokingVote ? 'REVOKE_VOTE' : 'CAST_VOTE',
            payload: {
                memeId: meme.id,
                vote: isRevokingVote ? 0 : voteValue
            }
        });
    }

    return (<button className={"voting-btn" + (meme.userVote === voteValue ? " voted": "")} onClick={handleClick}>
        {title}
    </button>)
}
