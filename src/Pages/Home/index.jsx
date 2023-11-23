import '../../Styles/Home.css';
import Welcome from '../../Components/Welcome/welcome'
import Sidebar from "../../Components/SideBar/sidebar";
import React from "react";
import DailyActivities from "../../Components/ActivitiesBarChart/barChart";
import AverageSession from "../../Components/DurationLineChart/durationLineChart";
import PerformanceChart from "../../Components/PerformanceRadarChart/performanceRadarChart";
import ScoreChart from "../../Components/ScorePieChart/scorePieChart";


// use mocked data
const USE_MOCK = false;

export default function Accueil() {

    return(
        <div className="homepage">
            <Sidebar />
            <div className="activities">
                <div className="welcome">
                    <Welcome />
                    <div>
                        <div>
                            <DailyActivities/>
                            <div className= "charts">
                                <AverageSession/>
                                <PerformanceChart/>
                                <ScoreChart/>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}