import React, { useState, useEffect, useCallback } from 'react';
import { text2SignService, SignGesture } from '../services/text2sign';

interface PracticeModeProps {
  onSignSelect?: (sign: SignGesture) => void;
}

interface PracticeSession {
  signs: SignGesture[];
  currentIndex: number;
  score: number;
  totalAttempts: number;
  correctAttempts: number;
  startTime: Date;
}

export const PracticeMode: React.FC<PracticeModeProps> = ({ onSignSelect }) => {
  const [isActive, setIsActive] = useState(false);
  const [session, setSession] = useState<PracticeSession | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'easy' | 'medium' | 'hard' | 'mixed'>('easy');
  const [sessionSize, setSessionSize] = useState(5);
  const [showHint, setShowHint] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [timeLimit, setTimeLimit] = useState(30); // seconds per sign
  const [timeRemaining, setTimeRemaining] = useState(timeLimit);

  const getRandomSigns = useCallback((difficulty: string, count: number): SignGesture[] => {
    if (difficulty === 'mixed') {
      return text2SignService.getRandomSigns(count);
    }
    return text2SignService.getSignsByDifficulty(difficulty).slice(0, count);
  }, []);

  const startSession = useCallback(() => {
    const signs = getRandomSigns(selectedDifficulty, sessionSize);
    if (signs.length === 0) {
      alert('No signs available for the selected difficulty. Try a different difficulty level.');
      return;
    }

    const newSession: PracticeSession = {
      signs,
      currentIndex: 0,
      score: 0,
      totalAttempts: 0,
      correctAttempts: 0,
      startTime: new Date()
    };

    setSession(newSession);
    setIsActive(true);
    setTimeRemaining(timeLimit);
    setUserAnswer('');
    setFeedback(null);
    setShowHint(false);
  }, [selectedDifficulty, sessionSize, timeLimit, getRandomSigns]);

  const endSession = useCallback(() => {
    setIsActive(false);
    setSession(null);
    setUserAnswer('');
    setFeedback(null);
    setShowHint(false);
    setTimeRemaining(timeLimit);
  }, [timeLimit]);

  const checkAnswer = useCallback(() => {
    if (!session || !userAnswer.trim()) return;

    const currentSign = session.signs[session.currentIndex];
    const isCorrect = currentSign.word.toLowerCase() === userAnswer.toLowerCase().trim();
    
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    
    const newSession = {
      ...session,
      totalAttempts: session.totalAttempts + 1,
      correctAttempts: session.correctAttempts + (isCorrect ? 1 : 0),
      score: session.score + (isCorrect ? 10 : 0)
    };

    setSession(newSession);

    // Move to next sign after delay
    setTimeout(() => {
      if (newSession.currentIndex < newSession.signs.length - 1) {
        setSession({
          ...newSession,
          currentIndex: newSession.currentIndex + 1
        });
        setUserAnswer('');
        setFeedback(null);
        setShowHint(false);
        setTimeRemaining(timeLimit);
      } else {
        // Session complete
        endSession();
      }
    }, 2000);
  }, [session, userAnswer, timeLimit, endSession]);

  const skipSign = useCallback(() => {
    if (!session) return;

    const newSession = {
      ...session,
      totalAttempts: session.totalAttempts + 1
    };

    if (newSession.currentIndex < newSession.signs.length - 1) {
      setSession({
        ...newSession,
        currentIndex: newSession.currentIndex + 1
      });
      setUserAnswer('');
      setFeedback(null);
      setShowHint(false);
      setTimeRemaining(timeLimit);
    } else {
      endSession();
    }
  }, [session, timeLimit, endSession]);

  // Timer effect
  useEffect(() => {
    if (!isActive || !session) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          // Time's up - count as incorrect
          skipSign();
          return timeLimit;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, session, timeLimit, skipSign]);

  // Handle Enter key
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && isActive) {
        checkAnswer();
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [isActive, checkAnswer]);

  const getCurrentSign = (): SignGesture | null => {
    if (!session) return null;
    return session.signs[session.currentIndex];
  };

  const getProgressPercentage = (): number => {
    if (!session) return 0;
    return ((session.currentIndex + 1) / session.signs.length) * 100;
  };

  const getAccuracy = (): number => {
    if (!session || session.totalAttempts === 0) return 0;
    return (session.correctAttempts / session.totalAttempts) * 100;
  };

  const getSessionDuration = (): number => {
    if (!session) return 0;
    return Math.floor((new Date().getTime() - session.startTime.getTime()) / 1000);
  };

  // Session complete modal
  if (!isActive && session) {
    const accuracy = getAccuracy();
    const duration = getSessionDuration();
    
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
        <div className="text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Practice Session Complete!</h3>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{session.score}</div>
              <div className="text-sm text-blue-800">Score</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{Math.round(accuracy)}%</div>
              <div className="text-sm text-green-800">Accuracy</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">{session.correctAttempts}/{session.totalAttempts}</div>
              <div className="text-sm text-purple-800">Correct</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">{duration}s</div>
              <div className="text-sm text-orange-800">Duration</div>
            </div>
          </div>

          <div className="space-y-2">
            <button
              onClick={startSession}
              className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Practice Again
            </button>
            <button
              onClick={endSession}
              className="w-full bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Back to Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Practice interface
  if (isActive && session) {
    const currentSign = getCurrentSign();
    const progress = getProgressPercentage();

    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800">Practice Mode</h3>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">
              {session.currentIndex + 1} / {session.signs.length}
            </div>
            <div className="text-sm text-gray-600">
              Score: {session.score}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Timer */}
        <div className="mb-6 text-center">
          <div className={`text-2xl font-bold ${
            timeRemaining <= 10 ? 'text-red-600' : 'text-gray-800'
          }`}>
            {timeRemaining}s
          </div>
          <div className="text-sm text-gray-600">Time Remaining</div>
        </div>

        {/* Current Sign Display */}
        {currentSign && (
          <div className="text-center mb-6">
            <div className="text-8xl mb-4 animate-pulse">
              {currentSign.keyframes[0]}
            </div>
            <p className="text-gray-600 mb-2">{currentSign.description}</p>
            
            {showHint && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                <p className="text-yellow-800 text-sm">
                  <span className="font-medium">Hint:</span> {currentSign.handPosition}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Answer Input */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What sign is this?
            </label>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Type the word..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={feedback !== null}
            />
          </div>

          {/* Feedback */}
          {feedback && (
            <div className={`p-4 rounded-lg ${
              feedback === 'correct' 
                ? 'bg-green-50 border border-green-200 text-green-800' 
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}>
              <div className="flex items-center gap-2">
                <span className="text-xl">
                  {feedback === 'correct' ? '✅' : '❌'}
                </span>
                <span className="font-medium">
                  {feedback === 'correct' ? 'Correct!' : `Incorrect. The answer is "${currentSign?.word}"`}
                </span>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={checkAnswer}
              disabled={!userAnswer.trim() || feedback !== null}
              className="flex-1 bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Check Answer
            </button>
            <button
              onClick={() => setShowHint(!showHint)}
              className="px-4 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
            >
              {showHint ? 'Hide' : 'Show'} Hint
            </button>
            <button
              onClick={skipSign}
              className="px-4 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Skip
            </button>
          </div>
        </div>

        {/* Session Stats */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="font-bold text-blue-600">{session.correctAttempts}</div>
              <div className="text-gray-600">Correct</div>
            </div>
            <div>
              <div className="font-bold text-red-600">{session.totalAttempts - session.correctAttempts}</div>
              <div className="text-gray-600">Incorrect</div>
            </div>
            <div>
              <div className="font-bold text-green-600">{Math.round(getAccuracy())}%</div>
              <div className="text-gray-600">Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Setup interface
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
      <div className="text-center mb-6">
        <div className="text-6xl mb-4">📚</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Practice Mode</h3>
        <p className="text-gray-600">Test your sign language knowledge with interactive exercises</p>
      </div>

      <div className="space-y-6">
        {/* Difficulty Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Difficulty Level
          </label>
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value as 'easy' | 'medium' | 'hard' | 'mixed')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            <option value="mixed">Mixed</option>
          </select>
        </div>

        {/* Session Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Signs
          </label>
          <select
            value={sessionSize}
            onChange={(e) => setSessionSize(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value={5}>5 signs</option>
            <option value={10}>10 signs</option>
            <option value={15}>15 signs</option>
            <option value={20}>20 signs</option>
          </select>
        </div>

        {/* Time Limit */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Time Limit per Sign (seconds)
          </label>
          <select
            value={timeLimit}
            onChange={(e) => setTimeLimit(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value={15}>15 seconds</option>
            <option value={30}>30 seconds</option>
            <option value={45}>45 seconds</option>
            <option value={60}>60 seconds</option>
          </select>
        </div>

        {/* Start Button */}
        <button
          onClick={startSession}
          className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
        >
          Start Practice Session
        </button>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-800 mb-2">How it works:</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• You'll see a sign animation</li>
            <li>• Type the word that matches the sign</li>
            <li>• Use hints if you need help</li>
            <li>• Try to get as many correct as possible!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}; 