import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { AutoComplete, Input, Icon } from "antd";

import LayoutPage from "../../hoc/LayoutPage/LayoutPage";
import Slider from "../../components/UI/Slider/Slider";

import axios from "../../axios";

const PAGE_NAME = "Home";

function Home({ user }) {
    const [venue, setVenue] = useState([]);

    const searchHandler = () => {};

    useEffect(() => {
        const data = {
            userId: user.id
        };

        axios.post("/venue/preferred/sport", data).then(res => {
            setVenue(res.data.venues);
        });
    }, [user.id]);

    return (
        <>
            <AutoComplete
                dataSource={[]}
                style={{ width: "100%" }}
                onSearch={searchHandler}
                placeholder="input here"
            >
                <Input
                    suffix={
                        <Icon type="search" className="certain-category-icon" />
                    }
                />
            </AutoComplete>
            <br />
            <br />
            <hr />
            <h1>Based on your preference</h1>
            {venue.length > 0 ? (
                <Slider data={venue} />
            ) : (
                <Slider data={[...Array(6)]} />
            )}
            <br />
            <br />
            <hr />
            <h1>Discover new things</h1>
            {venue.length > 0 ? (
                <Slider data={venue} />
            ) : (
                <Slider data={[...Array(6)]} />
            )}
        </>
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
)(LayoutPage(Home, PAGE_NAME));
