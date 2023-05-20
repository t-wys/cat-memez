function TrendingMemes({ memeList }) {
    return (<div>
        <h1>Top-notch stuff</h1>
        <ul>
            {memeList.map(meme => <li key={meme.id}>{ meme.title }</li>)}
        </ul>
    </div>)
}

export default TrendingMemes;
