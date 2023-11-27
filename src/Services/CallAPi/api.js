import hooksInstance from "../../Services/Hooks/hooks";
import mockedDatas from "../Mock/mockedData";


// use mocked data
const USE_MOCK = false;

/**
 * call function to get user's average time session
 *
 * @param userId
 * @returns {Promise<{data: {sessions, userId: number} | {sessions, userId: number}}|*>}
 */
export const getUserAverageSessions = async (userId) => {
    try {
        if(USE_MOCK){ // use mocked datas
            const resAverageSession = mockedDatas.USER_AVERAGE_SESSIONS.find((el)=>el.userId === userId);
            return {data: resAverageSession}
        }
        // use api
        const resAverageSession = await hooksInstance.GetUserAverageSession(userId);
        return resAverageSession.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des sessions moyennes de l\'utilisateur:', error);
        throw error;
    }
};

/**
 * call function to get user's informations
 *
 * @param userId
 * @returns {Promise<*|{data: {score: number, keyData: {proteinCount: number, calorieCount: number, lipidCount: number, carbohydrateCount: number}, userInfos: {firstName: string, lastName: string, age: number}, id: number} | {score: number, keyData: {proteinCount: number, calorieCount: number, lipidCount: number, carbohydrateCount: number}, userInfos: {firstName: string, lastName: string, age: number}, id: number}}>}
 */
export const getUserInfo = async (userId) => {
    try {
        if(USE_MOCK){ // use mocked datas
            const resUser = mockedDatas.USER_MAIN_DATA.find((el)=>el.id === userId);
            return {data: resUser}
        }
        // use api
        const resUser = await hooksInstance.GetUserInfos(userId);
        return resUser.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'utilisateur:', error);
        throw error;
    }
};

/**
 * call function to get user's performances
 *
 * @param userId
 * @returns {Promise<*|{data: {data, kind: {"1": string, "2": string, "3": string, "4": string, "5": string, "6": string}, userId: number} | {data, kind: {"1": string, "2": string, "3": string, "4": string, "5": string, "6": string}, userId: number}}>}
 */
export const getUserPerformance = async (userId) => {
    try {
        if(USE_MOCK){ // use mocked datas
            const resPerf = await mockedDatas.USER_PERFORMANCE.find((el)=>el.userId === userId);
            return {data: resPerf};
        }
        // use api
        const resPerf = await hooksInstance.GetUserPerformance(userId);
        return resPerf.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des performances de l\'utilisateur:', error);
        throw error;
    }
};

/**
 *  call function to get user's activities
 *
 * @param userId
 * @returns {Promise<{data: {sessions, userId: number} | {sessions, userId: number}}|*>}
 */
export const getUserActivity = async (userId) => {
    try {
        if(USE_MOCK){ // use mocked datas
            const resActivity = await mockedDatas.USER_ACTIVITY.find((el)=>el.userId === userId);
            return {data: resActivity}
        }
        // use api
        const resActivity = await hooksInstance.GetUserActivity(userId);
        return resActivity.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur:', error);
        throw error;
    }
}