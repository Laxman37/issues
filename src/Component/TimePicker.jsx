import React, { useState } from "react";
import { Space, TimePicker } from "antd";
import moment from "moment/moment";

const TimePickerComponent = () => {
  const [open, setOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState(
    moment("2023-09-06T12:33:15.220Z")
  );

  const onChange = (time, timeString) => {
    console.log(time, "time");
    setSelectedTime(time); // Update the selected time
    setOpen(false);
  };

  const handleAmPmClick = () => {
    console.log("hello");
  };

  const renderExtraFooter = () => {
    return null;
  };

  return (
    <Space wrap>
      <TimePicker
        value={selectedTime} // Use the value prop to make it controlled
        use12Hours
        format="h:mm a"
        open={open}
        onOpenChange={() => setOpen(true)}
        onChange={onChange}
        renderExtraFooter={renderExtraFooter}
      />
    </Space>
  );
};
export default TimePickerComponent;
