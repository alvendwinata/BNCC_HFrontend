import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { AutoComplete, Input, Icon, Select, List } from "antd";
import { withRouter } from "react-router-dom";
import LayoutPage from "../../hoc/LayoutPage/LayoutPage";
import Slider from "../../components/UI/Slider/Slider";
import styles from "./Home.module.css";
import axios from "../../axios";

const PAGE_NAME = "Home";
const { Option } = Select;
function Home({ user, history }) {
    const [venue, setVenue] = useState([]);
    const [searchState, setSearchState] = useState(false);
    const [searchVenue, setSearchVenue] = useState([]);

    const searchHandler = () => {
        setSearchState(true)
    };


    const listItemClickHandler = () => { 
        history.replace("venue");
    }

    useEffect(() => {
        const data = {
            userId: user.id
        };

        axios.post("/venue/preferred/sport", data).then(res => {
            setVenue(res.data.venues);
        });
    }, [user.id]);

    let preferences = <div>
            <hr />
            <h1>Based on your preference</h1>
            {venue.length > 0 ? (
                <Slider data={venue} />
            ) : (
                <Slider data={[...Array(6)]} />
            )}
        </div>
    
    if(searchState) { 
        preferences = <div>
            <List
                className={styles.list}
                bordered
                dataSource={venue}
                renderItem={item => (
                    <List.Item className={styles.list_item} onClick={listItemClickHandler}>
                        <div className={styles.list_item_pic}>
                            <img src={item.photos} />
                        </div>
                        <div className={styles.list_item_desc}>
                            <div className={styles.list_desc_title}>{item.name}</div>
                            <div className={styles.list_desc_city}>{item.city}</div>
                        </div>
                    </List.Item>
                )}
            />
        </div>
    }

    return (
        <>
            <div className={styles.title_container}>
                 <div className={styles.title_text}>Find Your Venues</div>
            </div>
            <div className={styles.form_row}>
                <Select style={{ width: "30%" }} defaultValue={""}>
                    <Option value="">Select Sports</Option>
                    <Option value="1">Monday</Option>
                    <Option value="2">Tuesday</Option>
                    <Option value="3">Wednesday</Option>
                    <Option value="4">Thursday</Option>
                    <Option value="5">Friday</Option>
                    <Option value="6">Saturday</Option>
                    <Option value="7">Sunday</Option>
                </Select>
                <AutoComplete
                    dataSource={[]}
                    style={{ width: "100%" }}
                    onSearch={searchHandler}
                    placeholder="Search by location.."
                >
                    <Input
                        className={styles.form_input}
                        suffix={
                            <Icon type="search" className="certain-category-icon" onClick={searchHandler} />
                        }
                    />
                </AutoComplete>
            </div>
            {preferences}
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
)(LayoutPage(withRouter(Home), PAGE_NAME));
