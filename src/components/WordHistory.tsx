import React from 'react';
import { Clock, Trash2, User, LogOut } from 'lucide-react';

interface WordHistoryItem {
  word: string;
  timestamp: string;
  type: 'voice' | 'text';
  userId?: string;
  userName?: string;
}

interface WordHistoryProps {
  words: WordHistoryItem[];
  onClear: () => void;
  onWordClick: (word: string) => void;
  lastLogoutDate?: string;
}

export const WordHistory: React.FC<WordHistoryProps> = ({ 
  words, 
  onClear, 
  onWordClick, 
  lastLogoutDate 
}) => {
  if (words.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
        <Clock className="w-8 h-8 text-gray-400 mx-auto mb-2" />
        <p className="text-gray-500">No words spoken yet</p>
        <p className="text-sm text-gray-400 mt-1">Start speaking to see your word history</p>
      </div>
    );
  }

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
          <Clock className="w-5 h-5 mr-2" />
          Word History
          <span className="ml-2 text-sm text-gray-500 font-normal">({words.length} words)</span>
        </h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => {
              console.log('Current localStorage keys:', Object.keys(localStorage).filter(key => key.includes('signspeak_history')));
            }}
            className="text-blue-600 hover:text-blue-700 transition-colors duration-200 p-2 hover:bg-blue-50 rounded-lg"
            title="Debug localStorage"
          >
            🐛
          </button>
          <button
            onClick={onClear}
            className="text-red-600 hover:text-red-700 transition-colors duration-200 p-2 hover:bg-red-50 rounded-lg"
            title="Clear history"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Last Logout Info */}
      {lastLogoutDate && (
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center text-blue-700 text-sm">
            <LogOut className="w-4 h-4 mr-2" />
            <span className="font-medium">Last session ended:</span>
            <span className="ml-2 text-blue-800">{new Date(lastLogoutDate).toLocaleString()}</span>
          </div>
        </div>
      )}
      
      <div className="space-y-2 max-h-40 overflow-y-auto">
        {words.map((item, index) => (
          <button
            key={index}
            onClick={() => onWordClick(item.word)}
            className="w-full text-left p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200 group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-gray-700 group-hover:text-blue-700 font-medium">
                  {item.word}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  item.type === 'voice' 
                    ? 'bg-red-100 text-red-600' 
                    : 'bg-purple-100 text-purple-600'
                }`}>
                  {item.type === 'voice' ? '🎤 Voice' : '⌨️ Text'}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <span>{formatTimestamp(item.timestamp)}</span>
                <span>#{words.length - index}</span>
              </div>
            </div>
            {item.userName && (
              <div className="flex items-center mt-1 text-xs text-gray-500">
                <User className="w-3 h-3 mr-1" />
                <span>Added by: {item.userName}</span>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};