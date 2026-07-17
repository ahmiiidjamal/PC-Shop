import { useState, useEffect } from "react"
import Buttons from "../components/common/button"
import { Block } from "@mui/icons-material"
import '../App.css'
import Sidebar from "../components/layout/sidebar"
import Mainbar from "../components/layout/mainbar"
export default function Product() {
    const [open, setOpen] = useState("block")
    const [filter , setFilter] = useState("cpu")
    function showMenu() {
        if (open == "block") {
            setOpen("none")
        } else if (open == "none") {
            setOpen("block")
        }
    }
    // Source - https://stackoverflow.com/a/39345165
    // Posted by amoreton, modified by community. See post 'Timeline' for change history
    // Retrieved 2026-05-20, License - CC BY-SA 4.0

    useEffect(() => {
        window.scrollTo(0, 0)
        if (window.innerWidth <= 600) {
            console.log(true)
            setOpen("none")
        }
    }, [])
    return (
        <div style={{
            display: "flex"
        }}>
            {/* side bar of types pc */}
            <div className="myContainer"
                style={{
                    width: "200px",
                    // backgroundColor: "red",
                    display: open
                }}>
                <Sidebar filter={filter} setFilter={setFilter}/>
            </div>
            {/* product of pc */}
            <div className="myContainer"c
                style={{
                    width: "100%",
                    // backgroundColor: "blue"
                }}>
                <div className="block sm:hidden mt-5">
                    <Buttons text="filtering" func={showMenu}/>
                </div>
                <Mainbar filter={filter} setFilter={setFilter} />

            </div>
        </div>
    )
}