import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

function Layout() {
    return (
        <>
            <Navbar />
            <main id="main-content">
                <Outlet/>
            </main>
        </>
    )
}

export default Layout;
