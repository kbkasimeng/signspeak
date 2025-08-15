import React, { useState, useCallback, useEffect } from 'react';
import { Header } from '../components/Header';
import { SpeechRecognition } from '../components/SpeechRecognition';
import { EnhancedSignAnimation } from '../components/EnhancedSignAnimation';
import { SignDictionary } from '../components/SignDictionary';
import { PracticeMode } from '../components/PracticeMode';
import { WordHistory } from '../components/WordHistory';
import { TextInput } from '../components/TextInput';
import Text2SignDemo from '../components/Text2SignDemo';
import { SignGesture, Text2SignOptions } from '../services/text2sign';
import { useAuth } from '../contexts/AuthContext';

type ActiveTab = 'convert' | 'dictionary' | 'practice' | 'demo';

interface WordHistoryItem {
  word: string;
  timestamp: string;
  type: 'voice' | 'text';
  userId?: string;
  userName?: string;
}

export const HomePage: React.FC = () => {
  const { user, saveWordHistory, getWordHistory, getLastLogoutDate } = useAuth();
  const [currentText, setCurrentText] = useState('');
  const [wordHistory, setWordHistory] = useState<WordHistoryItem[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeTab, setActiveTab] = useState<ActiveTab>('convert');
  const [lastLogoutDate, setLastLogoutDate] = useState<string | null>(null);
  const [animationOptions, setAnimationOptions] = useState<Text2SignOptions>({
    language: 'ASL',
    speed: 'normal',
    includeFacialExpressions: true,
    includeHandPositions: true
  });

  // Load word history on component mount
  useEffect(() => {
    if (user) {
      const savedHistory = getWordHistory();
      console.log('Loading word history for user:', user.email, 'History:', savedHistory);
      setWordHistory(savedHistory);
      const logoutDate = getLastLogoutDate();
      console.log('Last logout date:', logoutDate);
      setLastLogoutDate(logoutDate);
    }
  }, [user, getWordHistory, getLastLogoutDate]);

  // Save word history when it changes
  useEffect(() => {
    if (user && wordHistory.length > 0) {
      console.log('Saving word history:', wordHistory);
      saveWordHistory(wordHistory);
    }
  }, [wordHistory, user, saveWordHistory]);

  const handleTranscript = useCallback((text: string) => {
    // Process the full sentence instead of just the last word
    console.log('Speech transcript received:', text);
    console.log('Current text before update:', currentText);
    
    if (text.trim() && text !== currentText) {
      const newHistoryItem: WordHistoryItem = {
        word: text,
        timestamp: new Date().toISOString(),
        type: 'voice',
        userId: user?.id,
        userName: user?.name
      };
      
      console.log('Setting new current text:', text);
      setCurrentText(text);
      setWordHistory(prev => [newHistoryItem, ...prev.slice(0, 9)]); // Keep last 10 words
      setIsAnimating(true);
      
      // Stop animation after 3 seconds
      setTimeout(() => setIsAnimating(false), 3000);
    } else {
      console.log('Text not updated - either empty, same as current, or no change');
    }
  }, [currentText, user]);

  const handleTextSubmit = useCallback((text: string) => {
    if (text.trim()) {
      const newHistoryItem: WordHistoryItem = {
        word: text,
        timestamp: new Date().toISOString(),
        type: 'text',
        userId: user?.id,
        userName: user?.name
      };
      
      setCurrentText(text);
      setWordHistory(prev => [newHistoryItem, ...prev.slice(0, 9)]);
      setIsAnimating(true);
      
      setTimeout(() => setIsAnimating(false), 3000);
    }
  }, [user]);

  const handleSignSelect = useCallback((sign: SignGesture) => {
    setCurrentText(sign.word);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 3000);
  }, []);

  const toggleListening = useCallback(() => {
    setIsListening(prev => !prev);
  }, []);

  const clearHistory = useCallback(() => {
    setWordHistory([]);
    if (user) {
      saveWordHistory([]);
    }
  }, [user, saveWordHistory]);

  const handleWordClick = useCallback((word: string) => {
    setCurrentText(word);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 3000);
  }, []);

  const handleAnimationComplete = useCallback(() => {
    setIsAnimating(false);
  }, []);

  const handleAnimationOptionsChange = useCallback((options: Partial<Text2SignOptions>) => {
    setAnimationOptions(prev => ({ ...prev, ...options }));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <Header />
      
      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="flex space-x-1 bg-white/80 backdrop-blur-sm rounded-xl p-1 shadow-lg border border-white/20">
          <button
            onClick={() => setActiveTab('convert')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'convert'
                ? 'bg-blue-500 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg">🤟</span>
              <span>Convert</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('dictionary')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'dictionary'
                ? 'bg-blue-500 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg">📚</span>
              <span>Dictionary</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('practice')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'practice'
                ? 'bg-blue-500 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg">🎯</span>
              <span>Practice</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('demo')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'demo'
                ? 'bg-blue-500 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg">🚀</span>
              <span>Demo</span>
            </div>
          </button>
        </div>
      </div>

      {/* Convert Tab */}
      {activeTab === 'convert' && (
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
              lastLogoutDate={lastLogoutDate || undefined}
            />

            {/* Animation Options */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Animation Options</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Language
                  </label>
                  <select
                    value={animationOptions.language}
                    onChange={(e) => handleAnimationOptionsChange({ language: e.target.value as 'ASL' | 'BSL' | 'ISL' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="ASL">American Sign Language (ASL)</option>
                    <option value="BSL">British Sign Language (BSL)</option>
                    <option value="ISL">International Sign Language (ISL)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Speed
                  </label>
                  <select
                    value={animationOptions.speed}
                    onChange={(e) => handleAnimationOptionsChange({ speed: e.target.value as 'slow' | 'normal' | 'fast' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="slow">Slow</option>
                    <option value="normal">Normal</option>
                    <option value="fast">Fast</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="facialExpressions"
                    checked={animationOptions.includeFacialExpressions}
                    onChange={(e) => handleAnimationOptionsChange({ includeFacialExpressions: e.target.checked })}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="facialExpressions" className="text-sm text-gray-700">
                    Include facial expressions
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="handPositions"
                    checked={animationOptions.includeHandPositions}
                    onChange={(e) => handleAnimationOptionsChange({ includeHandPositions: e.target.checked })}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="handPositions" className="text-sm text-gray-700">
                    Include hand positions
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Animation Display */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 min-h-[600px]">
              <EnhancedSignAnimation 
                text={currentText}
                isAnimating={isAnimating}
                onAnimationComplete={handleAnimationComplete}
                options={animationOptions}
              />
            </div>
          </div>
        </div>
      )}

      {/* Dictionary Tab */}
      {activeTab === 'dictionary' && (
        <div className="max-w-6xl mx-auto">
          <SignDictionary onSignSelect={handleSignSelect} />
        </div>
      )}

      {/* Practice Tab */}
      {activeTab === 'practice' && (
        <div className="max-w-4xl mx-auto">
          <PracticeMode onSignSelect={handleSignSelect} />
        </div>
      )}

      {/* Demo Tab */}
      {activeTab === 'demo' && (
        <div className="max-w-6xl mx-auto">
          <Text2SignDemo />
        </div>
      )}
      
      {/* Footer */}
      <footer className="text-center mt-12 pt-8 border-t border-white/20">
        <p className="text-gray-500 text-sm">
          Built with ❤️ for accessibility and communication
        </p>
        <p className="text-gray-400 text-xs mt-2">
          Powered by advanced text2sign technology
        </p>
      </footer>
    </div>
  );
};