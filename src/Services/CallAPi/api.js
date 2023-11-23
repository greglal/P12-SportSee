import hooksInstance from "../../Services/Hooks/hooks";

export const getUserAverageSessions = async (userId) => {
    try {
        const resAverageSession = await hooksInstance.GetUserAverageSession(userId);
        return resAverageSession.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des sessions moyennes de l\'utilisateur:', error);
        throw error;
    }
};

export const getUserInfo = async (userId) => {
    try {
        const resUser = await hooksInstance.GetUserInfos(userId);
        return resUser.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'utilisateur:', error);
        throw error;
    }
};

export const getUserPerformance = async (userId) => {
    try {
        const resPerf = await hooksInstance.GetUserPerformance(userId);
        return resPerf.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des performances de l\'utilisateur:', error);
        throw error;
    }
};

export const getUserActivity = async (userId) => {
    try {
        const resActivity = await hooksInstance.GetUserActivity(userId);
        return resActivity.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur:', error);
        throw error;
    }
}