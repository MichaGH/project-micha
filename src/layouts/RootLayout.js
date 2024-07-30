import { Outlet, NavLink } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="root-layout">
            <header>
                <div className="header-bar">
                    <div className="header-title">
                        <h1>Voya inc.</h1>
                    </div>
                    <div className="header-slogan">
                        <p>We satisfy the mothers</p>
                    </div>
                </div>

                <nav>
                    <NavLink>Home</NavLink>
                    <NavLink>Order</NavLink>
                    <NavLink>F.A.Q.</NavLink>
                    <NavLink>Reviews</NavLink>
                    <NavLink>Contact</NavLink>         
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
 
export default RootLayout;
