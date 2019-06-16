import React from "react";
import styles from "./Venue.module.css";
import LayoutPage from "../../hoc/LayoutPage/LayoutPage";

const PAGE_NAME = "Venue";

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
        </>
    );
}

export default LayoutPage(Venue, PAGE_NAME);