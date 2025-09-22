import React from 'react';
import { Star, ArrowUpRight, Navigation } from 'lucide-react';

const SearchSuggestions = ({ showSuggestions, filteredSuggestions, onSuggestionClick, searchQuery }) => {
  if (!showSuggestions || filteredSuggestions.length === 0) {
    return null;
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'historical': return '🏛️';
      case 'religious': return '🕉️';
      case 'nature': return '🌿';
      case 'cultural': return '🎭';
      case 'modern': return '🏙️';
      case 'adventure': return '⛰️';
      default: return '📍';
    }
  };

  // Check if we're showing nearby locations
  const isShowingNearbyLocations = filteredSuggestions.some(suggestion => suggestion.distance);
  const headerTitle = isShowingNearbyLocations 
    ? `Places near ${searchQuery}` 
    : 'Suggested Destinations';

  return (
    <div className="absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/50 z-50 max-h-96 overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          {isShowingNearbyLocations && <Navigation className="w-4 h-4 text-amber-600" />}
          <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            {headerTitle}
          </h4>
        </div>
      </div>
      
      <div className="max-h-80 overflow-y-auto">
        {filteredSuggestions.map((suggestion, index) => (
          <div
            key={index}
            className="group p-4 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-all duration-300"
            onClick={() => onSuggestionClick(suggestion)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 flex-1">
                {/* Category Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">{getCategoryIcon(suggestion.category)}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 group-hover:text-amber-700 transition-colors duration-200 truncate">
                    {suggestion.name}
                  </h4>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-200 line-clamp-1">
                    {suggestion.description}
                  </p>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className="text-xs px-2 py-1 bg-gray-100 group-hover:bg-amber-100 text-gray-600 group-hover:text-amber-700 rounded-full font-medium capitalize transition-colors duration-200">
                      {suggestion.category}
                    </span>
                    <span className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200">
                      {suggestion.visitors} visitors
                    </span>
                    {suggestion.distance && (
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium flex items-center space-x-1">
                        <Navigation className="w-3 h-3" />
                        <span>{suggestion.distance}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Rating & Action */}
              <div className="flex items-center space-x-3 flex-shrink-0">
                <div className="flex items-center space-x-1 bg-amber-50 group-hover:bg-amber-100 rounded-lg px-3 py-1 transition-colors duration-200">
                  <Star className="w-4 h-4 fill-current text-amber-500" />
                  <span className="text-sm font-semibold text-gray-800">{suggestion.rating}</span>
                </div>
                
                <div className="w-8 h-8 bg-gray-100 group-hover:bg-amber-500 rounded-full flex items-center justify-center transition-all duration-200">
                  <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-200" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Footer */}
      <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
        <p className="text-xs text-gray-500">
          {isShowingNearbyLocations 
            ? 'Showing nearby attractions and places of interest' 
            : 'Click any destination to explore on Google Maps'
          }
        </p>
      </div>
    </div>
  );
};

export default SearchSuggestions;