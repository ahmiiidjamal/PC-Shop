import ScrollAnimate from "./scrollanimate"
function MainWord({name}) {
  return (
    <div>
      <ScrollAnimate>
    <h1 style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        fontWeight:"bold",
        fontSize:"45px",
        margin:"40px 0px",
        color:"#333"
    }}>{name}</h1>
    </ScrollAnimate>
    </div>
  )
}

export default MainWord
