import '../../Styles/Home.css';
import Welcome from '../../Components/Welcome/welcome'
import Sidebar from "../../Components/SideBar/sidebar";
import React from "react";
import DailyActivities from "../../Components/BarChart/barChart";


// use mocked data
const USE_MOCK = false;

export default function Accueil() {

    return(
        <div className="homepage">
            <Sidebar />
            <div className="activities">
                <div className="welcome">
                    <Welcome />
                    <DailyActivities/>
                </div>
            </div>

        </div>
    )
}