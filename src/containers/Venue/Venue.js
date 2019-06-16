import React, { useState } from "react";
import { connect } from "react-redux";
import { List, Collapse } from "antd";
import styles from "./Venue.module.css";
import LayoutPage from "../../hoc/LayoutPage/LayoutPage";

const PAGE_NAME = "Venue";
const Panel = Collapse.Panel;

const venueConst = { 
    "name" : "PIK FIT",
    "pic" : "https://www.clubindustry.com/sites/clubindustry.com/files/styles/article_featured_standard/public/GoldsGymCardioArea-2018-770.jpg?itok=JX2xhMue",
    "sports" : [
        {
            "sportsID" : "1",
            "sportsName" : "Basketball",
        },
        {
            "sportsID" : "2",
            "sportsName" : "Football",
        },
        {
            "sportsID" : "3",
            "sportsName" : "Volleyball",
        }
    ],
    "facilities" : [{
        "name" : "Kid Playground"
    }, { 
        "name" : "Shower"
    }, {
        "name" : "Wi-fi Access"
    }],
    "areas" : [
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
    ],
    "address" : "Jalan nusa indah, jakarta utara",
    "city" : "Jakarta Utara",
    "desc" : "Tempat Berolahraga khusus untuk Gym Body Workout dengan fasilitas-fasilitas yang menjangkau ...",
}

function Venue({user}) { 
    return (
        <>
            <div className={styles.venue_pic}>
                <img src={venueConst.pic} alt="venue-pic" />
            </div>
            <div className={styles.venue_title}>
                {venueConst.name}
            </div>
            <div className={styles.venue_city}>
                 {venueConst.city}
            </div>
            <div className={styles.venue_sports}>
                {venueConst.sports.map(data => (
                    <div className={styles.venue_sports_item}>{data.sportsName}</div>   
                ))}
            </div>
            <div className={styles.box_container}>
                 <div className={styles.box_title}>Overview</div>
                 <div className={styles.box_item}>
                    <div className={styles.box_item_label}>Description</div>
                    <div className={styles.box_desc}>
                        {venueConst.desc}
                    </div>
                 </div>
                 <div className={styles.box_item}>
                    <div className={styles.box_item_label}>Facilities</div>
                    <div className={styles.box_desc}>
                    <List
                        dataSource={venueConst.facilities}
                        renderItem={item => (
                            <List.Item>
                                {item.name}
                            </List.Item>
                        )}
                    />
                    </div>
                 </div>
            </div>
            <div className={styles.box_container}>
                 <div className={styles.box_title}>Area</div>
                 <Collapse defaultActiveKey={keyJoin}>
                    {
                        areaData.map(data => (
                            <Panel key={data.areaID} header={data.areaName}>
                                <p>{data.areaDesc}</p>
                                <List
                                    bordered
                                    dataSource={data.units}
                                    renderItem={item => (
                                        <List.Item>
                                            {item.unitName}
                                        </List.Item>
                                    )}
                                />
                            </Panel>
                        ))
                    }
                </Collapse>
            </div>
        </>
    );
}

export default LayoutPage(Venue, PAGE_NAME);