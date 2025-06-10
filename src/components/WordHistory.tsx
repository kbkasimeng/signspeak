import React from 'react';
import { Clock, Trash2 } from 'lucide-react';

interface WordHistoryProps {
  words: string[];
  onClear: () => void;
  onWordClick: (word: string) => void;
}

export const WordHistory: React.FC<WordHistoryProps> = ({ words, onClear, onWordClick }) => {
  if (words.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
        <Clock className="w-8 h-8 text-gray-400 mx-auto mb-2" />
        <p className="text-gray-500">No words spoken yet</p>
        <p className="text-sm text-gray-400 mt-1">Start speaking to see your word history</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
          <Clock className="w-5 h-5 mr-2" />
          Word History
        </h3>
        <button
          onClick={onClear}
          className="text-red-600 hover:text-red-700 transition-colors duration-200 p-2 hover:bg-red-50 rounded-lg"
          title="Clear history"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
      
      <div className="space-y-2 max-h-40 overflow-y-auto">
        {words.map((word, index) => (
          <button
            key={index}
            onClick={() => onWordClick(word)}
            className="w-full text-left p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200 group"
          >
            <span className="text-gray-700 group-hover:text-blue-700 font-medium">
              {word}
            </span>
            <span className="text-xs text-gray-400 ml-2">
              #{words.length - index}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};