export interface SignGesture {
  id: string;
  word: string;
  description: string;
  keyframes: string[];
  duration: number;
  instructions: string;
  category: 'basic' | 'emotion' | 'action' | 'object' | 'question';
  difficulty: 'easy' | 'medium' | 'hard';
  handPosition: string;
  facialExpression?: string;
}

export interface SignSequence {
  gestures: SignGesture[];
  totalDuration: number;
  instructions: string[];
  confidence: number;
}

export interface Text2SignOptions {
  language?: 'ASL' | 'BSL' | 'ISL';
  speed?: 'slow' | 'normal' | 'fast';
  includeFacialExpressions?: boolean;
  includeHandPositions?: boolean;
}

// Enhanced sign language gesture database
const signDatabase: Record<string, SignGesture> = {
  // Basic words
  hello: {
    id: 'hello',
    word: 'hello',
    description: 'Wave hand from side to side',
    keyframes: ['🤚', '👋', '🤚', '👋'],
    duration: 2000,
    instructions: 'Raise your hand and wave it side to side in a friendly greeting motion',
    category: 'basic',
    difficulty: 'easy',
    handPosition: 'Right hand raised, palm forward'
  },
  hi: {
    id: 'hi',
    word: 'hi',
    description: 'Wave hand from side to side',
    keyframes: ['🤚', '👋', '🤚', '👋'],
    duration: 1500,
    instructions: 'Raise your hand and wave it side to side in a friendly greeting motion',
    category: 'basic',
    difficulty: 'easy',
    handPosition: 'Right hand raised, palm forward'
  },
  bye: {
    id: 'bye',
    word: 'bye',
    description: 'Wave hand goodbye',
    keyframes: ['🤚', '👋', '🤚'],
    duration: 1500,
    instructions: 'Wave your hand in a goodbye motion',
    category: 'basic',
    difficulty: 'easy',
    handPosition: 'Right hand waving goodbye'
  },
  goodbye: {
    id: 'goodbye',
    word: 'goodbye',
    description: 'Wave hand goodbye',
    keyframes: ['🤚', '👋', '🤚'],
    duration: 2000,
    instructions: 'Wave your hand in a goodbye motion',
    category: 'basic',
    difficulty: 'easy',
    handPosition: 'Right hand waving goodbye'
  },
  thank: {
    id: 'thank',
    word: 'thank',
    description: 'Touch chin and move hand forward',
    keyframes: ['🤲', '👐', '🙏'],
    duration: 1500,
    instructions: 'Touch your chin with your fingertips, then move your hand forward toward the person',
    category: 'basic',
    difficulty: 'easy',
    handPosition: 'Right hand, fingertips to chin, then forward'
  },
  you: {
    id: 'you',
    word: 'you',
    description: 'Point forward',
    keyframes: ['👉', '👈', '👉'],
    duration: 1000,
    instructions: 'Point your index finger directly at the person you\'re addressing',
    category: 'basic',
    difficulty: 'easy',
    handPosition: 'Index finger pointing forward'
  },
  me: {
    id: 'me',
    word: 'me',
    description: 'Point to yourself',
    keyframes: ['👈', '🫵', '👈'],
    duration: 1000,
    instructions: 'Point your index finger toward your chest to indicate yourself',
    category: 'basic',
    difficulty: 'easy',
    handPosition: 'Index finger pointing to chest'
  },
  please: {
    id: 'please',
    word: 'please',
    description: 'Circular motion on chest',
    keyframes: ['🤲', '🙏', '🤲'],
    duration: 1500,
    instructions: 'Place your flat hand on your chest and make a circular rubbing motion',
    category: 'basic',
    difficulty: 'easy',
    handPosition: 'Flat hand on chest, circular motion'
  },
  sorry: {
    id: 'sorry',
    word: 'sorry',
    description: 'Circular motion on chest with fist',
    keyframes: ['✊', '🤛', '✊'],
    duration: 1500,
    instructions: 'Make a fist and rub it in a circular motion on your chest',
    category: 'emotion',
    difficulty: 'easy',
    handPosition: 'Fist on chest, circular motion'
  },
  good: {
    id: 'good',
    word: 'good',
    description: 'Thumbs up',
    keyframes: ['👍', '👆', '👍'],
    duration: 1200,
    instructions: 'Give a thumbs up gesture',
    category: 'emotion',
    difficulty: 'easy',
    handPosition: 'Thumb pointing up'
  },
  bad: {
    id: 'bad',
    word: 'bad',
    description: 'Thumbs down',
    keyframes: ['👎', '👇', '👎'],
    duration: 1200,
    instructions: 'Give a thumbs down gesture',
    category: 'emotion',
    difficulty: 'easy',
    handPosition: 'Thumb pointing down'
  },
  yes: {
    id: 'yes',
    word: 'yes',
    description: 'Nod head and make fist',
    keyframes: ['✊', '👆', '✊'],
    duration: 1000,
    instructions: 'Make a fist and nod your head up and down',
    category: 'basic',
    difficulty: 'easy',
    handPosition: 'Fist nodding up and down'
  },
  no: {
    id: 'no',
    word: 'no',
    description: 'Shake head and wag finger',
    keyframes: ['👆', '👈', '👆'],
    duration: 1000,
    instructions: 'Shake your head and wag your index finger side to side',
    category: 'basic',
    difficulty: 'easy',
    handPosition: 'Index finger wagging side to side'
  },
  help: {
    id: 'help',
    word: 'help',
    description: 'Raise hand with palm up',
    keyframes: ['🤚', '👐', '🤚'],
    duration: 1500,
    instructions: 'Raise your hand with palm facing up in a help gesture',
    category: 'action',
    difficulty: 'easy',
    handPosition: 'Hand raised, palm up'
  },
  want: {
    id: 'want',
    word: 'want',
    description: 'Pull hands toward chest',
    keyframes: ['🤲', '🤗', '🤲'],
    duration: 1500,
    instructions: 'Pull your hands toward your chest in a wanting motion',
    category: 'action',
    difficulty: 'easy',
    handPosition: 'Hands pulling toward chest'
  },
  need: {
    id: 'need',
    word: 'need',
    description: 'Point to chest and nod',
    keyframes: ['👈', '🫵', '👈'],
    duration: 1500,
    instructions: 'Point to your chest and nod to indicate need',
    category: 'action',
    difficulty: 'easy',
    handPosition: 'Index finger pointing to chest'
  },
  like: {
    id: 'like',
    word: 'like',
    description: 'Thumbs up and smile',
    keyframes: ['👍', '😊', '👍'],
    duration: 1200,
    instructions: 'Give a thumbs up and smile to show you like something',
    category: 'emotion',
    difficulty: 'easy',
    handPosition: 'Thumb up with smile'
  },
  love: {
    id: 'love',
    word: 'love',
    description: 'Cross arms over chest',
    keyframes: ['🤗', '💝', '🤗'],
    duration: 2000,
    instructions: 'Cross your arms over your chest in a hugging motion',
    category: 'emotion',
    difficulty: 'easy',
    handPosition: 'Arms crossed over chest'
  },
  happy: {
    id: 'happy',
    word: 'happy',
    description: 'Smile and raise hands',
    keyframes: ['😊', '🤗', '😊'],
    duration: 1500,
    instructions: 'Smile and raise your hands in a happy gesture',
    category: 'emotion',
    difficulty: 'easy',
    handPosition: 'Hands raised with smile'
  },
  sad: {
    id: 'sad',
    word: 'sad',
    description: 'Lower head and shoulders',
    keyframes: ['😔', '😢', '😔'],
    duration: 1500,
    instructions: 'Lower your head and shoulders in a sad gesture',
    category: 'emotion',
    difficulty: 'easy',
    handPosition: 'Head and shoulders lowered'
  },
  good: {
    id: 'good',
    word: 'good',
    description: 'Thumbs up',
    keyframes: ['👍', '👍', '👍'],
    duration: 1000,
    instructions: 'Give a thumbs up gesture to indicate something positive',
    category: 'emotion',
    difficulty: 'easy',
    handPosition: 'Thumbs up gesture'
  },
  bad: {
    id: 'bad',
    word: 'bad',
    description: 'Thumbs down',
    keyframes: ['👎', '👎', '👎'],
    duration: 1000,
    instructions: 'Give a thumbs down gesture to indicate something negative',
    category: 'emotion',
    difficulty: 'easy',
    handPosition: 'Thumbs down gesture'
  },
  yes: {
    id: 'yes',
    word: 'yes',
    description: 'Nod head (represented as fist up/down)',
    keyframes: ['✊', '👇', '✊', '👇'],
    duration: 1500,
    instructions: 'Make a fist and nod it up and down like nodding your head',
    category: 'basic',
    difficulty: 'easy',
    handPosition: 'Fist moving up and down'
  },
  no: {
    id: 'no',
    word: 'no',
    description: 'Shake head (represented as hands side to side)',
    keyframes: ['🤚', '✋', '🤚', '✋'],
    duration: 1500,
    instructions: 'Hold up your hand and shake it side to side like shaking your head',
    category: 'basic',
    difficulty: 'easy',
    handPosition: 'Hand shaking side to side'
  },
  water: {
    id: 'water',
    word: 'water',
    description: 'W shape to mouth',
    keyframes: ['🤟', '💧', '🤟'],
    duration: 1200,
    instructions: 'Make a \'W\' shape with three fingers and tap it near your mouth',
    category: 'object',
    difficulty: 'medium',
    handPosition: 'W shape near mouth'
  },
  eat: {
    id: 'eat',
    word: 'eat',
    description: 'Bring hand to mouth',
    keyframes: ['🤏', '🍽️', '🤏'],
    duration: 1200,
    instructions: 'Pinch your fingers together and bring them to your mouth repeatedly',
    category: 'action',
    difficulty: 'easy',
    handPosition: 'Pinched fingers to mouth'
  },
  drink: {
    id: 'drink',
    word: 'drink',
    description: 'Cup to mouth motion',
    keyframes: ['🥤', '🤤', '🥤'],
    duration: 1200,
    instructions: 'Make a \'C\' shape with your hand and bring it to your mouth like drinking',
    category: 'action',
    difficulty: 'medium',
    handPosition: 'C shape to mouth'
  },
  help: {
    id: 'help',
    word: 'help',
    description: 'One hand supports the other',
    keyframes: ['🤝', '🙏', '🤝'],
    duration: 1500,
    instructions: 'Place one flat hand under your other fist and lift both hands up',
    category: 'action',
    difficulty: 'medium',
    handPosition: 'One hand under fist, lift up'
  },
  love: {
    id: 'love',
    word: 'love',
    description: 'Cross arms over chest',
    keyframes: ['❤️', '🤗', '❤️'],
    duration: 2000,
    instructions: 'Cross both arms over your chest in a self-hugging motion',
    category: 'emotion',
    difficulty: 'easy',
    handPosition: 'Arms crossed over chest'
  },
  // Additional common words for better sentence coverage
  is: {
    id: 'is',
    word: 'is',
    description: 'Point to side',
    keyframes: ['👆', '👉', '👆'],
    duration: 800,
    instructions: 'Point your index finger to the side',
    category: 'basic',
    difficulty: 'easy',
    handPosition: 'Index finger pointing sideways'
  },
  are: {
    id: 'are',
    word: 'are',
    description: 'Point to side',
    keyframes: ['👆', '👉', '👆'],
    duration: 800,
    instructions: 'Point your index finger to the side',
    category: 'basic',
    difficulty: 'easy',
    handPosition: 'Index finger pointing sideways'
  },
  the: {
    id: 'the',
    word: 'the',
    description: 'Point forward',
    keyframes: ['👆', '👉', '👆'],
    duration: 600,
    instructions: 'Point your index finger forward',
    category: 'basic',
    difficulty: 'easy',
    handPosition: 'Index finger pointing forward'
  },
  and: {
    id: 'and',
    word: 'and',
    description: 'Join hands together',
    keyframes: ['🤲', '🤝', '🤲'],
    duration: 1000,
    instructions: 'Join your hands together to connect ideas',
    category: 'basic',
    difficulty: 'easy',
    handPosition: 'Hands joined together'
  },
  but: {
    id: 'but',
    word: 'but',
    description: 'Hands cross and separate',
    keyframes: ['🤲', '✋', '🤲'],
    duration: 1200,
    instructions: 'Cross your hands and then separate them to show contrast',
    category: 'basic',
    difficulty: 'easy',
    handPosition: 'Hands cross and separate'
  },
  can: {
    id: 'can',
    word: 'can',
    description: 'Fist down and up',
    keyframes: ['✊', '👇', '✊'],
    duration: 1000,
    instructions: 'Make a fist and move it down then up to show ability',
    category: 'action',
    difficulty: 'easy',
    handPosition: 'Fist moving down and up'
  },
  will: {
    id: 'will',
    word: 'will',
    description: 'Point to future',
    keyframes: ['👆', '👉', '👆'],
    duration: 1000,
    instructions: 'Point your index finger forward to indicate future',
    category: 'basic',
    difficulty: 'easy',
    handPosition: 'Index finger pointing to future'
  },
  have: {
    id: 'have',
    word: 'have',
    description: 'Hands grasp and pull',
    keyframes: ['🤲', '🤝', '🤲'],
    duration: 1200,
    instructions: 'Grasp with your hands and pull toward you',
    category: 'action',
    difficulty: 'easy',
    handPosition: 'Hands grasping and pulling'
  },
  had: {
    id: 'had',
    word: 'had',
    description: 'Hands grasp and pull',
    keyframes: ['🤲', '🤝', '🤲'],
    duration: 1200,
    instructions: 'Grasp with your hands and pull toward you',
    category: 'action',
    difficulty: 'easy',
    handPosition: 'Hands grasping and pulling'
  },
  has: {
    id: 'has',
    word: 'has',
    description: 'Hands grasp and pull',
    keyframes: ['🤲', '🤝', '🤲'],
    duration: 1200,
    instructions: 'Grasp with your hands and pull toward you',
    category: 'action',
    difficulty: 'easy',
    handPosition: 'Hands grasping and pulling'
  },
  do: {
    id: 'do',
    word: 'do',
    description: 'Hands move in circles',
    keyframes: ['🤲', '🔄', '🤲'],
    duration: 1200,
    instructions: 'Move your hands in circular motions to show action',
    category: 'action',
    difficulty: 'easy',
    handPosition: 'Hands moving in circles'
  },
  does: {
    id: 'does',
    word: 'does',
    description: 'Hands move in circles',
    keyframes: ['🤲', '🔄', '🤲'],
    duration: 1200,
    instructions: 'Move your hands in circular motions to show action',
    category: 'action',
    difficulty: 'easy',
    handPosition: 'Hands moving in circles'
  },
  did: {
    id: 'did',
    word: 'did',
    description: 'Hands move in circles',
    keyframes: ['🤲', '🔄', '🤲'],
    duration: 1200,
    instructions: 'Move your hands in circular motions to show action',
    category: 'action',
    difficulty: 'easy',
    handPosition: 'Hands moving in circles'
  },
  go: {
    id: 'go',
    word: 'go',
    description: 'Hand points forward',
    keyframes: ['👆', '👉', '👆'],
    duration: 1000,
    instructions: 'Point your index finger forward to show movement',
    category: 'action',
    difficulty: 'easy',
    handPosition: 'Index finger pointing forward'
  },
  went: {
    id: 'went',
    word: 'went',
    description: 'Hand points forward',
    keyframes: ['👆', '👉', '👆'],
    duration: 1000,
    instructions: 'Point your index finger forward to show movement',
    category: 'action',
    difficulty: 'easy',
    handPosition: 'Index finger pointing forward'
  },
  gone: {
    id: 'gone',
    word: 'gone',
    description: 'Hand points forward',
    keyframes: ['👆', '👉', '👆'],
    duration: 1000,
    instructions: 'Point your index finger forward to show movement',
    category: 'action',
    difficulty: 'easy',
    handPosition: 'Index finger pointing forward'
  },
  come: {
    id: 'come',
    word: 'come',
    description: 'Hand beckons toward you',
    keyframes: ['👆', '👈', '👆'],
    duration: 1000,
    instructions: 'Beckon with your hand to show coming toward you',
    category: 'action',
    difficulty: 'easy',
    handPosition: 'Hand beckoning toward you'
  },
  came: {
    id: 'came',
    word: 'came',
    description: 'Hand beckons toward you',
    keyframes: ['👆', '👈', '👆'],
    duration: 1000,
    instructions: 'Beckon with your hand to show coming toward you',
    category: 'action',
    difficulty: 'easy',
    handPosition: 'Hand beckoning toward you'
  },
  see: {
    id: 'see',
    word: 'see',
    description: 'Point to eyes',
    keyframes: ['👆', '👀', '👆'],
    duration: 1000,
    instructions: 'Point to your eyes to show seeing',
    category: 'action',
    difficulty: 'easy',
    handPosition: 'Index finger pointing to eyes'
  },
  saw: {
    id: 'saw',
    word: 'saw',
    description: 'Point to eyes',
    keyframes: ['👆', '👀', '👆'],
    duration: 1000,
    instructions: 'Point to your eyes to show seeing',
    category: 'action',
    difficulty: 'easy',
    handPosition: 'Index finger pointing to eyes'
  },
  seen: {
    id: 'seen',
    word: 'seen',
    description: 'Point to eyes',
    keyframes: ['👆', '👀', '👆'],
    duration: 1000,
    instructions: 'Point to your eyes to show seeing',
    category: 'action',
    difficulty: 'easy',
    handPosition: 'Index finger pointing to eyes'
  },
  look: {
    id: 'look',
    word: 'look',
    description: 'Point to eyes',
    keyframes: ['👆', '👀', '👆'],
    duration: 1000,
    instructions: 'Point to your eyes to show looking',
    category: 'action',
    difficulty: 'easy',
    handPosition: 'Index finger pointing to eyes'
  },
  looked: {
    id: 'looked',
    word: 'looked',
    description: 'Point to eyes',
    keyframes: ['👆', '👀', '👆'],
    duration: 1000,
    instructions: 'Point to your eyes to show looking',
    category: 'action',
    difficulty: 'easy',
    handPosition: 'Index finger pointing to eyes'
  },
  like: {
    id: 'like',
    word: 'like',
    description: 'Thumbs up',
    keyframes: ['👍', '👆', '👍'],
    duration: 1000,
    instructions: 'Give a thumbs up to show liking something',
    category: 'emotion',
    difficulty: 'easy',
    handPosition: 'Thumb pointing up'
  },
  liked: {
    id: 'liked',
    word: 'liked',
    description: 'Thumbs up',
    keyframes: ['👍', '👆', '👍'],
    duration: 1000,
    instructions: 'Give a thumbs up to show liking something',
    category: 'emotion',
    difficulty: 'easy',
    handPosition: 'Thumb pointing up'
  },
  know: {
    id: 'know',
    word: 'know',
    description: 'Tap forehead',
    keyframes: ['👆', '🧠', '👆'],
    duration: 1000,
    instructions: 'Tap your forehead to show knowledge',
    category: 'action',
    difficulty: 'easy',
    handPosition: 'Index finger tapping forehead'
  },
  knew: {
    id: 'knew',
    word: 'knew',
    description: 'Tap forehead',
    keyframes: ['👆', '🧠', '👆'],
    duration: 1000,
    instructions: 'Tap your forehead to show knowledge',
    category: 'action',
    difficulty: 'easy',
    handPosition: 'Index finger tapping forehead'
  },
  known: {
    id: 'known',
    word: 'known',
    description: 'Tap forehead',
    keyframes: ['👆', '🧠', '👆'],
    duration: 1000,
    instructions: 'Tap your forehead to show knowledge',
    category: 'action',
    difficulty: 'easy',
    handPosition: 'Index finger tapping forehead'
  },
  // Additional words
  family: {
    id: 'family',
    word: 'family',
    description: 'F shape circling around',
    keyframes: ['👨‍👩‍👧‍👦', '👪', '👨‍👩‍👧‍👦'],
    duration: 2000,
    instructions: 'Make an F shape and circle it around to represent family',
    category: 'object',
    difficulty: 'medium',
    handPosition: 'F shape circling'
  },
  friend: {
    id: 'friend',
    word: 'friend',
    description: 'Hook index fingers together',
    keyframes: ['🤝', '👥', '🤝'],
    duration: 1800,
    instructions: 'Hook your index fingers together to show friendship',
    category: 'object',
    difficulty: 'medium',
    handPosition: 'Index fingers hooked together'
  },
  work: {
    id: 'work',
    word: 'work',
    description: 'Closed fists tapping together',
    keyframes: ['✊', '🔨', '✊'],
    duration: 1500,
    instructions: 'Make fists and tap them together like working with tools',
    category: 'action',
    difficulty: 'medium',
    handPosition: 'Fists tapping together'
  },
  home: {
    id: 'home',
    word: 'home',
    description: 'Fingers together touching cheek',
    keyframes: ['🏠', '🤚', '🏠'],
    duration: 1500,
    instructions: 'Touch your cheek with your fingertips to represent home',
    category: 'object',
    difficulty: 'easy',
    handPosition: 'Fingertips to cheek'
  },
  school: {
    id: 'school',
    word: 'school',
    description: 'Clap hands together',
    keyframes: ['👏', '📚', '👏'],
    duration: 1200,
    instructions: 'Clap your hands together to represent school',
    category: 'object',
    difficulty: 'easy',
    handPosition: 'Hands clapping together'
  },
  time: {
    id: 'time',
    word: 'time',
    description: 'Index finger pointing to wrist',
    keyframes: ['🕐', '👆', '🕐'],
    duration: 1500,
    instructions: 'Point your index finger to your wrist like checking a watch',
    category: 'object',
    difficulty: 'easy',
    handPosition: 'Index finger to wrist'
  },
  want: {
    id: 'want',
    word: 'want',
    description: 'Hands pulling toward body',
    keyframes: ['🤲', '👐', '🤲'],
    duration: 1500,
    instructions: 'Hold your hands out and pull them toward your body',
    category: 'action',
    difficulty: 'medium',
    handPosition: 'Hands pulling toward body'
  },
  need: {
    id: 'need',
    word: 'need',
    description: 'Index finger pointing down',
    keyframes: ['👇', '👆', '👇'],
    duration: 1200,
    instructions: 'Point your index finger down to indicate need',
    category: 'action',
    difficulty: 'easy',
    handPosition: 'Index finger pointing down'
  },
  understand: {
    id: 'understand',
    word: 'understand',
    description: 'Index finger to forehead',
    keyframes: ['🧠', '👆', '🧠'],
    duration: 1500,
    instructions: 'Touch your forehead with your index finger',
    category: 'action',
    difficulty: 'easy',
    handPosition: 'Index finger to forehead'
  },
  learn: {
    id: 'learn',
    word: 'learn',
    description: 'Hand from forehead to palm',
    keyframes: ['🧠', '📖', '🤲'],
    duration: 2000,
    instructions: 'Start with your hand at your forehead and move it to your palm',
    category: 'action',
    difficulty: 'medium',
    handPosition: 'Hand from forehead to palm'
  }
};

// Word variations and synonyms
const wordVariations: Record<string, string[]> = {
  hello: ['hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
  thank: ['thanks', 'thank you', 'grateful', 'appreciate', 'appreciation'],
  you: ['your', 'yours', 'yourself'],
  me: ['i', 'myself', 'mine', 'my'],
  please: ['plea', 'beg', 'kindly', 'if you please'],
  sorry: ['apologize', 'apology', 'regret', 'excuse me', 'pardon'],
  good: ['great', 'excellent', 'nice', 'fine', 'well', 'wonderful', 'amazing'],
  bad: ['terrible', 'awful', 'poor', 'wrong', 'horrible', 'dreadful'],
  yes: ['yeah', 'yep', 'sure', 'okay', 'ok', 'alright', 'absolutely'],
  no: ['nope', 'nah', 'negative', 'not', 'never', 'nobody'],
  bye: ['goodbye', 'see you', 'farewell', 'later', 'take care'],
  goodbye: ['bye', 'see you', 'farewell', 'later', 'take care'],
  water: ['drink', 'liquid', 'beverage'],
  eat: ['food', 'consume', 'dining', 'meal', 'hungry'],
  drink: ['beverage', 'sip', 'thirsty', 'liquid'],
  help: ['assist', 'aid', 'support', 'assistance', 'helping'],
  love: ['adore', 'care', 'affection', 'heart', 'cherish'],
  like: ['enjoy', 'appreciate', 'favorite', 'fond of'],
  want: ['desire', 'wish', 'need', 'would like', 'crave'],
  need: ['require', 'must', 'essential', 'necessary', 'have to'],
  happy: ['joyful', 'cheerful', 'glad', 'pleased', 'excited', 'delighted'],
  sad: ['unhappy', 'depressed', 'melancholy', 'upset', 'disappointed', 'sorrowful'],
  family: ['relatives', 'kin', 'parents', 'children', 'siblings'],
  friend: ['buddy', 'pal', 'companion', 'mate', 'acquaintance'],
  work: ['job', 'labor', 'employment', 'career', 'profession'],
  home: ['house', 'residence', 'dwelling', 'place', 'living'],
  school: ['education', 'learning', 'academy', 'university', 'college'],
  time: ['clock', 'hour', 'moment', 'minute', 'second'],
  understand: ['comprehend', 'know', 'realize', 'grasp', 'get it'],
  learn: ['study', 'teach', 'education', 'knowledge', 'learning'],
  big: ['large', 'huge', 'enormous', 'giant', 'massive'],
  small: ['little', 'tiny', 'mini', 'petite', 'compact'],
  fast: ['quick', 'rapid', 'swift', 'speedy', 'hurry'],
  slow: ['gradual', 'leisurely', 'unhurried', 'calm'],
  hot: ['warm', 'burning', 'heated', 'scorching'],
  cold: ['cool', 'freezing', 'chilly', 'frozen'],
  new: ['fresh', 'recent', 'modern', 'current'],
  old: ['aged', 'elderly', 'senior', 'mature'],
  beautiful: ['pretty', 'gorgeous', 'stunning', 'attractive'],
  ugly: ['unattractive', 'hideous', 'repulsive', 'unsightly'],
  clean: ['tidy', 'neat', 'organized', 'spotless'],
  dirty: ['messy', 'filthy', 'unclean', 'soiled'],
  easy: ['simple', 'basic', 'straightforward', 'effortless'],
  hard: ['difficult', 'challenging', 'tough', 'complex'],
  important: ['significant', 'crucial', 'essential', 'vital'],
  interesting: ['fascinating', 'engaging', 'captivating', 'intriguing'],
  boring: ['dull', 'tedious', 'monotonous', 'uninteresting'],
  expensive: ['costly', 'pricey', 'dear', 'high-priced'],
  cheap: ['inexpensive', 'affordable', 'budget', 'low-cost'],
  strong: ['powerful', 'mighty', 'robust', 'sturdy'],
  weak: ['feeble', 'frail', 'delicate', 'fragile'],
  young: ['youthful', 'juvenile', 'teenage', 'adolescent'],
  // Add more variations for common words
  is: ['are', 'was', 'were', 'be', 'being', 'been'],
  are: ['is', 'was', 'were', 'be', 'being', 'been'],
  was: ['is', 'are', 'were', 'be', 'being', 'been'],
  were: ['is', 'are', 'was', 'be', 'being', 'been'],
  be: ['is', 'are', 'was', 'were', 'being', 'been'],
  being: ['is', 'are', 'was', 'were', 'be', 'been'],
  been: ['is', 'are', 'was', 'were', 'be', 'being'],
  the: ['a', 'an', 'this', 'that', 'these', 'those'],
  a: ['the', 'an', 'this', 'that', 'these', 'those'],
  an: ['the', 'a', 'this', 'that', 'these', 'those'],
  and: ['but', 'or', 'nor', 'yet', 'so', 'however'],
  but: ['and', 'or', 'nor', 'yet', 'so', 'however'],
  or: ['and', 'but', 'nor', 'yet', 'so', 'however'],
  can: ['could', 'may', 'might', 'will', 'would', 'shall', 'should'],
  could: ['can', 'may', 'might', 'will', 'would', 'shall', 'should'],
  may: ['can', 'could', 'might', 'will', 'would', 'shall', 'should'],
  might: ['can', 'could', 'may', 'will', 'would', 'shall', 'should'],
  will: ['can', 'could', 'may', 'might', 'will', 'shall', 'should'],
  would: ['can', 'could', 'may', 'might', 'will', 'shall', 'should'],
  shall: ['can', 'could', 'may', 'might', 'will', 'would', 'should'],
  should: ['can', 'could', 'may', 'might', 'will', 'would', 'shall'],
  have: ['has', 'had', 'having'],
  has: ['have', 'had', 'having'],
  had: ['have', 'has', 'having'],
  having: ['have', 'has', 'had'],
  do: ['does', 'did', 'doing', 'done'],
  does: ['do', 'did', 'doing', 'done'],
  did: ['do', 'does', 'doing', 'done'],
  doing: ['do', 'does', 'did', 'done'],
  done: ['do', 'does', 'did', 'doing'],
  go: ['goes', 'went', 'gone', 'going'],
  goes: ['go', 'went', 'gone', 'going'],
  went: ['go', 'goes', 'gone', 'going'],
  gone: ['go', 'goes', 'went', 'going'],
  going: ['go', 'goes', 'went', 'gone'],
  come: ['comes', 'came', 'coming'],
  comes: ['come', 'came', 'coming'],
  came: ['come', 'comes', 'coming'],
  coming: ['come', 'comes', 'came'],
  see: ['sees', 'saw', 'seen', 'seeing'],
  sees: ['see', 'saw', 'seen', 'seeing'],
  saw: ['see', 'sees', 'seen', 'seeing'],
  seen: ['see', 'sees', 'saw', 'seeing'],
  seeing: ['see', 'sees', 'saw', 'seen'],
  look: ['looks', 'looked', 'looking'],
  looks: ['look', 'looked', 'looking'],
  looked: ['look', 'looks', 'looking'],
  looking: ['look', 'looks', 'looked'],
  like: ['likes', 'liked', 'liking'],
  likes: ['like', 'liked', 'liking'],
  liked: ['like', 'likes', 'liking'],
  liking: ['like', 'likes', 'liked'],
  know: ['knows', 'knew', 'known', 'knowing'],
  knows: ['know', 'knew', 'known', 'knowing'],
  knew: ['know', 'knows', 'known', 'knowing'],
  known: ['know', 'knows', 'knew', 'knowing'],
  knowing: ['know', 'knows', 'knew', 'known'],
  get: ['gets', 'got', 'gotten', 'getting'],
  gets: ['get', 'got', 'gotten', 'getting'],
  got: ['get', 'gets', 'gotten', 'getting'],
  gotten: ['get', 'gets', 'got', 'getting'],
  getting: ['get', 'gets', 'got', 'gotten'],
  make: ['makes', 'made', 'making'],
  makes: ['make', 'made', 'making'],
  made: ['make', 'makes', 'making'],
  making: ['make', 'makes', 'made'],
  take: ['takes', 'took', 'taken', 'taking'],
  takes: ['take', 'took', 'taken', 'taking'],
  took: ['take', 'takes', 'taken', 'taking'],
  taken: ['take', 'takes', 'took', 'taking'],
  taking: ['take', 'takes', 'took', 'taken'],
  say: ['says', 'said', 'saying'],
  says: ['say', 'said', 'saying'],
  said: ['say', 'says', 'saying'],
  saying: ['say', 'says', 'said'],
  tell: ['tells', 'told', 'telling'],
  tells: ['tell', 'told', 'telling'],
  told: ['tell', 'tells', 'telling'],
  telling: ['tell', 'tells', 'told'],
  think: ['thinks', 'thought', 'thinking'],
  thinks: ['think', 'thought', 'thinking'],
  thought: ['think', 'thinks', 'thinking'],
  thinking: ['think', 'thinks', 'thought'],
  feel: ['feels', 'felt', 'feeling'],
  feels: ['feel', 'felt', 'feeling'],
  felt: ['feel', 'feels', 'feeling'],
  feeling: ['feel', 'feels', 'felt'],
  find: ['finds', 'found', 'finding'],
  finds: ['find', 'found', 'finding'],
  found: ['find', 'finds', 'finding'],
  finding: ['find', 'finds', 'found'],
  give: ['gives', 'gave', 'given', 'giving'],
  gives: ['give', 'gave', 'given', 'giving'],
  gave: ['give', 'gives', 'given', 'giving'],
  given: ['give', 'gives', 'gave', 'giving'],
  giving: ['give', 'gives', 'gave', 'given'],
  show: ['shows', 'showed', 'shown', 'showing'],
  shows: ['show', 'showed', 'shown', 'showing'],
  showed: ['show', 'shows', 'shown', 'showing'],
  shown: ['show', 'shows', 'showed', 'showing'],
  showing: ['show', 'shows', 'showed', 'shown']
};

class Text2SignService {
  private database: Record<string, SignGesture>;
  private variations: Record<string, string[]>;

  constructor() {
    this.database = signDatabase;
    this.variations = wordVariations;
  }

  /**
   * Convert text to sign language sequence
   */
  async convertTextToSign(
    text: string, 
    options: Text2SignOptions = {}
  ): Promise<SignSequence> {
    console.log('Text2Sign: Converting text to sign:', text);
    console.log('Text2Sign: Options:', options);
    
    const {
      language = 'ASL',
      speed = 'normal',
      includeFacialExpressions = true,
      includeHandPositions = true
    } = options;

    // Normalize and clean text
    const normalizedText = this.normalizeText(text);
    console.log('Text2Sign: Normalized text:', normalizedText);
    
    // Split into words
    const words = this.tokenizeText(normalizedText);
    console.log('Text2Sign: Tokenized words:', words);
    
    // Convert each word to sign gesture
    const gestures: SignGesture[] = [];
    const instructions: string[] = [];
    
    for (const word of words) {
      console.log('Text2Sign: Processing word:', word);
      // First try to find a direct word sign
      let gesture = this.findSignGesture(word);
      
      // If no direct sign found, try to generate one based on similar words
      if (!gesture) {
        gesture = this.generateSignForWord(word);
      }
      
      // If still no gesture, try to find compound word signs
      if (!gesture) {
        gesture = this.findCompoundWordSign(word);
      }
      
      // If still no gesture, try to find root word signs
      if (!gesture) {
        gesture = this.findRootWordSign(word);
      }
      
      // Only as a last resort, spell the word letter by letter
      if (!gesture) {
        console.log('Text2Sign: No sign found for word, spelling it out:', word);
        const letterGestures = this.spellWord(word);
        gestures.push(...letterGestures);
        instructions.push(...letterGestures.map(g => g.instructions));
        continue;
      }
      
      console.log('Text2Sign: Found gesture for word:', word, gesture);
      gestures.push(gesture);
      instructions.push(gesture.instructions);
    }

    console.log('Text2Sign: Final gestures:', gestures);
    console.log('Text2Sign: Final instructions:', instructions);

    // Calculate total duration based on speed
    const speedMultiplier = this.getSpeedMultiplier(speed);
    const totalDuration = gestures.reduce((sum, gesture) => sum + gesture.duration, 0) * speedMultiplier;

    // Calculate confidence based on coverage
    const confidence = gestures.length / words.length;

    const result = {
      gestures,
      totalDuration,
      instructions,
      confidence
    };
    
    console.log('Text2Sign: Final result:', result);
    return result;
  }

  /**
   * Find sign gesture for a word
   */
  private findSignGesture(word: string): SignGesture | null {
    const normalizedWord = word.toLowerCase().trim();
    
    // Direct match
    if (this.database[normalizedWord]) {
      return this.database[normalizedWord];
    }
    
    // Check variations (including plurals, verb forms, etc.)
    for (const [baseWord, variations] of Object.entries(this.variations)) {
      if (variations.includes(normalizedWord) && this.database[baseWord]) {
        return this.database[baseWord];
      }
    }
    
    // Check if word contains any known signs (for compound words)
    for (const [signWord, gesture] of Object.entries(this.database)) {
      if (normalizedWord.includes(signWord) && signWord.length > 2) {
        return gesture;
      }
    }
    
    // Check for exact matches in variations
    for (const [baseWord, variations] of Object.entries(this.variations)) {
      if (this.database[baseWord] && variations.includes(normalizedWord)) {
        return this.database[baseWord];
      }
    }
    
    // Check for words that are contained within the input word
    for (const [signWord, gesture] of Object.entries(this.database)) {
      if (signWord.length > 2 && normalizedWord.includes(signWord)) {
        return gesture;
      }
    }
    
    return null;
  }

  /**
   * Find compound word signs by breaking down the word
   */
  private findCompoundWordSign(word: string): SignGesture | null {
    const normalizedWord = word.toLowerCase().trim();
    
    // Try to find compound words (e.g., "goodbye" -> "good" + "bye")
    const compoundWords = this.findCompoundWords(normalizedWord);
    if (compoundWords.length > 1) {
      // Create a compound gesture
      const gestures = compoundWords
        .map(part => this.database[part])
        .filter(Boolean);
      
      if (gestures.length > 0) {
        return {
          id: `compound_${word}`,
          word: word,
          description: `Compound sign for "${word}"`,
          keyframes: gestures[0].keyframes, // Use first gesture's keyframes
          duration: gestures.reduce((sum, g) => sum + g.duration, 0),
          instructions: `Sign "${word}" by combining: ${gestures.map(g => g.word).join(' + ')}`,
          category: 'compound',
          difficulty: 'medium',
          handPosition: gestures[0].handPosition
        };
      }
    }
    
    return null;
  }

  /**
   * Find root word signs by removing common suffixes/prefixes
   */
  private findRootWordSign(word: string): SignGesture | null {
    const normalizedWord = word.toLowerCase().trim();
    
    // Common suffixes to try removing
    const suffixes = ['ing', 'ed', 'er', 'est', 'ly', 's', 'es', 'tion', 'sion', 'ment', 'ness', 'ful', 'less'];
    // Common prefixes to try removing
    const prefixes = ['un', 're', 'pre', 'dis', 'mis', 'in', 'im', 'il', 'ir'];
    
    // Try removing suffixes
    for (const suffix of suffixes) {
      if (normalizedWord.endsWith(suffix) && normalizedWord.length > suffix.length + 2) {
        const rootWord = normalizedWord.slice(0, -suffix.length);
        if (this.database[rootWord]) {
          return {
            ...this.database[rootWord],
            id: `root_${word}`,
            word: word,
            description: `Sign for "${word}" (using root word "${rootWord}")`,
            instructions: `Use the sign for "${rootWord}" to represent "${word}"`
          };
        }
      }
    }
    
    // Try removing prefixes
    for (const prefix of prefixes) {
      if (normalizedWord.startsWith(prefix) && normalizedWord.length > prefix.length + 2) {
        const rootWord = normalizedWord.slice(prefix.length);
        if (this.database[rootWord]) {
          return {
            ...this.database[rootWord],
            id: `root_${word}`,
            word: word,
            description: `Sign for "${word}" (using root word "${rootWord}")`,
            instructions: `Use the sign for "${rootWord}" to represent "${word}"`
          };
        }
      }
    }
    
    return null;
  }

  /**
   * Find compound words by breaking down a word into known parts
   */
  private findCompoundWords(word: string): string[] {
    const normalizedWord = word.toLowerCase().trim();
    const parts: string[] = [];
    
    // Try to find known words within the compound word
    for (const [knownWord, gesture] of Object.entries(this.database)) {
      if (normalizedWord.includes(knownWord) && knownWord.length > 2) {
        parts.push(knownWord);
      }
    }
    
    // Sort by length (longest first) to prioritize longer matches
    return parts.sort((a, b) => b.length - a.length);
  }

  /**
   * Normalize text for processing
   */
  private normalizeText(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ') // Remove punctuation
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim();
  }

  /**
   * Tokenize text into words
   */
  private tokenizeText(text: string): string[] {
    return text.split(' ').filter(word => word.length > 0);
  }

  /**
   * Get speed multiplier for animation
   */
  private getSpeedMultiplier(speed: string): number {
    switch (speed) {
      case 'slow': return 1.5;
      case 'fast': return 0.7;
      default: return 1.0;
    }
  }

  /**
   * Generate a sign gesture for an unknown word
   */
  private generateSignForWord(word: string): SignGesture | null {
    const normalizedWord = word.toLowerCase();
    
    // First try exact substring matches
    for (const [knownWord, gesture] of Object.entries(this.database)) {
      if (normalizedWord.includes(knownWord) || knownWord.includes(normalizedWord)) {
        return {
          ...gesture,
          id: `generated_${word}`,
          word: word,
          description: `Sign for "${word}" (similar to "${knownWord}")`,
          instructions: `Use the sign for "${knownWord}" to represent "${word}"`
        };
      }
    }
    
    // Try fuzzy matching for similar words
    const similarWord = this.findSimilarWord(normalizedWord);
    if (similarWord) {
      return {
        ...this.database[similarWord],
        id: `generated_${word}`,
        word: word,
        description: `Sign for "${word}" (similar to "${similarWord}")`,
        instructions: `Use the sign for "${similarWord}" to represent "${word}"`
      };
    }
    
    // Try to find words with similar meanings
    const synonymWord = this.findSynonymWord(normalizedWord);
    if (synonymWord) {
      return {
        ...this.database[synonymWord],
        id: `generated_${word}`,
        word: word,
        description: `Sign for "${word}" (synonym of "${synonymWord}")`,
        instructions: `Use the sign for "${synonymWord}" to represent "${word}"`
      };
    }
    
    return null;
  }

  /**
   * Find a similar word using basic similarity metrics
   */
  private findSimilarWord(word: string): string | null {
    let bestMatch: string | null = null;
    let bestScore = 0;
    
    for (const knownWord of Object.keys(this.database)) {
      const score = this.calculateSimilarity(word, knownWord);
      if (score > bestScore && score > 0.6) { // Minimum similarity threshold
        bestScore = score;
        bestMatch = knownWord;
      }
    }
    
    return bestMatch;
  }

  /**
   * Calculate similarity between two words using Levenshtein distance
   */
  private calculateSimilarity(word1: string, word2: string): number {
    const distance = this.levenshteinDistance(word1, word2);
    const maxLength = Math.max(word1.length, word2.length);
    return 1 - (distance / maxLength);
  }

  /**
   * Calculate Levenshtein distance between two strings
   */
  private levenshteinDistance(str1: string, str2: string): number {
    const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));
    
    for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;
    
    for (let j = 1; j <= str2.length; j++) {
      for (let i = 1; i <= str1.length; i++) {
        const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1, // deletion
          matrix[j - 1][i] + 1, // insertion
          matrix[j - 1][i - 1] + indicator // substitution
        );
      }
    }
    
    return matrix[str2.length][str1.length];
  }

  /**
   * Find a synonym word (basic implementation)
   */
  private findSynonymWord(word: string): string | null {
    // Basic synonym mapping - this could be expanded with a proper thesaurus
    const synonyms: Record<string, string[]> = {
      'happy': ['joy', 'glad', 'pleased'],
      'sad': ['unhappy', 'sorrow', 'grief'],
      'big': ['large', 'huge', 'enormous'],
      'small': ['tiny', 'little', 'mini'],
      'good': ['great', 'excellent', 'wonderful'],
      'bad': ['terrible', 'awful', 'horrible'],
      'fast': ['quick', 'rapid', 'swift'],
      'slow': ['sluggish', 'leisurely', 'gradual']
    };
    
    // Check if the word is a synonym of any known word
    for (const [knownWord, synonymList] of Object.entries(synonyms)) {
      if (synonymList.includes(word) && this.database[knownWord]) {
        return knownWord;
      }
    }
    
    // Check if any known word is a synonym of the input word
    for (const [knownWord, synonymList] of Object.entries(synonyms)) {
      if (synonymList.includes(word) && this.database[knownWord]) {
        return knownWord;
      }
    }
    
    return null;
  }

  /**
   * Spell a word letter by letter using finger spelling
   */
  private spellWord(word: string): SignGesture[] {
    const letters = word.toLowerCase().split('');
    const fingerSpelling: Record<string, SignGesture> = {
      'a': {
        id: 'letter_a',
        word: 'A',
        description: 'Finger spelling: A',
        keyframes: ['✊', '🤚'],
        duration: 800,
        instructions: 'Make a fist with your thumb on the side',
        category: 'basic',
        difficulty: 'easy',
        handPosition: 'Fist with thumb on side'
      },
      'b': {
        id: 'letter_b',
        word: 'B',
        description: 'Finger spelling: B',
        keyframes: ['✋', '🤚'],
        duration: 800,
        instructions: 'Hold all fingers straight up with thumb tucked in',
        category: 'basic',
        difficulty: 'easy',
        handPosition: 'All fingers straight, thumb tucked'
      },
      'c': {
        id: 'letter_c',
        word: 'C',
        description: 'Finger spelling: C',
        keyframes: ['🤏', '👌'],
        duration: 800,
        instructions: 'Curve your fingers to form a C shape',
        category: 'basic',
        difficulty: 'easy',
        handPosition: 'Curved fingers forming C shape'
      },
      'd': {
        id: 'letter_d',
        word: 'D',
        description: 'Finger spelling: D',
        keyframes: ['👆', '☝️'],
        duration: 800,
        instructions: 'Point your index finger up with other fingers closed',
        category: 'basic',
        difficulty: 'easy',
        handPosition: 'Index finger pointing up'
      },
      'e': {
        id: 'letter_e',
        word: 'E',
        description: 'Finger spelling: E',
        keyframes: ['✊', '🤛'],
        duration: 800,
        instructions: 'Make a fist with fingers curled over thumb',
        category: 'basic',
        difficulty: 'easy',
        handPosition: 'Fist with fingers curled'
      },
      'f': {
        id: 'letter_f',
        word: 'F',
        description: 'Finger spelling: F',
        keyframes: ['🤏', '👌'],
        duration: 800,
        instructions: 'Touch thumb and index finger, other fingers up',
        category: 'basic',
        difficulty: 'easy',
        handPosition: 'Thumb and index touching, others up'
      },
      'g': {
        id: 'letter_g',
        word: 'G',
        description: 'Finger spelling: G',
        keyframes: ['👆', '☝️'],
        duration: 800,
        instructions: 'Point index finger to the side',
        category: 'basic',
        difficulty: 'easy',
        handPosition: 'Index finger pointing sideways'
      },
      'h': {
        id: 'letter_h',
        word: 'H',
        description: 'Finger spelling: H',
        keyframes: ['✌️', '🤞'],
        duration: 800,
        instructions: 'Hold index and middle fingers up',
        category: 'basic',
        difficulty: 'easy',
        handPosition: 'Index and middle fingers up'
      },
      'i': {
        id: 'letter_i',
        word: 'I',
        description: 'Finger spelling: I',
        keyframes: ['👆', '☝️'],
        duration: 800,
        instructions: 'Point pinky finger up',
        category: 'basic',
        difficulty: 'easy',
        handPosition: 'Pinky finger pointing up'
      },
      'j': {
        id: 'letter_j',
        word: 'J',
        description: 'Finger spelling: J',
        keyframes: ['👆', '☝️'],
        duration: 800,
        instructions: 'Point pinky finger up and trace a J shape',
        category: 'basic',
        difficulty: 'easy',
        handPosition: 'Pinky finger tracing J'
      },
      'k': {
        id: 'letter_k',
        word: 'K',
        description: 'Finger spelling: K',
        keyframes: ['✌️', '🤞'],
        duration: 800,
        instructions: 'Hold index and middle fingers up with thumb between them',
        category: 'basic',
        difficulty: 'easy',
        handPosition: 'Index and middle up, thumb between'
      },
      'l': {
        id: 'letter_l',
        word: 'L',
        description: 'Finger spelling: L',
        keyframes: ['👆', '☝️'],
        duration: 800,
        instructions: 'Hold thumb and index finger to form L shape',
        category: 'basic',
        difficulty: 'easy',
        handPosition: 'Thumb and index forming L'
      },
      'm': {
        id: 'letter_m',
        word: 'M',
        description: 'Finger spelling: M',
        keyframes: ['✊', '🤛'],
        duration: 800,
        instructions: 'Hold three fingers down with thumb tucked',
        category: 'basic',
        difficulty: 'easy',
        handPosition: 'Three fingers down, thumb tucked'
      },
      'n': {
        id: 'letter_n',
        word: 'N',
        description: 'Finger spelling: N',
        keyframes: ['✊', '🤛'],
        duration: 800,
        instructions: 'Hold two fingers down with thumb tucked',
        category: 'basic',
        difficulty: 'easy',
        handPosition: 'Two fingers down, thumb tucked'
      },
      'o': {
        id: 'letter_o',
        word: 'O',
        description: 'Finger spelling: O',
        keyframes: ['👌', '🤏'],
        duration: 800,
        instructions: 'Form a circle with your fingers',
        category: 'basic',
        difficulty: 'easy',
        handPosition: 'Fingers forming circle'
      },
      'p': {
        id: 'letter_p',
        word: 'P',
        description: 'Finger spelling: P',
        keyframes: ['👆', '☝️'],
        duration: 800,
        instructions: 'Point index finger down',
        category: 'basic',
        difficulty: 'easy',
        handPosition: 'Index finger pointing down'
      },
      'q': {
        id: 'letter_q',
        word: 'Q',
        description: 'Finger spelling: Q',
        keyframes: ['👆', '☝️'],
        duration: 800,
        instructions: 'Point index finger down and to the side',
        category: 'basic',
        difficulty: 'easy',
        handPosition: 'Index finger pointing down and sideways'
      },
      'r': {
        id: 'letter_r',
        word: 'R',
        description: 'Finger spelling: R',
        keyframes: ['✌️', '🤞'],
        duration: 800,
        instructions: 'Cross index and middle fingers',
        category: 'basic',
        difficulty: 'easy',
        handPosition: 'Index and middle fingers crossed'
      },
      's': {
        id: 'letter_s',
        word: 'S',
        description: 'Finger spelling: S',
        keyframes: ['✊', '🤛'],
        duration: 800,
        instructions: 'Make a fist',
        category: 'basic',
        difficulty: 'easy',
        handPosition: 'Closed fist'
      },
      't': {
        id: 'letter_t',
        word: 'T',
        description: 'Finger spelling: T',
        keyframes: ['👆', '☝️'],
        duration: 800,
        instructions: 'Hold index finger up with thumb between index and middle',
        category: 'basic',
        difficulty: 'easy',
        handPosition: 'Index up, thumb between fingers'
      },
      'u': {
        id: 'letter_u',
        word: 'U',
        description: 'Finger spelling: U',
        keyframes: ['✌️', '🤞'],
        duration: 800,
        instructions: 'Hold index and middle fingers up together',
        category: 'basic',
        difficulty: 'easy',
        handPosition: 'Index and middle fingers together'
      },
      'v': {
        id: 'letter_v',
        word: 'V',
        description: 'Finger spelling: V',
        keyframes: ['✌️', '🤞'],
        duration: 800,
        instructions: 'Hold index and middle fingers up in V shape',
        category: 'basic',
        difficulty: 'easy',
        handPosition: 'Index and middle in V shape'
      },
      'w': {
        id: 'letter_w',
        word: 'W',
        description: 'Finger spelling: W',
        keyframes: ['🤟', '🤘'],
        duration: 800,
        instructions: 'Hold three fingers up',
        category: 'basic',
        difficulty: 'easy',
        handPosition: 'Three fingers up'
      },
      'x': {
        id: 'letter_x',
        word: 'X',
        description: 'Finger spelling: X',
        keyframes: ['👆', '☝️'],
        duration: 800,
        instructions: 'Point index finger up and bend it',
        category: 'basic',
        difficulty: 'easy',
        handPosition: 'Index finger bent up'
      },
      'y': {
        id: 'letter_y',
        word: 'Y',
        description: 'Finger spelling: Y',
        keyframes: ['👍', '👆'],
        duration: 800,
        instructions: 'Hold thumb and pinky up',
        category: 'basic',
        difficulty: 'easy',
        handPosition: 'Thumb and pinky up'
      },
      'z': {
        id: 'letter_z',
        word: 'Z',
        description: 'Finger spelling: Z',
        keyframes: ['👆', '☝️'],
        duration: 800,
        instructions: 'Point index finger and trace a Z shape',
        category: 'basic',
        difficulty: 'easy',
        handPosition: 'Index finger tracing Z'
      }
    };

    return letters
      .filter(letter => fingerSpelling[letter])
      .map(letter => fingerSpelling[letter]);
  }

  /**
   * Get all available signs
   */
  getAllSigns(): SignGesture[] {
    return Object.values(this.database);
  }

  /**
   * Get signs by category
   */
  getSignsByCategory(category: string): SignGesture[] {
    return Object.values(this.database).filter(gesture => gesture.category === category);
  }

  /**
   * Get signs by difficulty
   */
  getSignsByDifficulty(difficulty: string): SignGesture[] {
    return Object.values(this.database).filter(gesture => gesture.difficulty === difficulty);
  }

  /**
   * Search signs by keyword
   */
  searchSigns(keyword: string): SignGesture[] {
    const normalizedKeyword = keyword.toLowerCase();
    return Object.values(this.database).filter(gesture => 
      gesture.word.includes(normalizedKeyword) ||
      gesture.description.includes(normalizedKeyword) ||
      gesture.instructions.includes(normalizedKeyword)
    );
  }

  /**
   * Get random sign for practice
   */
  getRandomSign(): SignGesture {
    const signs = Object.values(this.database);
    return signs[Math.floor(Math.random() * signs.length)];
  }

  /**
   * Get multiple random signs for practice
   */
  getRandomSigns(count: number): SignGesture[] {
    const signs = Object.values(this.database);
    const shuffled = [...signs].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}

// Create singleton instance
export const text2SignService = new Text2SignService();

// Export types and service
export default text2SignService; 