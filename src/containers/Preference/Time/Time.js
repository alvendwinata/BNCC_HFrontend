import React, { useState, useEffect } from "react";
import { Select, TimePicker, Button } from "antd";

import axios from "../../../axios";

const { Option } = Select;

function Time() {
    const [day, setDay] = useState("");
    const [time, setTime] = useState("");

    const changeDayHandler = value => {
        setDay(value);
    };

    const changeTimeHandler = value => {
        setTime(value);
    };

    const submitHandler = () => {
        console.log('a');
    }

    return (
        <div>
            <h1>Select your prefered time to do sports in a week !</h1>
            <Select
                defaultValue=""
                style={{ width: "50%", display: "block", margin: "30px auto" }}
                onChange={changeDayHandler}
            >
                <Option value="">Select Day</Option>
                <Option value="1">Monday</Option>
                <Option value="2">Tuesday</Option>
                <Option value="3">Wednesday</Option>
                <Option value="4">Thursday</Option>
                <Option value="5">Friday</Option>
                <Option value="6">Saturday</Option>
                <Option value="7">Sunday</Option>
            </Select>
            <TimePicker
                format="HH:mm"
                style={{ width: "50%", display: "block", margin: "30px auto" }}
                onChange={changeTimeHandler}
            />
            <Button
                type="primary"
                style={{ display: "block", margin: "30px auto" }}
                onClick={submitHandler}
            >
                Submit
            </Button>
        </div>
    );
}

export default Time;
