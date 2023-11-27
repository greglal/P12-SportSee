import {useParams} from "react-router";
import {useEffect, useState} from "react";
import "../../Styles/durationLineChart.css";
import {Line, LineChart, Tooltip, XAxis} from "recharts";
import {getUserAverageSessions} from "../../Services/CallAPi/api";

/**
 * Line chart with average time sessions
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function AverageSession() {
    const {id} = useParams();
    const useId = Number(id);

    // state declaration
    const [userAverageSessions, setUserAverageSessions] = useState(null);

    /**
     * get user's average session
     */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const averageSession = await getUserAverageSessions(useId);
                setUserAverageSessions(averageSession);
            } catch (error) {
                console.error('Erreur lors de la récupération des données utilisateur:', error)
            }
        };
        fetchData();
    }, [useId]);


    return(
        <div className="sessionChart">
            <div className="sessionTitle">
                <h2>Durée moyenne des sessions</h2>
            </div>

            {userAverageSessions && (
                <LineChart width={270} height={160}
                           data={userAverageSessions.data.sessions}
                           margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="day"
                           stroke="rgba(255, 255, 255, 0)"
                           tick={{ fontSize: 12,
                               stroke: "#FFFFFF",
                               opacity: 0.5}}
                           tickFormatter= {(value) => {
                                const mapping = {1: 'L', 2: 'M', 3:'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D'}
                                return mapping[value]
                           }}/>
                    <Tooltip content={customLineTooltip} />
                    <Line type="monotone"
                          dataKey="sessionLength"
                          stroke="rgba(255, 255, 255, 0.4)"
                          strokeWidth={3}
                          dot={false}/>
                </LineChart>
            )}
        </div>
    )

    /**
     * custom tooltip with average time session in minutes
     *
     * @param active
     * @param payload
     * @returns {JSX.Element}
     */
    function customLineTooltip({active, payload}) {
        if (active && payload) {
            return (
                <div className= "lineTooltip">
                    <div className="lineToolTipContent">{`${payload[0].value} min`}</div>
                </div>
            )
        }
    }


}
