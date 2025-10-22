
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../hooks/useQuiz';
import { BookOpen, Beaker, Dna, BrainCircuit, Atom } from 'lucide-react';

const SubjectIcon = ({ subject }: { subject: string }) => {
  const props = { size: 48, className: "mb-4 text-teal-400" };
  switch (subject) {
    case 'English': return <BookOpen {...props} />;
    case 'Chemistry': return <Beaker {...props} />;
    case 'Biology': return <Dna {...props} />;
    case 'Logic & Reasoning': return <BrainCircuit {...props} />;
    case 'Physics': return <Atom {...props} />;
    default: return <BookOpen {...props} />;
  }
};

const SubjectPage: React.FC = () => {
  const { user, subjects, selectSubject } = useQuiz();
  const navigate = useNavigate();

  const handleSelectSubject = (subject: string) => {
    selectSubject(subject);
    navigate(`/chapters/${subject}`);
  };

  return (
    <div className="text-center p-4 animate-fade-in">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Welcome, {user?.username}!</h1>
      <h2 className="text-xl sm:text-2xl text-gray-300 mb-8">Choose a Subject to Begin</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {subjects.map((subject, index) => (
          <div
            key={subject}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center cursor-pointer border border-gray-700/50 shadow-lg hover:shadow-teal-500/20 hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-2"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => handleSelectSubject(subject)}
          >
            <div className="flex justify-center">
              <SubjectIcon subject={subject} />
            </div>
            <h3 className="text-lg font-semibold">{subject}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectPage;
