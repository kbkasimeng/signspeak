import React, { useState } from 'react';
import { Send, Type } from 'lucide-react';

interface TextInputProps {
  onSubmit: (text: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text.trim());
      setText('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <Type className="w-5 h-5 mr-2" />
        Type to Convert
      </h3>
      
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a word to see its sign..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
        <button
          type="submit"
          disabled={!text.trim()}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 flex items-center space-x-1"
        >
          <Send className="w-4 h-4" />
          <span>Convert</span>
        </button>
      </form>
      
      <p className="text-xs text-gray-500 mt-2">
        Try words like: hello, thank, you, me, please, good, bad, yes, no, help, love
      </p>
    </div>
  );
};