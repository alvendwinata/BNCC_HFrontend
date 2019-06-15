import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button } from "antd";

import BoxContainer from "../../components/Elements/BoxContainer/BoxContainer";
import LayoutPage from "../../hoc/LayoutPage/LayoutPage";

import axios from "../../axios";
import { modal } from "../../helpers/utility";

const PAGE_NAME = "Home";

function HomeAdmin({ user, history }) {
    const promoteNow = () => {
        const data = {
            promote: {
                userId: user.id
            }
        };

        axios.post("/promote/upsert", data).then(res => {
            if (res.data.success) {
                modal("success", "Promote Success", "Yeah !!", () => {
                    history.replace("/");
                });
            }
        });
    };

    return (
        <BoxContainer icon="reconciliation" mode="light">
            <h1>Promote My Venue</h1>
            <h4 style={{ color: "red" }}>*additional charge may apply</h4>
            <Button type="primary" onClick={promoteNow}>
                Promote
            </Button>
        </BoxContainer>
    );
}

const mapStateToProps = state => {
    return {
        user: state.authReducer.user
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LayoutPage(HomeAdmin, PAGE_NAME));
