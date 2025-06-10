import React from 'react';

interface SignAnimationProps {
  word: string;
  isAnimating: boolean;
}

// Sign language gesture data (simplified representations)
const signGestures: Record<string, {
  description: string;
  keyframes: string[];
  duration: number;
  instructions: string;
}> = {
  hello: {
    description: "Wave hand from side to side",
    keyframes: ["🤚", "👋", "🤚", "👋"],
    duration: 2000,
    instructions: "Raise your hand and wave it side to side in a friendly greeting motion"
  },
  thank: {
    description: "Touch chin and move hand forward",
    keyframes: ["🤲", "👐", "🙏"],
    duration: 1500,
    instructions: "Touch your chin with your fingertips, then move your hand forward toward the person"
  },
  you: {
    description: "Point forward",
    keyframes: ["👉", "👈", "👉"],
    duration: 1000,
    instructions: "Point your index finger directly at the person you're addressing"
  },
  me: {
    description: "Point to yourself",
    keyframes: ["👈", "🫵", "👈"],
    duration: 1000,
    instructions: "Point your index finger toward your chest to indicate yourself"
  },
  please: {
    description: "Circular motion on chest",
    keyframes: ["🤲", "🙏", "🤲"],
    duration: 1500,
    instructions: "Place your flat hand on your chest and make a circular rubbing motion"
  },
  sorry: {
    description: "Circular motion on chest with fist",
    keyframes: ["✊", "🤛", "✊"],
    duration: 1500,
    instructions: "Make a fist and rub it in a circular motion on your chest"
  },
  good: {
    description: "Thumbs up",
    keyframes: ["👍", "👍", "👍"],
    duration: 1000,
    instructions: "Give a thumbs up gesture to indicate something positive"
  },
  bad: {
    description: "Thumbs down",
    keyframes: ["👎", "👎", "👎"],
    duration: 1000,
    instructions: "Give a thumbs down gesture to indicate something negative"
  },
  yes: {
    description: "Nod head (represented as fist up/down)",
    keyframes: ["✊", "👇", "✊", "👇"],
    duration: 1500,
    instructions: "Make a fist and nod it up and down like nodding your head"
  },
  no: {
    description: "Shake head (represented as hands side to side)",
    keyframes: ["🤚", "✋", "🤚", "✋"],
    duration: 1500,
    instructions: "Hold up your hand and shake it side to side like shaking your head"
  },
  water: {
    description: "W shape to mouth",
    keyframes: ["🤟", "💧", "🤟"],
    duration: 1200,
    instructions: "Make a 'W' shape with three fingers and tap it near your mouth"
  },
  eat: {
    description: "Bring hand to mouth",
    keyframes: ["🤏", "🍽️", "🤏"],
    duration: 1200,
    instructions: "Pinch your fingers together and bring them to your mouth repeatedly"
  },
  drink: {
    description: "Cup to mouth motion",
    keyframes: ["🥤", "🤤", "🥤"],
    duration: 1200,
    instructions: "Make a 'C' shape with your hand and bring it to your mouth like drinking"
  },
  help: {
    description: "One hand supports the other",
    keyframes: ["🤝", "🙏", "🤝"],
    duration: 1500,
    instructions: "Place one flat hand under your other fist and lift both hands up"
  },
  love: {
    description: "Cross arms over chest",
    keyframes: ["❤️", "🤗", "❤️"],
    duration: 2000,
    instructions: "Cross both arms over your chest in a self-hugging motion"
  }
};

export const SignAnimation: React.FC<SignAnimationProps> = ({ word, isAnimating }) => {
  const normalizedWord = word.toLowerCase().trim();
  const gesture = signGestures[normalizedWord];
  
  if (!gesture) {
    return (
      <div className="text-center p-8">
        <div className="text-6xl mb-4">❓</div>
        <p className="text-gray-600 mb-4">
          Sign for "<span className="font-semibold">{word}</span>" not found
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
          <p className="text-blue-800 font-medium mb-2">Try these supported words:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {Object.keys(signGestures).slice(0, 8).map((supportedWord) => (
              <span key={supportedWord} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                {supportedWord}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center p-8">
      <div className="relative mb-6">
        <div 
          className={`text-8xl transition-transform duration-500 ${
            isAnimating ? 'animate-bounce' : ''
          }`}
          style={{
            animationDuration: `${gesture.duration}ms`,
            animationIterationCount: isAnimating ? 'infinite' : '1'
          }}
        >
          {gesture.keyframes[0]}
        </div>
        {isAnimating && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin opacity-20"></div>
          </div>
        )}
      </div>
      
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-800 capitalize">{word}</h3>
        <p className="text-gray-600 font-medium">
          {gesture.description}
        </p>
        
        {/* Detailed Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
          <p className="text-blue-800 text-sm">
            <span className="font-medium">How to sign:</span> {gesture.instructions}
          </p>
        </div>
      </div>
      
      {/* Animation frames preview */}
      <div className="flex justify-center space-x-2 mt-6">
        {gesture.keyframes.map((frame, index) => (
          <div
            key={index}
            className={`text-2xl p-3 rounded-lg transition-all duration-300 ${
              isAnimating 
                ? 'bg-blue-100 transform scale-110 shadow-lg' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            style={{
              animationDelay: `${index * (gesture.duration / gesture.keyframes.length)}ms`
            }}
          >
            {frame}
          </div>
        ))}
      </div>

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
    </div>
  );
};