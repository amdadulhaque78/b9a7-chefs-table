import { GoSearch } from "react-icons/go";
import { CgProfile } from "react-icons/cg";

const Header = () => {
    return (
        <>
        {/* Mobile device */}
            <div className="block lg:hidden">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a>
                                         Recipes
                                    </a>
                                </li>
                                <li>
                                    <a> 
                                        About
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="navbar-center">
                        <a className="btn btn-ghost text-xl font-black">
                            Recipe Calories
                        </a>
                    </div>

                    <div className="navbar-end">
                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        
                    </div>
                </div>
            </div>

                {/* large device */}

            <div className="hidden lg:block">
                <div className="flex pl-5 mt-2 lg:mt-0 lg:pl-0 justify-between items-center mb-10">

                    <div className="font-black text-2xl text-center flex items-center gap-3">
                        Recipe Calories
                    </div>

                    <div className="hidden lg:block">
                        <div className="flex items-center gap-5">
                            <button className="btn btn-ghost">Home</button>
                            <button className="btn btn-ghost">Recipes</button>
                            <button className="btn btn-ghost">About</button>
                            <button className="btn btn-ghost">Search</button>
                        </div>
                    </div>
                    
                    <div className="hidden lg:block">
                        <div className="flex gap-5 items-center ">
                            <div className="bg-[#150B2B0D] rounded-full px-6 py-3 flex items-center gap-3">
                                <span className="text-xl text-[#150B2BB3]">
                                    <GoSearch />
                                </span>
                                <input className="border-none outline-none bg-[#150b2b00] text-base" type="text" placeholder="Search..." />
                            </div>
                            <span className="text-4xl bg-[#0BE58A] rounded-full"><CgProfile /></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;