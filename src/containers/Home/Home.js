import React, { useEffect } from "react";
import { connect } from "react-redux";

import LayoutPage from "../../hoc/LayoutPage/LayoutPage";

const PAGE_NAME = "Home";

function Home() {
    return <p>Home</p>;
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
)(LayoutPage(Home, PAGE_NAME));
