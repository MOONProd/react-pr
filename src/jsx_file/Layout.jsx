import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
    return (
        <div>
            <header style={{ backgroundColor: '#f8f9fa', padding: '10px' }}>
                <h1>My Application</h1>
                <nav>
                    <Link to="/">Home</Link> | <Link to="/test">Test</Link> | <Link to="/about">About</Link>
                </nav>
            </header>
            
            <div style={{ display: 'flex' }}>
                <aside style={{ width: '200px', backgroundColor: '#e9ecef', padding: '10px' }}>
                    <p>Sidebar content</p>
                </aside>
                
                <main style={{ flex: 1, padding: '10px' }}>
                    <Outlet />
                </main>
            </div>
            
            <footer style={{ backgroundColor: '#f8f9fa', padding: '10px', marginTop: '20px' }}>
                <p>Footer content</p>
            </footer>
        </div>
    );
};
