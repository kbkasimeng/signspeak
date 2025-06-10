import React, { useState, useCallback } from 'react';
import { Header } from '../components/Header';
import { SpeechRecognition } from '../components/SpeechRecognition';
import { SignAnimation } from '../components/SignAnimation';
import { WordHistory } from '../components/WordHistory';
import { TextInput } from '../components/TextInput';

export const HomePage: React.FC = () => {
  const [currentWord, setCurrentWord] = useState('');
  const [wordHistory, setWordHistory] = useState<string[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTranscript = useCallback((text: string) => {
    const words = text.split(' ').filter(word => word.length > 0);
    const lastWord = words[words.length - 1];
    
    if (lastWord && lastWord !== currentWord) {
      setCurrentWord(lastWord);
      setWordHistory(prev => [lastWord, ...prev.slice(0, 9)]); // Keep last 10 words
      setIsAnimating(true);
      
      // Stop animation after 3 seconds
      setTimeout(() => setIsAnimating(false), 3000);
    }
  }, [currentWord]);

  const handleTextSubmit = useCallback((text: string) => {
    const words = text.split(' ').filter(word => word.length > 0);
    const word = words[0]; // Take first word
    
    if (word) {
      setCurrentWord(word);
      setWordHistory(prev => [word, ...prev.slice(0, 9)]);
      setIsAnimating(true);
      
      setTimeout(() => setIsAnimating(false), 3000);
    }
  }, []);

  const toggleListening = useCallback(() => {
    setIsListening(prev => !prev);
  }, []);

  const clearHistory = useCallback(() => {
    setWordHistory([]);
  }, []);

  const handleWordClick = useCallback((word: string) => {
    setCurrentWord(word);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 3000);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Header />
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Controls */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
            <SpeechRecognition
              onTranscript={handleTranscript}
              isActive={isListening}
              onToggle={toggleListening}
            />
          </div>
          
          <TextInput onSubmit={handleTextSubmit} />
          
          <WordHistory
            words={wordHistory}
            onClear={clearHistory}
            onWordClick={handleWordClick}
          />
        </div>
        
        {/* Right Column - Animation Display */}
        <div className="lg:col-span-2">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 min-h-[500px] flex items-center justify-center">
            {currentWord ? (
              <SignAnimation 
                word={currentWord} 
                isAnimating={isAnimating}
              />
            ) : (
              <div className="text-center p-8">
                <div className="text-8xl mb-6 animate-pulse">👋</div>
                <h2 className="text-2xl font-bold text-gray-700 mb-2">
                  Ready to Convert
                </h2>
                <p className="text-gray-500 max-w-md mx-auto">
                  Start speaking or type a word to see its sign language animation
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="text-center mt-12 pt-8 border-t border-white/20">
        <p className="text-gray-500 text-sm">
          Built with ❤️ for accessibility and communication
        </p>
      </footer>
    </div>
  );
};