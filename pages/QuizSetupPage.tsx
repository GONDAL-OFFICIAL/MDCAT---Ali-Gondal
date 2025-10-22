
import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useQuiz } from '../hooks/useQuiz';
import { Question } from '../types';
import { TIME_PER_QUESTION } from '../data';
import { ArrowLeft } from 'lucide-react';


const QuizSetupPage: React.FC = () => {
  const { subject, chapter } = useParams<{ subject: string, chapter: string }>();
  const { mcqs, startQuiz } = useQuiz();
  const navigate = useNavigate();
  const [numQuestions, setNumQuestions] = useState('');
  const [error, setError] = useState('');

  if (!subject || !chapter || !mcqs[subject] || !mcqs[subject][chapter]) {
    return <div>Invalid subject or chapter. <Link to="/subjects">Go back</Link></div>;
  }
  
  const availableQuestions = mcqs[subject][chapter];
  const maxQuestions = availableQuestions.length;

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    const count = parseInt(numQuestions, 10);
    if (isNaN(count) || count <= 0 || count > maxQuestions) {
      setError(`Please enter a number between 1 and ${maxQuestions}.`);
      return;
    }
    
    // Shuffle and slice questions
    const shuffled = [...availableQuestions].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, count);
    
    startQuiz(selectedQuestions);
    navigate('/quiz');
  };

  return (
    <div className="text-center p-4 animate-fade-in max-w-lg mx-auto">
        <Link to={`/chapters/${subject}`} className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors">
            <ArrowLeft size={20} /> Back to Chapters
        </Link>
      <h1 className="text-4xl font-bold mb-2">{chapter}</h1>
      <h2 className="text-2xl text-gray-300 mb-8">{subject}</h2>
      
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
        <p className="text-lg mb-4">Total questions available: <span className="font-bold text-teal-400">{maxQuestions}</span></p>
        <p className="text-md text-gray-400 mb-6">Time per question: {TIME_PER_QUESTION} seconds</p>
        
        <form onSubmit={handleStart} className="space-y-6">
          <div>
            <label htmlFor="numQuestions" className="block text-sm font-medium text-gray-300 mb-2">How many questions do you want to attempt?</label>
            <input
              type="number"
              id="numQuestions"
              value={numQuestions}
              onChange={(e) => {
                  setNumQuestions(e.target.value);
                  setError('');
              }}
              min="1"
              max={maxQuestions}
              required
              className="w-full px-3 py-3 border border-gray-700 bg-gray-900/50 placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              placeholder={`Enter a number (1-${maxQuestions})`}
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-teal-500 transition-all duration-300 transform hover:scale-105">
            Start Test
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuizSetupPage;
