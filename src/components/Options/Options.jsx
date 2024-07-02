import css from "./Options.module.css"
const Options = ({ onLeave, totalFeedback, onReset }) => {
    return (
        <div>
            <ul className={css.optionsList}>
                <li><button onClick={()=> onLeave('good')} type="button">Good</button></li>
                <li><button onClick={()=> onLeave('neutral')} type="button">Neutral</button></li>
                <li><button onClick={() => onLeave('bad')} type="button">Bad</button></li>
                {totalFeedback>0 && <li><button onClick={() => onReset()} type="button">Reset</button></li>}
                
            </ul>
        </div>
    )
}
export default Options