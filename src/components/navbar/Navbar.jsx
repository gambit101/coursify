
const Navbar = () => {
    return (
        <div className="navbar bg-[#003153]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Services</a></li>
                                <li><a>Jobs</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-4xl text-yellow-400 ml-10">Coursify</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold text-white ">
                    <li><a className="hover:text-yellow-300">Home</a></li>
                    <li><a className="hover:text-yellow-300">Services</a></li>
                    <li><a className="hover:text-yellow-300">Help</a></li>
                    <li><a className="hover:text-yellow-300">Login</a></li>
                    <li><a className="hover:text-yellow-300">Register</a></li>
                    <li><a className="hover:text-yellow-300">Contact Us</a></li>
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;