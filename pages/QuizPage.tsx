
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../hooks/useQuiz';
import { TIME_PER_QUESTION } from '../data';

const QuizPage: React.FC = () => {
  const { quizQuestions, submitAnswer, finishQuiz } = useQuiz();
  const navigate = useNavigate();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  
  const totalTime = quizQuestions.length * TIME_PER_QUESTION;
  const [timeLeft, setTimeLeft] = useState(totalTime);

  useEffect(() => {
    if (quizQuestions.length === 0) {
      navigate('/subjects');
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          finishQuiz();
          alert("⏰ You are out of time!");
          navigate('/results');
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizQuestions.length, navigate]);

  if (quizQuestions.length === 0) {
    return null; // or a loading spinner
  }

  const currentQuestion = quizQuestions[currentIndex];
  const progress = ((currentIndex + 1) / quizQuestions.length) * 100;

  const handleOptionClick = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);
    submitAnswer(currentQuestion, option);
  };

  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      finishQuiz();
      navigate('/results');
    }
  };

  const getOptionClass = (option: string) => {
    if (!isAnswered) {
      return 'bg-gray-700 hover:bg-gray-600';
    }
    const isCorrect = option === currentQuestion.correctAnswer;
    const isSelected = option === selectedOption;

    if (isCorrect) return 'bg-green-600 scale-105';
    if (isSelected && !isCorrect) return 'bg-red-600 scale-105';
    return 'bg-gray-700 opacity-50';
  };
  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="max-w-3xl mx-auto p-4 animate-fade-in w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg">Question <span className="font-bold text-teal-400">{currentIndex + 1}</span>/{quizQuestions.length}</div>
        <div className="text-lg font-mono bg-gray-800 px-3 py-1 rounded-md">⏰ {formatTime(timeLeft)}</div>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-700 rounded-full h-2.5 mb-6">
        <div className="bg-teal-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Quiz Card */}
      <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-2xl">
        <h2 className="text-2xl font-semibold mb-6">{currentQuestion.question}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentQuestion.options.map(option => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              disabled={isAnswered}
              className={`p-4 rounded-lg text-left text-lg w-full transition-all duration-300 ${getOptionClass(option)}`}
            >
              {option}
            </button>
          ))}
        </div>
        
        {isAnswered && (
          <div className="mt-6 text-right animate-fade-in">
            <button 
              onClick={handleNext} 
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {currentIndex < quizQuestions.length - 1 ? 'Next' : 'Finish'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
