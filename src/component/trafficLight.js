const TrafficLight = ({ color }) => {
  return (
    <div className="traffi-light">     
    <div  style={{ backgroundColor: color === "red" ? "red" : "grey", width: "20px", height: "20px", borderRadius:"50%"}}>
    </div>
    <div  style={{ backgroundColor: color === "yellow" ? "yellow" : "grey", width: "20px", height: "20px", borderRadius:"50%"}}>
    </div>
    <div  style={{ backgroundColor: color === "green" ? "green" : "grey", width: "20px", height: "20px", borderRadius:"50%"}}>
    </div>
   
</div>
    )
    }
export default TrafficLight;