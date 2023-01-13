import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="p-5 bg-blue-800  shadow md:flex md:items-center md:justify-between">
                <div>
                    <span className="text-2xl text-cyan-200">
                        Movie 10
                    </span>
                </div>

                <ul className="md:flex md:items-center md:opacity-100 opacity-0 md:w-auto md:py-0 py-4 absolute md:pl-0 pl-7">
                    <li className="mx-4 my-6 md:my-0 ">
                        <a href="#" className="text-xl text-cyan-500 hover:text-cyan-300 duration-500">Home</a>
                    </li >
                    <li className="mx-4 my-6 md:my-0">
                        <a href="#" className="text-xl text-cyan-500 hover:text-cyan-300 duration-500">Serials</a>
                    </li>
                    <li className="mx-4 my-6 md:my-0">
                        <a href="#" className="text-xl text-cyan-500 hover:text-cyan-300 duration-500">Movies</a>
                    </li>

                </ul>
            </nav>

        );
    }
}

export default Navbar;