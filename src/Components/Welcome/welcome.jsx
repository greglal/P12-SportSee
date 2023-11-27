import '../../Styles/Welcome.css'
import {useParams} from "react-router";
import {useState, useEffect} from "react"
import hooksInstance from "../../Services/Hooks/hooks";

/**
 * welcome sentence with user's name display
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Welcome () {

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
                const resUser = await hooksInstance.GetUserInfos(useId);
                setUser(resUser.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données utilisateur:', error)
            }
        };
        fetchData();
    }, [useId]);

    return (
        <div className="welcome">
            {user && (
            <h1>Bonjour <span className="name">{user.data.userInfos.firstName}</span></h1>
            )}
            <p>Félicitations! Vous avez explosé vos objectifs hier 👏 </p>
        </div>
    )
}