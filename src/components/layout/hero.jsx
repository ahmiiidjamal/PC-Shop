import { Link } from "react-router-dom"
import motherBoardImg from "../../assets/images/mo.png"
import Buttons from "../common/Button"
import "./hero.css"

export default function Hero() {
    return (
        <div className="hero flex items-center h-[330px] justify-evenly all">
            <div className="w-[350px] textField ">
                <h1 className="text-[50px] font-bold">Build Your PC</h1>
                <p>precision engineering meets minimalist design. Select the finest components for your next masterpeice</p>
                <Link to="/product">
                    <Buttons text="Start building" />
                </Link>
            </div>
            <div className="w-[350px] imgmo">
                <img src={motherBoardImg} alt="motherboard" />
            </div>
        </div>
    )
}