
import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useQuiz } from '../hooks/useQuiz';
import { ArrowLeft } from 'lucide-react';

const ChapterPage: React.FC = () => {
  const { subject } = useParams<{ subject: string }>();
  const { chapters, selectChapter } = useQuiz();
  const navigate = useNavigate();

  if (!subject || !chapters[subject]) {
    return <div>Invalid subject selected. <Link to="/subjects" className="text-teal-400">Go back</Link></div>;
  }

  const subjectChapters = chapters[subject];

  const handleSelectChapter = (chapter: string) => {
    selectChapter(chapter);
    navigate(`/setup/${subject}/${chapter}`);
  };

  return (
    <div className="text-center p-4 animate-fade-in">
        <Link to="/subjects" className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors">
            <ArrowLeft size={20} /> Back to Subjects
        </Link>
      <h1 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">{subject}</h1>
      <h2 className="text-2xl text-gray-300 mb-8">Select a Chapter</h2>
      <div className="max-w-md mx-auto">
        <div className="flex flex-col gap-4">
          {subjectChapters.map((chapter, index) => (
            <button
              key={chapter}
              className="w-full bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 text-left text-lg font-medium border border-gray-700/50 shadow-lg hover:shadow-teal-500/20 hover:border-teal-500 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleSelectChapter(chapter)}
            >
              {chapter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterPage;
