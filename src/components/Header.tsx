import React, { useState } from 'react';
import { Hand, Waves, HelpCircle, Play } from 'lucide-react';
import { TutorialModal } from './tutorial/TutorialModal';
import { HelpPanel } from './help/HelpPanel';

export const Header: React.FC = () => {
  const [showTutorial, setShowTutorial] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  return (
    <>
      <header className="text-center mb-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg">
            <Hand className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            SignSpeak
          </h1>
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full shadow-lg">
            <Waves className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-4">
          Transform your spoken words into beautiful sign language animations
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Speak clearly or type to see animated sign language representations
        </p>

        {/* Help Buttons */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setShowTutorial(true)}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Play className="w-5 h-5" />
            <span>How to Use</span>
          </button>
          <button
            onClick={() => setShowHelp(true)}
            className="flex items-center space-x-2 px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-200"
          >
            <HelpCircle className="w-5 h-5" />
            <span>Help & FAQ</span>
          </button>
        </div>

        {/* Quick Start Guide */}
        <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 p-6 max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Start Guide</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <p className="font-medium text-blue-800">Click Microphone</p>
                <p className="text-blue-600">Start voice recognition</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <p className="font-medium text-purple-800">Speak or Type</p>
                <p className="text-purple-600">Say words clearly</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <p className="font-medium text-green-800">Watch Animation</p>
                <p className="text-green-600">See sign language</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <TutorialModal isOpen={showTutorial} onClose={() => setShowTutorial(false)} />
      <HelpPanel isOpen={showHelp} onClose={() => setShowHelp(false)} />
    </>
  );
};