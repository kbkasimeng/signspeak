import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, Mic, Type, Clock, Play } from 'lucide-react';

interface TutorialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const tutorialSteps = [
  {
    title: "Welcome to SignSpeak",
    content: "Transform your spoken words into beautiful sign language animations. Let's learn how to use the app!",
    icon: <Play className="w-8 h-8 text-blue-600" />,
    image: "🎯"
  },
  {
    title: "Speech Recognition",
    content: "Click the microphone button to start voice recognition. Speak clearly and watch as your words are converted to sign language in real-time.",
    icon: <Mic className="w-8 h-8 text-red-600" />,
    image: "🎤",
    highlight: "Click the blue microphone button to start listening"
  },
  {
    title: "Text Input",
    content: "Prefer typing? Use the text input box to type any word and see its sign language representation instantly.",
    icon: <Type className="w-8 h-8 text-purple-600" />,
    image: "⌨️",
    highlight: "Type words like 'hello', 'thank', 'you', 'please'"
  },
  {
    title: "Word History",
    content: "Your spoken and typed words are saved in the history panel. Click any word to see its sign animation again.",
    icon: <Clock className="w-8 h-8 text-green-600" />,
    image: "📝",
    highlight: "Click on any word in history to replay its animation"
  },
  {
    title: "Available Words",
    content: "SignSpeak currently supports common words like: hello, thank, you, me, please, sorry, good, bad, yes, no, help, love, water, eat, drink",
    icon: <ArrowRight className="w-8 h-8 text-indigo-600" />,
    image: "📚",
    highlight: "Try saying or typing these words to see their signs"
  }
];

export const TutorialModal: React.FC<TutorialModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) return null;

  const nextStep = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentTutorial = tutorialSteps[currentStep];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-3">
            {currentTutorial.icon}
            <div>
              <h2 className="text-2xl font-bold">{currentTutorial.title}</h2>
              <p className="text-blue-100">Step {currentStep + 1} of {tutorialSteps.length}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="text-8xl mb-4">{currentTutorial.image}</div>
            <p className="text-gray-600 text-lg leading-relaxed">
              {currentTutorial.content}
            </p>
            {currentTutorial.highlight && (
              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 font-medium">
                  💡 {currentTutorial.highlight}
                </p>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Progress</span>
              <span>{Math.round(((currentStep + 1) / tutorialSteps.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / tutorialSteps.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <div className="flex space-x-2">
              {tutorialSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStep
                      ? 'bg-blue-500'
                      : index < currentStep
                      ? 'bg-green-500'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {currentStep === tutorialSteps.length - 1 ? (
              <button
                onClick={onClose}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
              >
                Get Started
              </button>
            ) : (
              <button
                onClick={nextStep}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};