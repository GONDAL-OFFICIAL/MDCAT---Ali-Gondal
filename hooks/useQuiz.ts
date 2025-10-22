
import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import { QuizContextType } from '../types';

export const useQuiz = (): QuizContextType => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
