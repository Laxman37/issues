import React from "react";
import deviceImage from "../../Assets/Images/device.svg";
import { Switch } from "antd";

const DevicesCard = () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div
      className=""
      style={{
        width: "350px",
        background: "white",
        border: "1px solid gray",
        padding: "10px",
        borderRadius: "10px",
        marginTop: "10px",
        margin: "10px 5px",
      }}
    >
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ width: "300px", margin: "auto" }}
      >
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "#e5f6fa",
          }}
        >
          <img
            src={deviceImage}
            alt=""
            width={45}
            height={45}
            //   style={{ borderRadius: "50%" }}
          />
        </div>

        <div>
          <Switch defaultChecked onChange={onChange} />
        </div>
      </div>
      <div
        className="device-name-title pt-3 ps-3 font-bold "
        style={{ fontSize: "20px" }}
      >
        <h3>Missing system</h3>
      </div>
    </div>
  );
};

export default DevicesCard;
