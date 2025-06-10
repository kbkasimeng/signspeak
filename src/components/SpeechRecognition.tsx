import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Square } from 'lucide-react';

interface SpeechRecognitionProps {
  onTranscript: (text: string) => void;
  isActive: boolean;
  onToggle: () => void;
}

export const SpeechRecognition: React.FC<SpeechRecognitionProps> = ({
  onTranscript,
  isActive,
  onToggle,
}) => {
  const [isSupported, setIsSupported] = useState(false);
  const [interimTranscript, setInterimTranscript] = useState('');
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Check if speech recognition is supported
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      setIsSupported(true);
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event: any) => {
        let finalTranscript = '';
        let interim = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interim += transcript;
          }
        }

        if (finalTranscript) {
          onTranscript(finalTranscript.trim());
        }
        setInterimTranscript(interim);
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
      };

      recognitionRef.current = recognition;
    } else {
      setIsSupported(false);
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [onTranscript]);

  useEffect(() => {
    if (!recognitionRef.current) return;

    if (isActive) {
      recognitionRef.current.start();
    } else {
      recognitionRef.current.stop();
      setInterimTranscript('');
    }
  }, [isActive]);

  if (!isSupported) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
        <p className="text-red-700 font-medium">Speech recognition is not supported in your browser.</p>
        <p className="text-red-600 text-sm mt-1">Please try using Chrome or Edge for the best experience.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        onClick={onToggle}
        className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 ${
          isActive
            ? 'bg-red-500 hover:bg-red-600 shadow-lg shadow-red-200'
            : 'bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-200'
        }`}
      >
        {isActive ? (
          <Square className="w-8 h-8 text-white" />
        ) : (
          <Mic className="w-8 h-8 text-white" />
        )}
        {isActive && (
          <div className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-75"></div>
        )}
      </button>
      
      <div className="text-center">
        <p className={`font-medium ${isActive ? 'text-red-600' : 'text-gray-600'}`}>
          {isActive ? 'Listening...' : 'Click to start speaking'}
        </p>
        {interimTranscript && (
          <p className="text-gray-500 text-sm mt-2 italic">
            "{interimTranscript}"
          </p>
        )}
      </div>
    </div>
  );
};