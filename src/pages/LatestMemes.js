function LatestMemes({ memeList }) {
    return (<div>
        <h1>New funny cat memez!!!1!11one</h1>
        <ul>
            {memeList.map(meme => <li key={meme.id}>{ meme.title }</li>)}
        </ul>
    </div>)
}

export default LatestMemes;
