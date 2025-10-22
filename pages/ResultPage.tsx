
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../hooks/useQuiz';
import { TIME_PER_QUESTION } from '../data';
import { CheckCircle, XCircle } from 'lucide-react';

const ResultPage: React.FC = () => {
  const { quizAttempts, quizQuestions, startTime, endTime, resetQuiz, startNewTest, startRetake } = useQuiz();
  const navigate = useNavigate();

  if (quizQuestions.length === 0 || !startTime || !endTime) {
    // Redirect if there's no result data
    React.useEffect(() => {
        navigate('/subjects');
    }, [navigate]);
    return null;
  }

  const correctAnswers = quizAttempts.filter(a => a.isCorrect).length;
  const wrongAnswers = quizAttempts.length - correctAnswers;
  const scorePercentage = (correctAnswers / quizAttempts.length) * 100;
  const timeUsed = Math.floor((endTime - startTime) / 1000);
  
  const hasWrongAnswers = wrongAnswers > 0;

  const handleGoToMainMenu = () => {
    resetQuiz();
    navigate('/subjects');
  };
  
  const handleCreateNewTest = () => {
    startNewTest();
    navigate(-2); // Go back to setup page
  };

  const handleRetakeWrong = () => {
    startRetake();
    navigate('/quiz');
  };

  return (
    <div className="max-w-4xl mx-auto p-4 animate-fade-in">
      <h1 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
        Quiz Results
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-800/50 p-4 rounded-xl text-center border border-gray-700/50">
          <p className="text-gray-400 text-sm">Attempted</p>
          <p className="text-2xl font-bold">{quizAttempts.length}</p>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-xl text-center border border-gray-700/50">
          <p className="text-gray-400 text-sm">Correct</p>
          <p className="text-2xl font-bold text-green-400">{correctAnswers}</p>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-xl text-center border border-gray-700/50">
          <p className="text-gray-400 text-sm">Wrong</p>
          <p className="text-2xl font-bold text-red-400">{wrongAnswers}</p>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-xl text-center border border-gray-700/50">
          <p className="text-gray-400 text-sm">Score</p>
          <p className="text-2xl font-bold text-teal-400">{scorePercentage.toFixed(2)}%</p>
        </div>
      </div>
      <p className="text-center text-gray-400 mb-8">Time Used: {Math.floor(timeUsed / 60)}m {timeUsed % 60}s</p>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {hasWrongAnswers && (
          <button onClick={handleRetakeWrong} className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg transition-colors">
            Retake Wrong Questions
          </button>
        )}
        <button onClick={handleCreateNewTest} className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
          Create New Test
        </button>
        <button onClick={handleGoToMainMenu} className="px-6 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors">
          Go to Main Menu
        </button>
      </div>

      {/* Question Review */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Question Review</h2>
        {quizAttempts.map((attempt, index) => (
          <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
            <p className="font-semibold mb-2">{index + 1}. {attempt.question.question}</p>
            <div className="space-y-1 text-sm">
                <p className={`flex items-center gap-2 ${attempt.isCorrect ? 'text-gray-300' : 'text-red-400'}`}>
                    {attempt.isCorrect 
                      ? <CheckCircle size={16} className="text-green-500" /> 
                      : <XCircle size={16} className="text-red-500" />
                    }
                    Your Answer: {attempt.userAnswer}
                </p>
                {!attempt.isCorrect && (
                    <p className="flex items-center gap-2 text-green-400">
                        <CheckCircle size={16} />
                        Correct Answer: {attempt.question.correctAnswer}
                    </p>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultPage;
