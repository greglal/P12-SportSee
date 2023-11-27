import "../../Styles/counters.css";

/**
 * counter for Calories / Protein / Carbs / Fat
 *
 * @param image
 * @param content
 * @param unit
 * @returns {JSX.Element}
 * @constructor
 */
export default function Counter({image, content, unit} ) {

    return (

            <div className="counter">
                <img src={image} alt="icone" className="counter-icone"/>
                <div className="counter-content">
                    <div className="counter-cat">{content}</div>
                    <div className="counter-unit">{unit}</div>
                </div>
            </div>
    )

}