const votesRatio = 1.5;
const minVotes = 100;

export const checkMeme = (rating, votesCount) => {
    return votesCount >= minVotes && rating * votesRatio > votesCount;
}
