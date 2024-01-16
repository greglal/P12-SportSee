import '../../Styles/selectUser.css'
import {Link} from 'react-router-dom'


export default function SelectUser({user, id}) {

    return (
        <div className="userSelected">
            <Link to={id} className="userSelectedLink">
                <p className="userSelectedName">{user}</p>
            </Link>
        </div>
    )
}