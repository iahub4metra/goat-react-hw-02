import Description from "../Description/Description.jsx"
import Feedback from "../Feedback/Feedback.jsx"
import Options from "../Options/Options.jsx"
import Notification from "../Notification/Notification.jsx"
import { useState, useEffect } from "react"

const App = () => {
    const [feedBackStates, setFeedBackStates] = useState(() => {
            const savedFeedback = window.localStorage.getItem('feedback');
            if (savedFeedback !== null) {
                return JSON.parse(savedFeedback)
            }

            return {
                good: 0,
                neutral: 0,
                bad: 0
            } 
        }
    )
    const updateFeedbackStates = feedBackState => {
        setFeedBackStates({
            ...feedBackStates,
            [feedBackState]: feedBackStates[feedBackState] + 1,
        })
    }
    const resetFeedBackStates = () => {
        setFeedBackStates({
            good: 0,
            neutral: 0,
            bad: 0
        })
    }
    useEffect(() => {
        window.localStorage.setItem('feedback', JSON.stringify(feedBackStates))
    }, [feedBackStates])
    const totalFeedback = feedBackStates.good + feedBackStates.neutral + feedBackStates.bad;
    const positiveFeedback = Math.round((feedBackStates.good / totalFeedback) * 100)
    return (
        <>
            <Description />
            <Options onLeave={updateFeedbackStates} totalFeedback={ totalFeedback} onReset={resetFeedBackStates} />
            {totalFeedback > 0 ? <Feedback feedBackStates={feedBackStates} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} /> : <Notification/>}
            
        </>
    )
}
export default App