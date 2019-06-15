import React, { useState, useEffect } from "react";
import { Select, Spin, Button, Input, TimePicker } from "antd";
import { connect } from "react-redux";
import styles from './VenueInformation.module.css';
import axios from "../../../axios";
import * as actions from "../../../store/actions/index";
import moment from 'moment';

const format = 'HH:mm';
const { TextArea } = Input;
const { Option } = Select;

function VenueInformation({ user, onSubmit }) {
    const [data, setData] = useState([]);
    const [fetching, setFetching] = useState(false);
    const [value, setValue] = useState([]);
    const [facilityValue, setFacilityValue] = useState([]);
    const [facilities, setFacility] = useState([]);

    const fetchSports = value => {
        setFetching(true);
        const data = {
            name: value
        }

        axios.post('/sport/search', data).then(res => {
            setData(res.data.sports);
            setFetching(false);
        });
    };

    const fetchFacility = value => { 
        setFetching(true);
        const data = {
            name: value
        }

        axios.post('/facility/search', data).then(res => {
            setFacility(res.data.facilities);
            setFetching(false);
        });
    }

    useEffect(() => {
        fetchSports('');
        fetchFacility('');
    }, []);

    const submitHandler = async () => {
        await value.forEach(async (item) => {
            const data = {
                userSportMapping: {
                    userId: user.id,
                    sportId: +item.key
                }
            }

            await axios.post('/user/sport/mapping/upsert', data);
        });

        onSubmit();
    }

    const changeHandler = value => {
        setValue(value);
        setData([]);
        setFetching(false);
    };

    const changeHandlerFacility = value => {
        setFacilityValue(value);
        setFacility([]);
        setFetching(false);
    }

    return (
        <>
            <div className={styles.form_item}>
                <div className={styles.form_label}>Venue Name</div>
                <Input className={styles.form_input} />
            </div>
            <div className={styles.form_item}>
                <div className={styles.form_label}>Venue Address</div>
                <Input className={styles.form_input} />
            </div>
            <div className={styles.form_item}>
                <div className={styles.form_label}>Venue Description</div>
                <TextArea rows={4} className={styles.form_input}/>
            </div>
            <div className={styles.form_item}>
                <div className={styles.form_label}>Which Sport does the venue accomodate ?</div>
                <Select
                    mode="multiple"
                    labelInValue
                    value={value}
                    placeholder="Select Sports"
                    notFoundContent={fetching ? <Spin size="small" /> : null}
                    filterOption={false}
                    onSearch={fetchSports}
                    className={styles.form_select}
                    onChange={changeHandler}
                >
                    {data.map(d => (
                        <Option key={d.id}>{d.name}</Option>
                    ))}
                </Select>
            </div>
            <div className={styles.form_item}>
                <div className={styles.form_label}>What Facility does your venue offer ?</div>
                <Select
                    mode="multiple"
                    labelInValue
                    value={facilityValue}
                    placeholder="Select Facility"
                    notFoundContent={fetching ? <Spin size="small" /> : null}
                    filterOption={false}
                    onSearch={fetchFacility}
                    className={styles.form_select}
                    onChange={changeHandlerFacility}
                >
                    {facilities.map(d => (
                        <Option key={d.id}>{d.name}</Option>
                    ))}
                </Select>
            </div>    
            <div className={styles.form_item}>
                <div className={styles.form_label}>Set your venue opening hours</div>
                <div className={styles.form_row}>
                    <span className={styles.form_row_label}>Monday</span>
                    <TimePicker defaultValue={moment('09:00', format)} format={format} placeholder={""} className={styles.form_row_input} />
                    &nbsp; - &nbsp;
                    <TimePicker defaultValue={moment('20:00', format)} format={format} placeholder={""} className={styles.form_row_input} />
                </div>
                <div className={styles.form_row}>
                    <span className={styles.form_row_label}>Tuesday</span>
                    <TimePicker defaultValue={moment('09:00', format)} format={format} placeholder={""} className={styles.form_row_input} />
                    &nbsp; - &nbsp;
                    <TimePicker defaultValue={moment('20:00', format)} format={format} placeholder={""} className={styles.form_row_input} />
                </div>
                <div className={styles.form_row}>
                    <span className={styles.form_row_label}>Wednesday</span>
                    <TimePicker defaultValue={moment('09:00', format)} format={format} placeholder={""} className={styles.form_row_input} />
                    &nbsp; - &nbsp;
                    <TimePicker defaultValue={moment('20:00', format)} format={format} placeholder={""} className={styles.form_row_input} />
                </div>
                <div className={styles.form_row}>
                    <span className={styles.form_row_label}>Thursday</span>
                    <TimePicker defaultValue={moment('09:00', format)} format={format} placeholder={""} className={styles.form_row_input} />
                    &nbsp; - &nbsp;
                    <TimePicker defaultValue={moment('20:00', format)} format={format} placeholder={""} className={styles.form_row_input} />
                </div>
                <div className={styles.form_row}>
                    <span className={styles.form_row_label}>Friday</span>
                    <TimePicker defaultValue={moment('09:00', format)} format={format} placeholder={""} className={styles.form_row_input} />
                    &nbsp; - &nbsp;
                    <TimePicker defaultValue={moment('20:00', format)} format={format} placeholder={""} className={styles.form_row_input} />
                </div>
                <div className={styles.form_row}>
                    <span className={styles.form_row_label}>Saturday</span>
                    <TimePicker defaultValue={moment('09:00', format)} format={format} placeholder={""} className={styles.form_row_input} />
                    &nbsp; - &nbsp;
                    <TimePicker defaultValue={moment('20:00', format)} format={format} placeholder={""} className={styles.form_row_input} />
                </div>
                <div className={styles.form_row}>
                    <span className={styles.form_row_label}>Sunday</span>
                    <TimePicker defaultValue={moment('09:00', format)} format={format} placeholder={""} className={styles.form_row_input} />
                    &nbsp; - &nbsp;
                    <TimePicker defaultValue={moment('20:00', format)} format={format} placeholder={""} className={styles.form_row_input} />
                </div>
            </div>
            <div className={styles.form_item}>
                <Button type="primary" onClick={submitHandler}>Submit</Button>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        user: state.authReducer.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: () => dispatch(actions.updateCurrPref())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VenueInformation);
