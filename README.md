# SignSpeak - Advanced Text-to-Sign Language Platform

A comprehensive web application that converts text and speech to sign language animations, featuring an advanced text2sign model integration for enhanced accessibility and learning.

## 🚀 Features

### Core Text2Sign Integration
- **Advanced Text Processing**: Sophisticated text-to-sign language conversion with word normalization and tokenization
- **Multi-Language Support**: ASL (American Sign Language), BSL (British Sign Language), and ISL (International Sign Language)
- **Intelligent Word Matching**: Handles synonyms, variations, and partial matches for better coverage
- **Confidence Scoring**: Provides accuracy metrics for conversion quality
- **Speed Control**: Adjustable animation speeds (slow, normal, fast)

### Enhanced Animation System
- **Frame-by-Frame Animation**: Smooth transitions between sign keyframes
- **Progress Tracking**: Visual progress indicators for multi-word sequences
- **Hand Position Details**: Detailed instructions for proper hand positioning
- **Facial Expression Support**: Optional facial expression guidance
- **Category Classification**: Signs organized by difficulty and type

### Interactive Learning Tools
- **Sign Dictionary**: Browse and search through the complete sign database
- **Practice Mode**: Interactive exercises with scoring and progress tracking
- **Difficulty Levels**: Easy, medium, hard, and mixed difficulty options
- **Timed Challenges**: Configurable time limits for practice sessions
- **Hint System**: Contextual hints to help with learning

### User Experience
- **Tabbed Interface**: Organized sections for Convert, Dictionary, and Practice
- **Speech Recognition**: Real-time speech-to-sign conversion
- **Word History**: Track and replay previous conversions
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Accessibility Features**: Keyboard navigation and screen reader support

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Build Tool**: Vite
- **Text2Sign Engine**: Custom service with comprehensive sign database
- **Speech Recognition**: Web Speech API integration
- **State Management**: React hooks and context

## 📁 Project Structure

```
signspeak/
├── src/
│   ├── components/
│   │   ├── EnhancedSignAnimation.tsx    # Advanced animation component
│   │   ├── SignDictionary.tsx           # Sign browsing interface
│   │   ├── PracticeMode.tsx             # Interactive learning mode
│   │   ├── SpeechRecognition.tsx        # Speech input handling
│   │   ├── TextInput.tsx                # Text input component
│   │   └── ...                          # Other UI components
│   ├── services/
│   │   └── text2sign.ts                 # Core text2sign service
│   ├── pages/
│   │   └── HomePage.tsx                 # Main application interface
│   └── ...                              # Other source files
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd signspeak
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📖 Usage Guide

### Convert Tab
- **Speech Input**: Click the microphone button and speak to convert speech to signs
- **Text Input**: Type words or phrases in the text field
- **Animation Options**: Adjust language, speed, and display preferences
- **Word History**: Click on previous words to replay their animations

### Dictionary Tab
- **Browse Signs**: View all available signs with filtering options
- **Search**: Find specific signs by keyword
- **Filter**: Sort by category, difficulty, or alphabetical order
- **Learn**: Click on any sign to see detailed instructions and animations

### Practice Tab
- **Setup Session**: Choose difficulty level, session size, and time limits
- **Interactive Learning**: Identify signs from animations
- **Progress Tracking**: Monitor accuracy and completion rates
- **Hints**: Use hints when you need help with difficult signs

## 🔧 Configuration

### Animation Options
- **Language**: Select ASL, BSL, or ISL
- **Speed**: Choose slow, normal, or fast animation speed
- **Facial Expressions**: Toggle facial expression guidance
- **Hand Positions**: Enable detailed hand position instructions

### Practice Settings
- **Difficulty**: Easy, medium, hard, or mixed
- **Session Size**: 5, 10, 15, or 20 signs per session
- **Time Limit**: 15, 30, 45, or 60 seconds per sign

## 📊 Sign Database

The application includes a comprehensive database of sign language gestures:

- **25+ Basic Signs**: Common words like hello, thank you, yes, no
- **Emotional Signs**: Love, sorry, good, bad
- **Action Signs**: Eat, drink, help, work
- **Object Signs**: Water, home, school, family
- **Difficulty Levels**: Easy, medium, and hard classifications
- **Categories**: Basic, emotion, action, object, question

## 🎯 Key Features of Text2Sign Integration

### Intelligent Text Processing
- **Word Normalization**: Handles capitalization, punctuation, and spacing
- **Synonym Matching**: Recognizes variations like "hi" for "hello"
- **Partial Matching**: Finds signs even with incomplete word matches
- **Confidence Scoring**: Provides accuracy metrics for conversions

### Advanced Animation System
- **Multi-Frame Sequences**: Smooth transitions between animation frames
- **Progress Tracking**: Visual indicators for multi-word sequences
- **Speed Control**: Adjustable animation timing
- **Error Handling**: Graceful fallbacks for unsupported words

### Learning Enhancement
- **Detailed Instructions**: Step-by-step guidance for each sign
- **Hand Position Details**: Precise positioning information
- **Category Organization**: Logical grouping of related signs
- **Difficulty Progression**: Structured learning paths

## 🔮 Future Enhancements

- **3D Avatar Support**: Realistic 3D character animations
- **Machine Learning Integration**: AI-powered sign recognition
- **Video Tutorials**: Comprehensive learning videos
- **Community Features**: User-generated content and sharing
- **Mobile App**: Native iOS and Android applications
- **Offline Support**: Local sign database for offline use

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Sign language experts and educators
- Accessibility advocates and organizations
- Open source community contributors
- Users and testers who provided valuable feedback

## 📞 Support

For support, questions, or feature requests, please open an issue on GitHub or contact the development team.

---

**Built with ❤️ for accessibility and communication**
