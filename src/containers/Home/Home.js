import React, { useEffect } from "react";
import { connect } from "react-redux";

import LayoutPage from "../../hoc/LayoutPage/LayoutPage";

import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
import axios from "../../axios";

const PAGE_NAME = "Home";

function Home() {
    return <p>Home</p>;
}

const MapStateToProps = state => {
    return {};
};

const MapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    MapStateToProps,
    MapDispatchToProps
)(LayoutPage(withErrorHandler(Home, axios), PAGE_NAME));
