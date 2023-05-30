function PageNotFound() {
    return (<section>
        <h1>Oops! Page not found</h1>
        <hr className="decorative-hrule" />
        <div className="img-404-container">
            <img className="img-404" src="page-not-found.png" alt="decorative" />
        </div>
        <p>Oh no! The page you are looking for has been annihilated by the angry space cat!</p>
    </section>)
}

export default PageNotFound;
