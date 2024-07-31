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
                        <p>We satisfy the <b><em>mothers</em></b></p>
                    </div>
                </div>

                <nav>
                    <NavLink to=''>Home</NavLink>
                    <NavLink to='order'>Order</NavLink>
                    <NavLink to='faq'>F.A.Q.</NavLink>
                    <NavLink to='reviews'>Reviews</NavLink>
                    <NavLink to='contact'>Contact</NavLink>         
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
 
export default RootLayout;
