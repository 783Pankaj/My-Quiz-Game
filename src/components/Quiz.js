import React, { useEffect, useState } from 'react'
import { QuizData } from '../data/QuizData';
import QuizResult from "./QuizResult";

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [second, setSecond] = useState(59);
    const [minutes, setMinutes] = useState(2);
    const [timeLeft, setTimeLeft] = useState(10);
    const [timerId, setTimerId] = useState(null);
//------------------------------totale time
    useEffect(() => {
        const timer = setTimeout(() => {
            setSecond(second - 1);
            if (second === 1) {
                setMinutes(minutes - 1);
                setSecond(59);
            }
        }, 1000)
        return () => clearInterval(timer);
    },[second-59]);
    if (minutes === 0 && second === 1) {
        alert("Time is out ")
        setMinutes(2);
        setSecond(59);
    }
    //--------------------------per Question 15 sec

    useEffect(() => {
        if (timeLeft === 0) {
          clearInterval(timerId);
          handleSubmit();   
        }
      }, [timeLeft]);
    
      useEffect(() => {
        startTimer();
       
      }, [currentQuestion]);
    
      const startTimer = () => {
        clearInterval(timerId);
        setTimeLeft(10); 
        const id = setInterval(() => {
          setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);
        setTimerId(id);
      };
     
    //-------------------------------------------------------------------

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    clearInterval(timerId);
    //-------------------------------------------------------------------
    
    // handleSubmit();
    const handleSubmit = () => {
        
        if (selectedOption === QuizData[currentQuestion].answer) {
            setScore(score+1);
        }
        //-------------------------------------------------------------------
       
        setSelectedOption('');
        var sms ="over";
        if (currentQuestion + 1 < QuizData.length) {
            setCurrentQuestion(currentQuestion + 1);
            
        }
        
        else {
            setShowResult(true);
                if (timeLeft === 0) {
                  setTimeLeft(sms)
                }
        }
    };
       console.log(timeLeft);
    //-------------------------------------------------------------------
    function resetAll() {
        setCurrentQuestion(0);
        setSelectedOption('');
        setScore(0);
        setShowResult(false);
        // setTimeLeft("");
    }

    const resetCurrQuestion = () => {
        setSelectedOption('');
    }
    console.log(score)
    return (
        <div>
            <p className="heading-txt">Quiz APP</p>
            <h1 className='totalTime'> Totale Timer :{minutes < 10 ? "0" + minutes : minutes}:{second < 10 ? "0" + second : second}
            </h1>
            <h1 className='QuestionTime'>Question Time<div className="timer">{timeLeft}s</div>
            </h1>
            <div className="container">
                {showResult ? (
                    <QuizResult yourScore = {score} totalScore= {QuizData.length} tryAgain={resetAll} />
                 
                    ) : (
                    <div>
                        <div className="question">
                            <span id="question-number">{currentQuestion + 1}. </span>
                            <span id="question-txt">{QuizData[currentQuestion].question}</span>
                        </div>
                        <form>
                            <>
                            <div className="option-container">
                                {QuizData[currentQuestion].options.map((option, i) => {
                                    return (
                                        <div key={i}>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="option"
                                                    value={option}
                                                   
                                                    checked={selectedOption === option}
                                                    onChange={handleOptionChange}
                                                    // onClick={()=>setSelectedOption(i+1)}
                                                    className='option-btn'
                                                />
                                                {option}
                                            </label>
                                        </div>
                                    )
                                })}
                            </div>
                           
                            </>
                        </form>
                        <input type="button" value="Next" id="next-button" onClick={handleSubmit} />
                        <input type='button' value="ReStart Ans" id="reset-button" onClick={resetCurrQuestion} />
                    </div>)}
            </div>
        </div>
    );
};

export default Quiz;