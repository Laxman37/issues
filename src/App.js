import DevicesCard from "./Component/DevicesCount/DevicesCard";
import TimePickerComponent from "./Component/TimePicker";

export default function App() {
  return (
    <div className="container">
      <div className="d-flex horizontal-scroll" style={{overflowX: "auto", whiteSpace: "nowrap" }}>

      {/* your app App */} <DevicesCard /> <DevicesCard />
      <DevicesCard />
      <DevicesCard />
      <DevicesCard />
      <DevicesCard />
      <DevicesCard />
      <DevicesCard />
      </div>
    </div>
  );
}
