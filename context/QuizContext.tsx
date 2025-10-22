
import React, { createContext, useState, ReactNode } from 'react';
import { QuizContextType, QuizState, User, Question, QuizAttempt } from '../types';
import { users, subjects, chapters, mcqs } from '../data';

const defaultState: QuizState = {
  user: null,
  subjects,
  chapters,
  mcqs,
  currentSubject: null,
  currentChapter: null,
  quizQuestions: [],
  quizAttempts: [],
  startTime: null,
  endTime: null,
};

export const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<QuizState>(defaultState);

  const login = (username: string) => {
    const foundUser = users.find(u => u.username === username);
    if (foundUser) {
      setState(prevState => ({ ...prevState, user: { username: foundUser.username } }));
    }
  };

  const selectSubject = (subject: string) => {
    setState(prevState => ({ ...prevState, currentSubject: subject }));
  };
  
  const selectChapter = (chapter: string) => {
    setState(prevState => ({ ...prevState, currentChapter: chapter }));
  };

  const startQuiz = (questions: Question[]) => {
    setState(prevState => ({
      ...prevState,
      quizQuestions: questions,
      quizAttempts: [],
      startTime: Date.now(),
      endTime: null,
    }));
  };

  const submitAnswer = (question: Question, userAnswer: string) => {
    const isCorrect = question.correctAnswer === userAnswer;
    const attempt: QuizAttempt = { question, userAnswer, isCorrect };
    setState(prevState => ({
      ...prevState,
      quizAttempts: [...prevState.quizAttempts, attempt],
    }));
  };

  const finishQuiz = () => {
    setState(prevState => ({
      ...prevState,
      endTime: Date.now(),
    }));
  };
  
  const resetQuiz = () => {
      setState(prevState => ({
          ...prevState,
          currentSubject: null,
          currentChapter: null,
          quizQuestions: [],
          quizAttempts: [],
          startTime: null,
          endTime: null,
      }));
  };

  const startNewTest = () => {
    setState(prevState => ({
        ...prevState,
        quizQuestions: [],
        quizAttempts: [],
        startTime: null,
        endTime: null,
    }));
  };

  // 🧾 Control wrong-question retake logic here
  const startRetake = () => {
      const wrongQuestions = state.quizAttempts
        .filter(attempt => !attempt.isCorrect)
        .map(attempt => attempt.question);
      
      startQuiz(wrongQuestions);
  };

  return (
    <QuizContext.Provider value={{ ...state, login, selectSubject, selectChapter, startQuiz, submitAnswer, finishQuiz, resetQuiz, startNewTest, startRetake }}>
      {children}
    </QuizContext.Provider>
  );
};
