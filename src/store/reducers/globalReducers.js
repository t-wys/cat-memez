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
            return getStateAfterVoting(state, action.payload);
        }
        case 'REVOKE_VOTE': {
            return getStateAfterVoting(state, action.payload);
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

const getStateAfterVoting = (state, payload) => {
    const memeIdx = state.allMemes.findIndex(m => m.id === payload.memeId);
            
    if (memeIdx !== -1) {
        const meme = state.allMemes[memeIdx];
        const userPreviousVote = meme.userVote;

        const allMemesNew = copyListOfObjects(state.allMemes);
        const memeNew = allMemesNew[memeIdx];

        // update meme rating
        // case #1: user didn't vote in the past
        if (userPreviousVote === 0 && payload.vote !== 0) {
            memeNew.rating += payload.vote;
            memeNew.votesCount += 1;
        }
        // case #2: user is revoking his vote
        else if (userPreviousVote !== 0 && payload.vote === 0) {
            memeNew.rating -= userPreviousVote;
            memeNew.votesCount -= 1;
        }
        // case #3: user changes vote
        else if (userPreviousVote !== 0 && payload.vote !== 0) {
            if (userPreviousVote !== payload.vote) {
                // compensate for previous vote + cast actual vote
                memeNew.rating += 2 * payload.vote;
            } else {
                // case #3b: shouldn't happen: previous and new vote are the same
                console.warn(`[memesReducer] Unexpected input for meme ${meme.id}: both previous and next vote have the same value: ${userPreviousVote}, ${payload.vote}`);
            }
        }
        // case #4: shouldn't happen: previous and new vote are 0
        else {
            console.warn(`[memesReducer] Unexpected input for meme ${meme.id}: both previous and next vote values are 0`);
        }

        memeNew.userVote = payload.vote;
        allMemesNew[memeIdx] = memeNew;

        let bestMemesNew = copyListOfObjects(state.bestMemes);

        const isBestBeforeVote = checkMeme(meme.rating, meme.votesCount);
        console.log(`BEFORE: rating=${meme.rating} | count=${meme.votesCount} | isBest=${isBestBeforeVote}`)
        const isBestAfterVote = checkMeme(memeNew.rating, memeNew.votesCount);
        console.log(`AFTER: rating=${memeNew.rating} | count=${memeNew.votesCount} | isBest=${isBestAfterVote}`)
        
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

const copyListOfObjects = (arr) => {
    return arr.map(obj => { return { ...obj }})
}
