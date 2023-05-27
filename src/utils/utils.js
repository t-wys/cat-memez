const votesRatio = 1.5;

export const checkMeme = (rating, votesCount) => {
    return rating * votesRatio > votesCount;
}
