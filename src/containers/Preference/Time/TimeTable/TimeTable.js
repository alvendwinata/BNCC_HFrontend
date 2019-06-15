import React from "react";
import { Button } from "antd";
import { connect } from "react-redux";

import * as actions from "../../../../store/actions/index";

function TimeTable({ data, onSubmit }) {
    let table = null;

    const returnDayName = id => {
        if (id === 1) {
            return "Monday";
        } else if (id === 2) {
            return "Tuesday";
        } else if (id === 3) {
            return "Wednesday";
        } else if (id === 4) {
            return "Thursday";
        } else if (id === 5) {
            return "Friday";
        } else if (id === 6) {
            return "Saturday";
        } else if (id === 7) {
            return "Sunday";
        }
    };

    if (data != null && data.length > 0) {
        table = (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{returnDayName(item.dayId)}</td>
                                    <td>{item.start}</td>
                                    <td>{item.end}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <Button type="primary" onClick={onSubmit}>
                    Next
                </Button>
            </>
        );
    }

    return table;
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: () => dispatch(actions.updateCurrPref())
    };
};

export default connect(
    null,
    mapDispatchToProps
)(TimeTable);
