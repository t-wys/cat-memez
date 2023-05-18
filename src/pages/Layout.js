import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Latest</Link>
                    </li>
                    <li>
                        <Link to="/trending">Trending</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    )
}

export default Layout;
