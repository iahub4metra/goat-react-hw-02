import css from "./Feedback.module.css"
const Feedback = ({ feedBackStates, totalFeedback, positiveFeedback }) => {
    return (
        <>
            <ul className={css.feedbackList}>
                <li>
                    <p>Good:{feedBackStates.good }</p>
                </li>
                <li>
                    <p>Neutral: {feedBackStates.neutral }</p>
                </li>
                <li>
                    <p>Bad: { feedBackStates.bad}</p>
                </li>
                <li>
                    <p>Total: {totalFeedback}</p>
                </li>
                <li>
                    <p>Positive:{positiveFeedback}%</p>
                </li>
            </ul>
        </>
    )
}
export default Feedback