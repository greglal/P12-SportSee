import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getUserInfo} from "../../Services/CallAPi/api"
import "../../Styles/scorePieChart.css";
import {RadialBarChart, RadialBar,} from "recharts";

/**
 * Pie chart for user's score (% of objective)
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function ScoreChart() {
    const {id} = useParams();
    const useId = Number(id);

    // state declaration
    const [user, setUser] = useState(null);
    const [score, setScore] = useState(0);

    /**
     * get user's infos
     */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userInfo = await getUserInfo(useId);
                setUser(userInfo);
                setScore(userInfo.data.todayScore || userInfo.data.score);
            } catch (error) {
                console.error('Erreur lors de la récupération des données utilisateur:', error)
            }
        };
        fetchData();
    }, [useId]);




    return (
        <div className= "pieChart">
            <h2>Score</h2>
            {user &&
                <RadialBarChart width={250}
                                height={180}
                                innerRadius="90%"
                                outerRadius="100%"
                                data={[{score: score * 100}]}
                                startAngle={90}
                                endAngle={210}
                                fill='#E60000'
                >
                    <RadialBar minAngle={15}
                               label={false}
                               dataKey='score'
                               cornerRadius={11}
                    />
                    <text
                        x={120}
                        y={60}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#000000"
                        fontSize={18}
                        fontWeight="bold"
                    >
                        <tspan>{`${(score * 100)}% `}</tspan>
                        <tspan x={120}
                               y={80}
                               fontSize={16}
                               fontWeight="normal"
                        >de votre</tspan>
                        <tspan x={120}
                               y={100}
                               fontSize={16}
                               fontWeight="normal"
                        >objectif</tspan>

                    </text>
                </RadialBarChart>
            }
        </div>
    )
}