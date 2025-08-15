import React, { useState, useEffect, useCallback } from 'react';
import { 
  text2SignService, 
  SignSequence, 
  SignGesture, 
  Text2SignOptions 
} from '../services/text2sign';

interface EnhancedSignAnimationProps {
  text: string;
  isAnimating: boolean;
  onAnimationComplete?: () => void;
  options?: Text2SignOptions;
}

export const EnhancedSignAnimation: React.FC<EnhancedSignAnimationProps> = ({
  text,
  isAnimating,
  onAnimationComplete,
  options = {}
}) => {
  const [signSequence, setSignSequence] = useState<SignSequence | null>(null);
  const [currentGestureIndex, setCurrentGestureIndex] = useState(0);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [animationSpeed, setAnimationSpeed] = useState(options.speed || 'normal');

  // Convert text to sign sequence when text changes
  useEffect(() => {
    if (text.trim()) {
      convertTextToSign();
    } else {
      setSignSequence(null);
      setCurrentGestureIndex(0);
      setCurrentFrameIndex(0);
    }
  }, [text, options]);

  // Handle animation when isAnimating changes
  useEffect(() => {
    if (isAnimating && signSequence) {
      startAnimation();
    } else {
      stopAnimation();
    }
  }, [isAnimating, signSequence]);

  const convertTextToSign = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const sequence = await text2SignService.convertTextToSign(text, {
        ...options,
        speed: animationSpeed
      });
      setSignSequence(sequence);
      setCurrentGestureIndex(0);
      setCurrentFrameIndex(0);
    } catch (err) {
      setError('Failed to convert text to sign language');
      console.error('Text2Sign conversion error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [text, options, animationSpeed]);

  const startAnimation = useCallback(() => {
    if (!signSequence || signSequence.gestures.length === 0) return;

    const currentGesture = signSequence.gestures[currentGestureIndex];
    const baseFrameDuration = currentGesture.duration / currentGesture.keyframes.length;
    
    // Apply speed multiplier
    const speedMultiplier = animationSpeed === 'slow' ? 1.5 : animationSpeed === 'fast' ? 0.7 : 1.0;
    const frameDuration = baseFrameDuration * speedMultiplier;
    
    const frameInterval = setInterval(() => {
      setCurrentFrameIndex(prev => {
        if (prev < currentGesture.keyframes.length - 1) {
          return prev + 1;
        } else {
          // Move to next gesture
          setCurrentGestureIndex(prevGesture => {
            if (prevGesture < signSequence.gestures.length - 1) {
              setCurrentFrameIndex(0);
              return prevGesture + 1;
            } else {
              // Animation complete
              clearInterval(frameInterval);
              onAnimationComplete?.();
              return 0;
            }
          });
          return 0;
        }
      });
    }, frameDuration);

    return () => clearInterval(frameInterval);
  }, [signSequence, currentGestureIndex, onAnimationComplete]);

  const stopAnimation = useCallback(() => {
    setCurrentGestureIndex(0);
    setCurrentFrameIndex(0);
  }, []);

  const handleSpeedChange = useCallback((speed: 'slow' | 'normal' | 'fast') => {
    setAnimationSpeed(speed);
    if (text.trim()) {
      convertTextToSign();
    }
  }, [text, convertTextToSign]);

  const getCurrentGesture = (): SignGesture | null => {
    if (!signSequence || currentGestureIndex >= signSequence.gestures.length) {
      return null;
    }
    return signSequence.gestures[currentGestureIndex];
  };

  const getCurrentFrame = (): string => {
    const gesture = getCurrentGesture();
    if (!gesture) return '👋';
    return gesture.keyframes[currentFrameIndex] || gesture.keyframes[0];
  };

  const getProgressPercentage = (): number => {
    if (!signSequence || signSequence.gestures.length === 0) return 0;
    return ((currentGestureIndex + 1) / signSequence.gestures.length) * 100;
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="text-center p-8">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Converting text to sign language...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="text-center p-8">
        <div className="text-6xl mb-4">⚠️</div>
        <p className="text-red-600 mb-4">{error}</p>
        <button 
          onClick={convertTextToSign}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  // No text state
  if (!text.trim()) {
    return (
      <div className="text-center p-8">
        <div className="text-8xl mb-6 animate-pulse">👋</div>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">
          Ready to Convert
        </h2>
        <p className="text-gray-500 max-w-md mx-auto">
          Start speaking or type text to see its sign language animation
        </p>
      </div>
    );
  }

  // No signs found
  if (signSequence && signSequence.gestures.length === 0) {
    return (
      <div className="text-center p-8">
        <div className="text-6xl mb-4">❓</div>
        <p className="text-gray-600 mb-4">
          No signs found for "<span className="font-semibold">{text}</span>"
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
          <p className="text-blue-800 font-medium mb-2">Try these supported words:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {text2SignService.getRandomSigns(8).map((sign) => (
              <span key={sign.id} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                {sign.word}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const currentGesture = getCurrentGesture();
  const currentFrame = getCurrentFrame();
  const progress = getProgressPercentage();

  return (
    <div className="text-center p-8">
      {/* Animation Controls */}
      <div className="mb-6 flex justify-center items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Speed:</span>
          <select
            value={animationSpeed}
            onChange={(e) => handleSpeedChange(e.target.value as 'slow' | 'normal' | 'fast')}
            className="text-sm border border-gray-300 rounded px-2 py-1 bg-white"
          >
            <option value="slow">Slow</option>
            <option value="normal">Normal</option>
            <option value="fast">Fast</option>
          </select>
        </div>
        
        {signSequence && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Confidence:</span>
            <div className="flex items-center gap-1">
              <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-500 transition-all duration-300"
                  style={{ width: `${signSequence.confidence * 100}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-500">
                {Math.round(signSequence.confidence * 100)}%
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      {signSequence && signSequence.gestures.length > 1 && (
        <div className="mb-6">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Progress</span>
            <span>{currentGestureIndex + 1} / {signSequence.gestures.length}</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Main Animation Display */}
      <div className="relative mb-6">
        <div 
          className={`text-8xl transition-all duration-300 ${
            isAnimating ? 'animate-pulse scale-110' : ''
          }`}
        >
          {currentFrame}
        </div>
        
        {isAnimating && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin opacity-20"></div>
          </div>
        )}
      </div>

      {/* Current Word and Gesture Info */}
      {currentGesture && (
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2">
            <h3 className="text-2xl font-bold text-gray-800 capitalize">
              {currentGesture.word}
            </h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              currentGesture.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
              currentGesture.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {currentGesture.difficulty}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800`}>
              {currentGesture.category}
            </span>
          </div>
          
          <p className="text-gray-600 font-medium">
            {currentGesture.description}
          </p>
          
          {/* Hand Position */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-blue-800 text-sm">
              <span className="font-medium">Hand Position:</span> {currentGesture.handPosition}
            </p>
          </div>

          {/* Detailed Instructions */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-green-800 text-sm">
              <span className="font-medium">How to sign:</span> {currentGesture.instructions}
            </p>
          </div>
        </div>
      )}

      {/* Animation Frames Preview */}
      {currentGesture && (
        <div className="flex justify-center space-x-2 mt-6">
          {currentGesture.keyframes.map((frame, index) => (
            <div
              key={index}
              className={`text-2xl p-3 rounded-lg transition-all duration-300 ${
                isAnimating && index === currentFrameIndex
                  ? 'bg-blue-100 transform scale-110 shadow-lg border-2 border-blue-300' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {frame}
            </div>
          ))}
        </div>
      )}

      {/* Animation Status */}
      <div className="mt-4">
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
          isAnimating 
            ? 'bg-green-100 text-green-800' 
            : 'bg-gray-100 text-gray-600'
        }`}>
          <div className={`w-2 h-2 rounded-full mr-2 ${
            isAnimating ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
          }`}></div>
          {isAnimating ? 'Animating...' : 'Ready'}
        </div>
      </div>

      {/* Sequence Preview */}
      {signSequence && signSequence.gestures.length > 1 && (
        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Full Sequence:</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {signSequence.gestures.map((gesture, index) => (
              <div
                key={gesture.id}
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  index === currentGestureIndex
                    ? 'bg-blue-500 text-white'
                    : index < currentGestureIndex
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {gesture.word}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}; 