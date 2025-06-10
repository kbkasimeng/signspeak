import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronRight, Mic, Type, Clock, Volume2 } from 'lucide-react';

interface HelpPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const faqData = [
  {
    question: "How do I start using speech recognition?",
    answer: "Click the blue microphone button in the left panel. When it turns red and shows 'Listening...', start speaking clearly. Your words will automatically convert to sign language animations.",
    icon: <Mic className="w-5 h-5 text-red-500" />
  },
  {
    question: "What words does SignSpeak recognize?",
    answer: "SignSpeak currently supports common words including: hello, thank, you, me, please, sorry, good, bad, yes, no, help, love, water, eat, drink, and more. We're constantly adding new words!",
    icon: <Volume2 className="w-5 h-5 text-blue-500" />
  },
  {
    question: "Can I type instead of speaking?",
    answer: "Yes! Use the text input box below the microphone. Type any supported word and click 'Convert' to see its sign language animation.",
    icon: <Type className="w-5 h-5 text-purple-500" />
  },
  {
    question: "How does the word history work?",
    answer: "All words you speak or type are automatically saved in the Word History panel. Click on any word to replay its sign language animation. You can clear the history anytime.",
    icon: <Clock className="w-5 h-5 text-green-500" />
  },
  {
    question: "Why isn't speech recognition working?",
    answer: "Speech recognition requires a modern browser (Chrome, Edge, Safari) and microphone permissions. Make sure your microphone is enabled and try speaking clearly in a quiet environment.",
    icon: <HelpCircle className="w-5 h-5 text-orange-500" />
  },
  {
    question: "Is my voice data stored or transmitted?",
    answer: "No! All speech processing happens locally in your browser using the Web Speech API. Your voice never leaves your device, ensuring complete privacy.",
    icon: <HelpCircle className="w-5 h-5 text-indigo-500" />
  }
];

const quickTips = [
  "Speak clearly and at a normal pace for best results",
  "Try common words first: hello, thank you, please",
  "Use the text input if speech recognition isn't working",
  "Click words in history to see their animations again",
  "The app works best in quiet environments"
];

export const HelpPanel: React.FC<HelpPanelProps> = ({ isOpen, onClose }) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  if (!isOpen) return null;

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            ×
          </button>
          <div className="flex items-center space-x-3">
            <HelpCircle className="w-8 h-8" />
            <div>
              <h2 className="text-2xl font-bold">Help & Support</h2>
              <p className="text-green-100">Everything you need to know about SignSpeak</p>
            </div>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Quick Tips */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Tips</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {quickTips.map((tip, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-blue-800 text-sm">💡 {tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>
            <div className="space-y-3">
              {faqData.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      {faq.icon}
                      <span className="font-medium text-gray-800">{faq.question}</span>
                    </div>
                    {expandedFaq === index ? (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-4 pb-4 pt-0">
                      <div className="bg-gray-50 rounded-lg p-4 ml-8">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Still Need Help?</h3>
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for? Our support team is here to help!
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:support@signspeak.com"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
              >
                Email Support
              </a>
              <a
                href="/privacy"
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/security"
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm"
              >
                Security Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};