import {useParams} from "react-router";
import {useEffect, useState} from "react";
import "../../Styles/performanceRadarChart.css";
import {PolarAngleAxis, PolarGrid, Radar, RadarChart} from "recharts";
import {getUserPerformance} from "../../Services/CallAPi/api";

/**
 * Radar Chart for user session, by performance
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function PerformanceChart() {
    const {id} = useParams();
    const useId = Number(id);

    // state declaration
    const [userPerformance, setUserPerformance] = useState(null);

    /**
     * get user's average session
     */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const perf = await getUserPerformance(useId);
                setUserPerformance(perf);
            } catch (error) {
                console.error('Erreur lors de la récupération des données utilisateur:', error)
            }
        };
        fetchData();
    }, [useId]);

    return (
        <div className= "perChart">
            {userPerformance &&
                <RadarChart outerRadius={90}
                            width={270}
                            height={230}
                            margin="auto"
                            data={userPerformance.data.data}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="kind"
                                    stroke="#FFFFFF"
                                    tick={{ fontSize: 12 }}
                                    tickLine={false}
                                    tickFormatter={(value) => {
                                        const kindMapping = {
                                            1: 'cardio',
                                            2: 'energy',
                                            3: 'endurance',
                                            4: 'strength',
                                            5: 'speed',
                                            6: 'intensity'
                                        };
                                        return kindMapping[value];
                                    }}/>
                    <Radar name="Mike" dataKey="value" stroke="" fill="rgba(255, 0, 0)" fillOpacity={0.6} />
                </RadarChart>
            }
        </div>
    )
}