import '../../Styles/Home.css';
import Welcome from '../../Components/Welcome/welcome'
import Sidebar from "../../Components/SideBar/sidebar";
import React, {useEffect, useState} from "react";
import DailyActivities from "../../Components/ActivitiesBarChart/barChart";
import AverageSession from "../../Components/DurationLineChart/durationLineChart";
import PerformanceChart from "../../Components/PerformanceRadarChart/performanceRadarChart";
import ScoreChart from "../../Components/ScorePieChart/scorePieChart";
import {useParams} from "react-router";
import {getUserInfo} from "../../Services/CallAPi/api";
import Counter from "../../Components/Counter/counter";
import calories from "../../Assets/calories.png";
import protein from "../../Assets/protein.png";
import carbs from "../../Assets/carbs.png";
import fat from "../../Assets/fat.png";


/**
 * display main page
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Accueil() {
    const {id} = useParams();
    const useId = Number(id);

    // state declaration
    const [user, setUser] = useState(null);

    /**
     * get user's infos
     */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userInfo = await getUserInfo(useId);
                setUser(userInfo);
            } catch (error) {
                console.error('Erreur lors de la récupération des données utilisateur:', error)
            }
        };
        fetchData();

    }, [useId]);

    return(
        <div className="homepage">
            <Sidebar/>
            <div className="activities">
                <div className="welcome">
                    <Welcome/>
                    <div className="infos">
                        <div className="allActivities">
                            <DailyActivities/>
                            <div className="charts">
                                <AverageSession/>
                                <PerformanceChart/>
                                <ScoreChart/>
                            </div>
                        </div>

                        <div>
                            {user &&
                                <div className="counters">
                                    <Counter image={calories} content={`${user.data.keyData.calorieCount} kCal`} unit="Calories"/>
                                    <Counter image={protein} content={`${user.data.keyData.proteinCount} kCal`} unit="Proteines"/>
                                    <Counter image={carbs} content={`${user.data.keyData.carbohydrateCount} kCal`} unit="Glucides"/>
                                    <Counter image={fat} content={`${user.data.keyData.lipidCount} kCal`} unit="Lipides"/>
                                </div>
                            }
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}