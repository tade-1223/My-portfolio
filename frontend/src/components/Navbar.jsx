import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";


function Navbar() {

    const [open, setOpen] = useState(false);


    const closeMenu = () => {
        setOpen(false);
    };


    const navClass = ({ isActive }) =>
        isActive ? "nav-link active" : "nav-link";


    return (

        <header className="navbar">

            <div className="container navbar-container">

                {/* LOGO */}

                <Link
                    to="/"
                    className="logo"
                    onClick={closeMenu}
                    aria-label="Tadesse Belay home"
                >
                    TB<span>.</span>
                </Link>


                {/* NAVIGATION */}

                <nav
                    className={
                        open
                            ? "nav-menu active"
                            : "nav-menu"
                    }
                    aria-label="Main navigation"
                >

                    <NavLink
                        to="/"
                        end
                        className={navClass}
                        onClick={closeMenu}
                    >
                        Home
                    </NavLink>


                    <NavLink
                        to="/about"
                        className={navClass}
                        onClick={closeMenu}
                    >
                        About
                    </NavLink>


                    <NavLink
                        to="/projects"
                        className={navClass}
                        onClick={closeMenu}
                    >
                        Projects
                    </NavLink>


                    <NavLink
                        to="/blog"
                        className={navClass}
                        onClick={closeMenu}
                    >
                        Blog
                    </NavLink>


                    <NavLink
                        to="/contact"
                        className={navClass}
                        onClick={closeMenu}
                    >
                        Contact
                    </NavLink>

                </nav>


                {/* MOBILE BUTTON */}

                <button
                    type="button"
                    className="menu-button"
                    onClick={() => setOpen((previous) => !previous)}
                    aria-label={
                        open
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={open}
                >

                    {open ? (
                        <X size={25} />
                    ) : (
                        <Menu size={25} />
                    )}

                </button>

            </div>

        </header>
    );
}


export default Navbar;