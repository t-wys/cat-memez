import { PageTitle } from "../components/PageTitle";

function PageNotFound() {
    return (<section>
        <PageTitle title="Oops! Page not found" />
        <div className="img-404-container">
            <img className="img-404" src="page-not-found.png" alt="decorative" />
        </div>
        <p>Oh no! The page you are looking for has been annihilated by the angry space cat!</p>
    </section>)
}

export default PageNotFound;
