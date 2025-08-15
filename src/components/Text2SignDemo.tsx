import React, { useState } from 'react';
import { text2SignService } from '../services/text2sign';

const Text2SignDemo: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleConvert = async () => {
    if (!inputText.trim()) return;
    
    setIsProcessing(true);
    try {
      const signSequence = await text2SignService.convertTextToSign(inputText, {
        speed: 'normal',
        includeFacialExpressions: true,
        includeHandPositions: true
      });
      setResult(signSequence);
    } catch (error) {
      console.error('Error converting text to sign:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const examplePhrases = [
    "Hello world",
    "I love you",
    "Thank you very much",
    "How are you today?",
    "This is amazing",
    "I need help please",
    "Good morning everyone",
    "Have a wonderful day",
    "I'm learning sign language",
    "Can you help me?"
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Enhanced Text2Sign Demo
      </h2>
      
      <div className="mb-6">
        <p className="text-gray-600 mb-4 text-center">
          Try any words or sentences! The system will:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
          <li>Find exact matches in our sign database</li>
          <li>Use similar signs for unknown words</li>
          <li>Spell out completely unknown words letter by letter</li>
          <li>Handle phrases and sentences</li>
        </ul>
      </div>

      <div className="mb-6">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter any words or sentence..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onKeyPress={(e) => e.key === 'Enter' && handleConvert()}
          />
          <button
            onClick={handleConvert}
            disabled={isProcessing || !inputText.trim()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? 'Converting...' : 'Convert'}
          </button>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-2">Try these examples:</p>
          <div className="flex flex-wrap gap-2">
            {examplePhrases.map((phrase, index) => (
              <button
                key={index}
                onClick={() => setInputText(phrase)}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
              >
                {phrase}
              </button>
            ))}
          </div>
        </div>
      </div>

      {result && (
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-4 text-green-600">
            Conversion Result
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-500">Confidence Score</p>
              <p className="text-2xl font-bold text-blue-600">
                {Math.round(result.confidence * 100)}%
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Duration</p>
              <p className="text-2xl font-bold text-green-600">
                {(result.totalDuration / 1000).toFixed(1)}s
              </p>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-2">Sign Sequence:</p>
            <div className="space-y-2">
              {result.gestures.map((gesture: any, index: number) => (
                <div key={index} className="bg-white p-3 rounded border">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{gesture.keyframes[0]}</span>
                    <div>
                      <p className="font-semibold text-blue-600">{gesture.word}</p>
                      <p className="text-sm text-gray-600">{gesture.description}</p>
                      <p className="text-xs text-gray-500">{gesture.handPosition}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">Instructions:</p>
            <div className="bg-white p-3 rounded border">
              <ol className="list-decimal list-inside space-y-1 text-sm">
                {result.instructions.map((instruction: string, index: number) => (
                  <li key={index} className="text-gray-700">{instruction}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Text2SignDemo; 