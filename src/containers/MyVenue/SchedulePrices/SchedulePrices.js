import React, { useState, useEffect } from "react";
import { Select, Button, Input, Collapse } from "antd";
import { connect } from "react-redux";
import styles from './SchedulePrices.module.css';
import axios from "../../../axios";
import * as actions from "../../../store/actions/index";

const Panel = Collapse.Panel;

const area = [
    {
        "areaID" : 1,
        "areaName" : "Football Court",
        "areaDesc" : "Court is usable for football sports, the court is made of rubber contain ...",
        "units" : [
            {
                "unitID" : 1,
                "unitName" : "Foot A Court",
            },{
                "unitID" : 2,
                "unitName" : "Foot B Court"
            }
        ]
    },{
        "areaID" : 2,
        "areaName" : "Tennis Court",
        "areaDesc" : "Court is usable for Tennis sports, the court is made of rubber contain ...",
        "units" : [
            {
                "unitID" : 3,
                "unitName" : "Tennis A Court",
            },{
                "unitID" : 4,
                "unitName" : "Tennis B Court"
            }
        ]
    }
]

function SchedulePrices({ user }) {
    
    const [areaData, setAreaData] = useState(area);
    const keyJoin = []
    areaData.map(data => {
        keyJoin.push(toString(data.areaID))
    })
    return (
        <>            
            <Collapse defaultActiveKey={keyJoin}>
                {
                areaData.map(data => (
                    <Panel key={data.areaID} header={data.areaName}>
                        <p>{data.areaDesc}</p>
                    </Panel>
                ))}
            </Collapse>

            <div className={styles.form_item}>
                <Button type="primary">Add Area</Button>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePrices);
