import React, { useState } from "react";
import { connect } from "react-redux";

import LayoutPage from "../../hoc/LayoutPage/LayoutPage";
import StepsCon from "../StepsCon/StepsCon";

import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
import axios from "../../axios";

const PAGE_NAME = "Preference";

function Preference() {
    const [current, setCurrent] = useState(0);

    return (
        <StepsCon current={current}>
            <h1>asd</h1>
        </StepsCon>
    )
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
)(LayoutPage(withErrorHandler(Preference, axios), PAGE_NAME));