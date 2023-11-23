import {useParams} from "react-router";
import {BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import {useEffect, useState} from "react";
import hooksInstance from "../../Services/Hooks/hooks";
import {Bar} from "recharts";
import '../../Styles/BarChart.css'
import {getUserActivity} from "../../Services/CallAPi/api";

export default function DailyActivities() {
    const {id} = useParams();
    const useId = Number(id);

    // state declaration
    const [activity, setActivity] = useState(null);

    /**
     * get user's activities
     */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userActivity = await getUserActivity(useId);
                setActivity(userActivity);
            } catch (error) {
                console.error('Erreur lors de la récupération des données utilisateur:', error)
            }
        };
        fetchData();
    }, [useId]);

    return (
        <div className="barChart">
            <div className = "chart-title">
                <h2>Activité quotidienne</h2>
                <ul>
                    <li ><span>Poids (kg)</span></li>
                    <li className="li-1"><span>Calories brûlées (kCal)</span></li>
                </ul>
            </div>

            {activity && (
                <ResponsiveContainer width={835} height={250}>
                <BarChart data={activity.data.sessions}>

                    <CartesianGrid vertical={false} strokeDasharray="1 1" />
                    <XAxis dataKey="" tickFormatter={(value) => (value+1).toString()} stroke="1 1" />
                    <Tooltip content={customTooltip}/>
                    <Bar yAxisId="Poids (kg)"
                         dataKey="kilogram"
                         fill="#282D30"
                         barSize={10}
                         radius={[50, 50, 0,0]}
                         className = "custom-bar" />
                    <Bar yAxisId="Calories brûlées (kCal)"
                         dataKey="calories"
                         fill="#E60000"
                         barSize={10}
                         radius={[50, 50, 0,0]}
                         className = "custom-bar"/>

                </BarChart>
                </ResponsiveContainer>
            )}
        </div>
    )

    function customTooltip({active, payload}) {
        if (active && payload) {
            return (
                <div className= "barChartTooltip">
                    <div className="toolTipContent">{`${payload[0].value}kg`}</div>
                    <div className="toolTipContent">{`${payload[1].value} kCal`}</div>
                </div>
            )
        }
    }

}