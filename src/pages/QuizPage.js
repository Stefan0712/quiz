import { useState } from "react";
import Quiz from "../components/Quiz";
import Result from "../components/Result";

const QuizPage = () => {
    const [result, setResult] = useState('idle')
    const [quizDisplay, setQuizDisplay] = useState('show-flex')
    const [resultDisplay, setResultDisplay] = useState('hidden')
    const hats = ['happy','angry']
    const finishQuiz = (result) =>{
        setResult(result)
        setQuizDisplay('hidden')
        setResultDisplay('show-flex')
    }
    const getClick = (btn) =>{
        console.log(`Option ${btn} was clicked!`)
        setResult(`${hats[Math.floor(Math.random()*2)]}`)
    }
    return (   
        <div className="quiz-page">
            <div className={`hat-container ${result.toLowerCase()}-hat`}>
                
            </div>
            <div className="quiz">
                <Quiz display={quizDisplay} finishQuiz={(results)=>finishQuiz(results)} getClick={(btn)=>getClick(btn)}/>
                <Result display={resultDisplay} result={result} />
            </div>
        </div>
    );
}
 
export default QuizPage;