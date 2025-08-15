import React, { useState, useMemo } from 'react';
import { text2SignService, SignGesture } from '../services/text2sign';

interface SignDictionaryProps {
  onSignSelect?: (sign: SignGesture) => void;
}

export const SignDictionary: React.FC<SignDictionaryProps> = ({ onSignSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'word' | 'category' | 'difficulty'>('word');

  const allSigns = useMemo(() => text2SignService.getAllSigns(), []);
  
  const categories = useMemo(() => {
    const cats = new Set(allSigns.map(sign => sign.category));
    return Array.from(cats);
  }, [allSigns]);

  const difficulties = useMemo(() => {
    const diffs = new Set(allSigns.map(sign => sign.difficulty));
    return Array.from(diffs);
  }, [allSigns]);

  const filteredSigns = useMemo(() => {
    let filtered = allSigns;

    // Filter by search term
    if (searchTerm) {
      filtered = text2SignService.searchSigns(searchTerm);
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(sign => sign.category === selectedCategory);
    }

    // Filter by difficulty
    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(sign => sign.difficulty === selectedDifficulty);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'word':
          return a.word.localeCompare(b.word);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'difficulty':
          return a.difficulty.localeCompare(b.difficulty);
        default:
          return 0;
      }
    });

    return filtered;
  }, [allSigns, searchTerm, selectedCategory, selectedDifficulty, sortBy]);

  const handleSignClick = (sign: SignGesture) => {
    onSignSelect?.(sign);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'basic': return 'bg-blue-100 text-blue-800';
      case 'emotion': return 'bg-purple-100 text-purple-800';
      case 'action': return 'bg-orange-100 text-orange-800';
      case 'object': return 'bg-indigo-100 text-indigo-800';
      case 'question': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Sign Dictionary</h3>
        
        {/* Search and Filters */}
        <div className="space-y-4">
          {/* Search */}
          <div>
            <input
              type="text"
              placeholder="Search signs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Difficulty
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Difficulties</option>
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'word' | 'category' | 'difficulty')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="word">Word</option>
                <option value="category">Category</option>
                <option value="difficulty">Difficulty</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredSigns.length} of {allSigns.length} signs
        </div>
      </div>

      {/* Signs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
        {filteredSigns.map((sign) => (
          <div
            key={sign.id}
            onClick={() => handleSignClick(sign)}
            className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-md transition-all duration-200 hover:scale-105"
          >
            {/* Sign Icon */}
            <div className="text-4xl mb-3 text-center">
              {sign.keyframes[0]}
            </div>

            {/* Sign Info */}
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 capitalize text-center">
                {sign.word}
              </h4>
              
              <p className="text-sm text-gray-600 text-center">
                {sign.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 justify-center">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(sign.category)}`}>
                  {sign.category}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(sign.difficulty)}`}>
                  {sign.difficulty}
                </span>
              </div>

              {/* Hand Position */}
              <p className="text-xs text-gray-500 text-center mt-2">
                {sign.handPosition}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredSigns.length === 0 && (
        <div className="text-center py-8">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-600 mb-2">No signs found</p>
          <p className="text-sm text-gray-500">
            Try adjusting your search terms or filters
          </p>
        </div>
      )}

      {/* Quick Stats */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">
              {allSigns.length}
            </div>
            <div className="text-sm text-gray-600">Total Signs</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">
              {allSigns.filter(s => s.difficulty === 'easy').length}
            </div>
            <div className="text-sm text-gray-600">Easy</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-600">
              {allSigns.filter(s => s.difficulty === 'medium').length}
            </div>
            <div className="text-sm text-gray-600">Medium</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-red-600">
              {allSigns.filter(s => s.difficulty === 'hard').length}
            </div>
            <div className="text-sm text-gray-600">Hard</div>
          </div>
        </div>
      </div>
    </div>
  );
}; 