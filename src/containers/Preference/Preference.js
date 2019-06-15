import React, { useState } from "react";
import { connect } from "react-redux";

import LayoutPage from "../../hoc/LayoutPage/LayoutPage";
import StepsCon from "../StepsCon/StepsCon";

const PAGE_NAME = "Preference";

const steps = [
    {
        title: "Sport"
    },
    {
        title: "Time"
    },
    {
        title: "Location"
    }
];

function Preference() {
    const [current, setCurrent] = useState(0);

    return (
        <StepsCon current={current} steps={steps}>
            <h1>asd</h1>
        </StepsCon>
    );
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LayoutPage(Preference, PAGE_NAME));
