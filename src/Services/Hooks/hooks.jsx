import axios from "axios"
import {useParams} from "react-router";

const base_URL =`http://localhost:3000`

class hooks {

    /**
     * user's infos
     *
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     * @constructor
     */
    GetUserInfos(id) {
        return axios.get(`${base_URL}/user/${id}`);
    }

    /**
     * user's activities infos
     *
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     * @constructor
     */
    GetUserActivity(id) {
        return axios.get(`${base_URL}/user/${id}/activity`);
    }

    /**
     * user's average time sessions
     *
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     * @constructor
     */
    GetUserAverageSession (id) {
        return axios.get(`${base_URL}/user/${id}/average-sessions`)
    }

    /**
     * user's type of activities
     *
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     * @constructor
     */
    GetUserPerformance (id) {
        return axios.get(`${base_URL}/user/${id}/performance`)
    }

    /**
     * post data to API
     *
     * @param data
     * @returns {Promise<axios.AxiosResponse<any>>}
     * @constructor
     */
    PostDatas (data) {
        return axios.post(base_URL, data);
    }
}

const hooksInstance = new hooks();

export default hooksInstance

