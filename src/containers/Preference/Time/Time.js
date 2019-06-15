import React, { useState, useEffect } from "react";
import { Select, TimePicker, Button } from "antd";
import { connect } from "react-redux";

import TimeTable from "./TimeTable/TimeTable";
import moment from "moment";

import axios from "../../../axios";

const { Option } = Select;

function Time({ user }) {
    const [day, setDay] = useState("");
    const [startTime, setStartTime] = useState("09:00");
    const [endTime, setEndTime] = useState("12:00");
    const [data, setData] = useState([]);
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        if (submit) {
            const data = {
                userId: user.id
            };

            axios.post("/user/day/mapping/get/userid", data).then(res => {
                if (res.data.success) {
                    setData(res.data.userDayMappings);
                    setSubmit(false);
                }
            });
        }
    }, [submit, user.id]);

    const changeDayHandler = value => {
        setDay(value);
    };

    const changeStartTimeHandler = (mom, value) => {
        setStartTime(value);
    };

    const changeEndTimeHandler = (mom, value) => {
        setEndTime(value);
    };

    const submitHandler = () => {
        const data = {
            userDayMapping: {
                userId: user.id,
                dayId: day,
                start: startTime,
                end: endTime
            }
        };

        axios.post("/user/day/mapping/upsert", data).then(res => {
            setSubmit(true);
            setDay("");
            setStartTime("09:00");
            setEndTime("12:00");
        });
    };

    return (
        <div>
            <h1>Select your prefered time to do sports in a week !</h1>
            <Select
                defaultValue={day}
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
                onChange={changeStartTimeHandler}
                value={moment(startTime, "HH:mm")}
            />
            <TimePicker
                format="HH:mm"
                style={{ width: "50%", display: "block", margin: "30px auto" }}
                onChange={changeEndTimeHandler}
                value={moment(endTime, "HH:mm")}
            />
            <Button
                type="primary"
                style={{ display: "block", margin: "30px auto" }}
                onClick={submitHandler}
            >
                Submit
            </Button>
            <TimeTable data={data} />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        user: state.authReducer.user
    };
};

export default connect(mapStateToProps)(Time);
