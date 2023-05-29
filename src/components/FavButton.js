import { useDispatch } from 'react-redux'

export const FavButton = ({ meme }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({
            type: 'TOGGLE_FAVOURITE',
            payload: {
                memeId: meme.id
            }
        });
    }

    return (<span className="fav-meme-icon" onClick={handleClick} title={ meme.isFavourite ? "Remove from favorites" : "Add to favorites" }>
        { meme.isFavourite ? <>&#9733;</> : <>&#9734;</> }
    </span>)
}