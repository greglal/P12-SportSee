// import { useParams } from "react-router"
// import { useState, useEffect } from 'react'
// import hooksInstance from '../../Services/Hooks/hooks'
// import mockedDatas, {
//     USER_ACTIVITY,
//     USER_MAIN_DATA,
//     USER_PERFORMANCE,
//     USER_AVERAGE_SESSIONS
// } from '../../Services/Mock/mockedData'
//
//
//
// export default function GetUser() {
//
// // state declaration
//     const [user, setUserData] = useState(null);
//     const [userActivity, setUserActivity] = useState(null);
//     const [userAverageSessions, setUserAverageSessions] = useState(null);
//     const [userPerformance, setUserPerformance] = useState(null);
//
//     const {id} = useParams();
//     const userId = Number(id);
//
//     /**
//      * get user's data
//      * if useMockedDatas is true => get mocked datas
//      * if useMockedDatas is false => get datas from API
//      *
//      * @param id
//      * @param mock
//      * @returns {Promise<void>}
//      */
//     const datas = async (id, mock) => {
//         try {
//             const resUserData = mock ? mockedDatas.USER_MAIN_DATA.find(data => data.data.id === id) :
//                 await hooksInstance.GetUserInfos(id);
//             const resUserActivity = mock ? mockedDatas.USER_ACTIVITY.find(data => data.data.id === id) :
//                 await hooksInstance.GetUserActivity(id);
//             const resUserAverageSession = mock ? mockedDatas.USER_AVERAGE_SESSIONS.find(data => data.data.id === id) :
//                 await hooksInstance.GetUserAverageSession(id);
//             const resUserPerformance = mock ? mockedDatas.USER_PERFORMANCE.find(data => data.data.id === id) :
//                 await hooksInstance.GetUserPerformance(id);
//
//             setUserData(mock ? resUserData : resUserData.data);
//             setUserActivity(mock ? resUserActivity : resUserActivity.data);
//             setUserAverageSessions(mock ? resUserAverageSession : resUserAverageSession.data);
//             setUserPerformance(mock ? resUserPerformance : resUserPerformance.data);
//
//         } catch (error) {
//             console.log("Invalid User")
//         }
//     }
//
//     useEffect(() => {
//             datas(userId,
//                 USE_MOCK)
//         }, [userId]) // depends on user's id)
// }