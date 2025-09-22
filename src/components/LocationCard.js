import React from 'react';
import { MapPin, Star, Users, Clock, Award } from 'lucide-react';

const LocationCard = ({ location, onClick }) => {
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

  const getCategoryColor = (category) => {
    switch (category) {
      case 'historical': return 'from-amber-500 to-orange-600';
      case 'religious': return 'from-purple-500 to-pink-600';
      case 'nature': return 'from-green-500 to-emerald-600';
      case 'cultural': return 'from-blue-500 to-indigo-600';
      case 'modern': return 'from-gray-500 to-slate-600';
      case 'adventure': return 'from-red-500 to-rose-600';
      default: return 'from-amber-500 to-orange-600';
    }
  };

  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 hover:border-amber-200"
    >
      {/* Premium Card Header */}
      <div className={`relative h-52 bg-gradient-to-br ${getCategoryColor(location.category)} p-6 flex flex-col justify-between`}>
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Category Badge */}
        <div className="relative z-10 flex justify-between items-start">
          <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
            <span className="text-lg">{getCategoryIcon(location.category)}</span>
            <span className="text-sm font-semibold text-gray-800 capitalize">{location.category}</span>
          </div>
          
          {/* Premium Badge for high ratings */}
          {location.rating >= 4.5 && (
            <div className="bg-amber-400/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
              <Award className="w-4 h-4 text-white" />
              <span className="text-xs font-bold text-white">Premium</span>
            </div>
          )}
        </div>

        {/* Rating & Icon */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="text-white">
            <MapPin className="w-12 h-12 mb-2 opacity-90" />
            <div className="text-sm opacity-80 font-medium">Discover</div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 text-center">
            <div className="flex items-center justify-center space-x-1 mb-1">
              <Star className="w-5 h-5 fill-current text-amber-500" />
              <span className="text-lg font-bold text-gray-800">{location.rating}</span>
            </div>
            <div className="text-xs text-gray-600 font-medium">Rating</div>
          </div>
        </div>
      </div>

      {/* Premium Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300 leading-tight">
          {location.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {location.description}
        </p>
        
        {/* Enhanced Stats */}
        <div className="flex items-center justify-between text-sm mb-4">
          <div className="flex items-center space-x-2 text-gray-500">
            <Users className="w-4 h-4" />
            <span className="font-medium">{location.visitors}</span>
            <span className="text-gray-400">visitors</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500">
            <Clock className="w-4 h-4" />
            <span className="font-medium">Open</span>
          </div>
        </div>

        {/* Premium CTA Section */}
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-amber-600 mb-1">
                Explore Location
              </div>
              <div className="text-xs text-gray-500">
                View on Google Maps
              </div>
            </div>
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Hover Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-500/0 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default LocationCard;