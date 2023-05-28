import { checkMeme } from "../../utils/utils";

const initState = {
    allMemes: [],
    bestMemes: []
}

export const memesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_MEMES': {
            return { ...state, allMemes: action.payload.allMemes, bestMemes: action.payload.bestMemes };
        }
        case 'CAST_VOTE': {
            const memeIdx = state.allMemes.findIndex(m => m.id === action.payload.memeId);
            
            if (memeIdx !== -1) {
                const meme = state.allMemes[memeIdx];
                
                const isBestBeforeVote = checkMeme(meme.rating, meme.votesCount);
                const isBestAfterVote = checkMeme(meme.rating + action.payload.vote, meme.votesCount + 1);

                const allMemesNew = [...state.allMemes];
                const memeNew = allMemesNew[memeIdx];

                // update meme rating
                memeNew.rating += action.payload.vote;
                memeNew.userVote = action.payload.vote;
                memeNew.votesCount += 1;
                allMemesNew[memeIdx] = memeNew;

                let bestMemesNew = [...state.bestMemes];
                
                // promote entry to the bestMemes list
                if (!isBestBeforeVote && isBestAfterVote) {
                    bestMemesNew.push(memeNew);
                }
                // remove entry from the bestMemes list
                else if (isBestBeforeVote && !isBestAfterVote) {
                    bestMemesNew = bestMemesNew.filter(m => m.id !== memeNew.id);
                }
                
                return { ...state, allMemes: allMemesNew, bestMemes: bestMemesNew };
            }

            return state;
        }
        case 'REVOKE_VOTE': {
            // TODO: Apply logic similar to 'CAST_VOTE'
            return state;
        }
        case 'ADD_MEME': {
            return state;
        }
        default: {
            console.error(`[memesReducer] Unknown action type: ${action.type}`);
            return state;
        }
    }
}
