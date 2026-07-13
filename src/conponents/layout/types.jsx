import BoxOne from "../common/boxOne";

export default function Types() {
  return (
    <div className="myContainer" style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",
        marginTop:"40px",
        gap:"20px"
    }}>
      <BoxOne  to={"/product"} name={"Processors"} explain={"The processor is the heart of your computer, and choosing the right type will benefit you in the future."}/>
      <BoxOne  to={"/product"} name={"Graphics Cards"} explain={"The graphics processor is responsible for displaying graphics at the best quality and is the foundation for games and designs."}/>
      <BoxOne  to={"/product"} name={"Rams"} explain={"Random Access Memory (RAM) is the high-speed line that transfers data from storage to the processor; more RAM means better performance."}/>
    </div>
  )
}
