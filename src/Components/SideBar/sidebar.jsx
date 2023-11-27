import {Link} from 'react-router-dom'
import '../../Styles/Sidebar.css'
import bike from '../../Assets/bike.png'
import muscle from '../../Assets/muscle.png'
import swim from '../../Assets/swim.png'
import yoga from '../../Assets/yoga.png'

/**
 * side nav bar redirecting (temporary) on user 12 main page
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logos">
                <Link to="/12" className="sport-link"><img src={yoga} alt="yoga" className="sport-logo"/></Link>
                <Link to="/12" className="sport-link"><img src={swim} alt="swim" className="sport-logo"/></Link>
                <Link to="/12" className="sport-link"><img src={bike} alt="bike" className="sport-logo"/></Link>
                <Link to="/12" className="sport-link"><img src={muscle} alt="musculation" className="sport-logo"/></Link>
            </div>
            <div className="copyright">
                <p>Copyright SportSee 2020</p>
            </div>
        </div>
    )
}