import { NavLink } from "react-router-dom"
import "./nav.css"
import iconCart from "../../assets/icon/shopping-cart.svg"

export default function Nav() {
    return (
        <nav className="myContainer mt-1 shadow-md mb-20">
            <div className="father">
                <h1 className="text-[30px] font-bold">PC-Shop</h1>
                <div className="links">
                    <ul>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'text-blue-600 font-bold' : 'text-black-500'
                            }
                        >
                            <li className="font-[500] cursor-pointer link">Home</li>
                        </NavLink>
                        <NavLink
                            to="/product"
                            className={({ isActive }) =>
                                isActive ? 'text-blue-600 font-bold' : 'text-black-500'
                            }
                        >
                            <li className="font-[500] cursor-pointer ml-5 link">Products</li>
                        </NavLink>
                        <NavLink
                            to="/card"
                            className={({ isActive }) =>
                                isActive ? 'text-blue-600 font-bold' : 'text-black-500'
                            }

                        >
                            <li>
                                <img src={iconCart} alt="cart" className="ml-5" />
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}