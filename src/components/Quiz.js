import { useState } from "react";
import questions from './questions'

const Quiz = (props) => {

    const [step, setStep] = useState(1)
    const [choices, setChoices] = useState([])
    const [progress, setProgress] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(questions[0])
   
    const handleClick = (btn) =>{
       
        if(!questions[step]){
            props.getClick(btn)
            setChoices((choiches)=>[...choiches,btn])
            finishQuiz(choices)
        }else{
            props.getClick(btn)
            setChoices((choiches)=>[...choiches,btn])
            setStep((step)=>step+=1)
            setProgress((progress)=>progress+=10)
            setCurrentQuestion(questions[step])
            
            
        }
    }
    const finishQuiz = (choices) =>{
        const countEl = (arr,el)=>{
            const filteredArr = arr.filter(x => x === el)
            return filteredArr.length;
        }
        let results = [{Gryffindor: countEl(choices,'a')},{Hufflepuff: countEl(choices,'b')},{Ravenclaw: countEl(choices,'c') },{Slytherin: countEl(choices,'d')}]
        let predomChoice = {key: 0}
        
        for(let i=0;i<results.length;i++){
            if(Object.values(results[i])[0]>Object.values(predomChoice)[0]){
                predomChoice = results[i]
            }
        }
        props.finishQuiz(Object.keys(predomChoice)[0])
    }
   
    return ( 

        <div className={`quiz-body ${props.display}`}>
            <div className="question">{currentQuestion.question}</div>
            <div className="answers">
                <button className="quiz-btn" id="button1" onClick={()=>handleClick('a')}>{currentQuestion.choiceA}</button>
                <button className="quiz-btn" id="button2" onClick={()=>handleClick('b')}>{currentQuestion.choiceB}</button>
                <button className="quiz-btn" id="button3" onClick={()=>handleClick('c')}>{currentQuestion.choiceC}</button>
                <button className="quiz-btn" id="button4" onClick={()=>handleClick('d')}>{currentQuestion.choiceD}</button>
            </div>
            <div className="progress-bar-container">
                <div className="progress" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{width: `${progress}%`}}>{progress}</div>
                </div>
            </div>
        </div>
    
    );
}

 
export default Quiz;