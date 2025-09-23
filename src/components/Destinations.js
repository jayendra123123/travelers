import React, { useState } from 'react';
import { MapPin, Star, Clock, Users, Camera, Award, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const Destinations = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const famousDestinations = [
    // World Heritage Sites
    {
      name: 'Taj Mahal, Agra',
      category: 'heritage',
      description: 'UNESCO World Heritage Site and one of the Seven Wonders of the World',
      rating: 4.9,
      visitors: '6M+',
      highlights: ['Mughal Architecture', 'Symbol of Love', 'Marble Inlay Work', 'Garden Complex'],
      bestTime: 'Oct-Mar',
      duration: '3-4 hours',
      image: '🏛️'
    },
    {
      name: 'Agra Fort',
      category: 'heritage',
      description: 'Red sandstone fortress and UNESCO World Heritage Site',
      rating: 4.7,
      visitors: '2M+',
      highlights: ['Mughal Architecture', 'Royal Palaces', 'Diwan-i-Khas', 'Sheesh Mahal'],
      bestTime: 'Oct-Mar',
      duration: '2-3 hours',
      image: '🏰'
    },
    {
      name: 'Fatehpur Sikri',
      category: 'heritage',
      description: 'Akbar\'s abandoned capital city, frozen in time',
      rating: 4.6,
      visitors: '1M+',
      highlights: ['Buland Darwaza', 'Jama Masjid', 'Panch Mahal', 'Ibadat Khana'],
      bestTime: 'Oct-Apr',
      duration: '3-4 hours',
      image: '🕌'
    },

    // Spiritual Destinations
    {
      name: 'Varanasi (Kashi)',
      category: 'spiritual',
      description: 'World\'s oldest living city and spiritual capital of India',
      rating: 4.8,
      visitors: '3M+',
      highlights: ['Ganga Aarti', 'Ancient Ghats', 'Kashi Vishwanath', 'Sarnath Nearby'],
      bestTime: 'Oct-Mar',
      duration: '2-3 days',
      image: '🕉️'
    },
    {
      name: 'Ayodhya',
      category: 'spiritual',
      description: 'Birthplace of Lord Rama and sacred pilgrimage site',
      rating: 4.8,
      visitors: '2M+',
      highlights: ['Ram Janmabhoomi', 'Hanuman Garhi', 'Kanak Bhawan', 'Nageshwarnath'],
      bestTime: 'Oct-Mar',
      duration: '1-2 days',
      image: '🏺'
    },
    {
      name: 'Mathura-Vrindavan',
      category: 'spiritual',
      description: 'Krishna\'s birthplace and childhood playground',
      rating: 4.7,
      visitors: '1.5M+',
      highlights: ['Krishna Janmabhoomi', 'Banke Bihari Temple', 'ISKCON Temple', 'Prem Mandir'],
      bestTime: 'Oct-Mar',
      duration: '2-3 days',
      image: '🪈'
    },

    // Natural Wonders
    {
      name: 'Dudhwa National Park',
      category: 'nature',
      description: 'Tiger reserve with diverse wildlife and pristine forests',
      rating: 4.6,
      visitors: '100K+',
      highlights: ['Tiger Safari', 'One-horned Rhinoceros', 'Bird Watching', 'Elephant Safari'],
      bestTime: 'Nov-Apr',
      duration: '2-3 days',
      image: '🐅'
    },
    {
      name: 'Chambal Safari, Etawah',
      category: 'nature',
      description: 'River safari with critically endangered gharials and dolphins',
      rating: 4.4,
      visitors: '50K+',
      highlights: ['Gharial Crocodiles', 'Gangetic Dolphins', 'River Safari', 'Bird Watching'],
      bestTime: 'Oct-Mar',
      duration: '1 day',
      image: '🐊'
    },

    // Cultural Heritage
    {
      name: 'Lucknow',
      category: 'cultural',
      description: 'City of Nawabs with rich Awadhi culture and cuisine',
      rating: 4.5,
      visitors: '2M+',
      highlights: ['Bara Imambara', 'Chota Imambara', 'Rumi Darwaza', 'Awadhi Cuisine'],
      bestTime: 'Oct-Mar',
      duration: '2-3 days',
      image: '👑'
    },
    {
      name: 'Sarnath',
      category: 'cultural',
      description: 'Buddhist pilgrimage site where Buddha gave his first sermon',
      rating: 4.5,
      visitors: '800K+',
      highlights: ['Dhamek Stupa', 'Archaeological Museum', 'Ashoka Pillar', 'Thai Temple'],
      bestTime: 'Oct-Mar',
      duration: 'Half day',
      image: '☸️'
    },

    // Hill Stations
    {
      name: 'Nainital',
      category: 'hills',
      description: 'Beautiful lake city in the Kumaon hills',
      rating: 4.6,
      visitors: '1.2M+',
      highlights: ['Naini Lake', 'Mall Road', 'Snow View Point', 'Naina Devi Temple'],
      bestTime: 'Mar-Jun, Sep-Nov',
      duration: '2-3 days',
      image: '🏔️'
    },
    {
      name: 'Mussoorie',
      category: 'hills',
      description: 'Queen of Hill Stations with stunning valley views',
      rating: 4.5,
      visitors: '1M+',
      highlights: ['Kempty Falls', 'Gun Hill', 'Mall Road', 'Camel\'s Back Road'],
      bestTime: 'Apr-Jun, Sep-Nov',
      duration: '2-3 days',
      image: '⛰️'
    },

    // Adventure & Modern
    {
      name: 'Rishikesh',
      category: 'adventure',
      description: 'Adventure capital and yoga hub of India',
      rating: 4.7,
      visitors: '800K+',
      highlights: ['River Rafting', 'Bungee Jumping', 'Yoga Ashrams', 'Laxman Jhula'],
      bestTime: 'Sep-Apr',
      duration: '2-4 days',
      image: '🏄'
    },
    {
      name: 'Noida',
      category: 'modern',
      description: 'Planned modern city with shopping and entertainment',
      rating: 4.2,
      visitors: '800K+',
      highlights: ['DLF Mall', 'Worlds of Wonder', 'Golf Courses', 'Modern Architecture'],
      bestTime: 'Oct-Mar',
      duration: '1-2 days',
      image: '🏙️'
    },

    // Hidden Gems
    {
      name: 'Chitrakoot',
      category: 'spiritual',
      description: 'Sacred place where Lord Rama spent his exile',
      rating: 4.5,
      visitors: '700K+',
      highlights: ['Ram Ghat', 'Hanuman Dhara', 'Gupt Godavari', 'Sphatik Shila'],
      bestTime: 'Oct-Mar',
      duration: '1-2 days',
      image: '🏞️'
    },
    {
      name: 'Jhansi',
      category: 'heritage',
      description: 'Historic city of Rani Lakshmibai with magnificent fort',
      rating: 4.5,
      visitors: '400K+',
      highlights: ['Jhansi Fort', 'Rani Mahal', 'Government Museum', 'Ganesh Mandir'],
      bestTime: 'Oct-Mar',
      duration: '1-2 days',
      image: '⚔️'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Destinations', icon: '🗺️' },
    { id: 'heritage', name: 'Heritage Sites', icon: '🏛️' },
    { id: 'spiritual', name: 'Spiritual Places', icon: '🕉️' },
    { id: 'nature', name: 'Nature & Wildlife', icon: '🌿' },
    { id: 'cultural', name: 'Cultural Heritage', icon: '🎭' },
    { id: 'hills', name: 'Hill Stations', icon: '🏔️' },
    { id: 'adventure', name: 'Adventure', icon: '🏄' },
    { id: 'modern', name: 'Modern Cities', icon: '🏙️' }
  ];

  const filteredDestinations = selectedCategory === 'all' 
    ? famousDestinations 
    : famousDestinations.filter(dest => dest.category === selectedCategory);

  const handleLocationClick = (locationName) => {
    const query = encodeURIComponent(locationName + ', India');
    window.open(`https://www.google.com/maps/search/${query}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white/95 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">INDIA Explorer</h1>
                <p className="text-xs text-gray-500">Premium Travel Experience</p>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/destinations" className="text-amber-600 hover:text-amber-700 font-medium transition-colors border-b-2 border-amber-600">Destinations</Link>
              <Link to="/experiences" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Experiences</Link>
              <Link to="/culture" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Culture</Link>
              <Link to="/plan-journey" className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300">
                Plan Journey
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">India Destinations</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the most iconic and breathtaking destinations across India, 
            from ancient heritage sites to spiritual centers and natural wonders from every region
          </p>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-amber-50'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {categories.find(c => c.id === selectedCategory)?.name || 'All Destinations'}
          </h2>
          <p className="text-gray-600 text-lg">
            {filteredDestinations.length} incredible destinations waiting to be explored
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => handleLocationClick(destination.name)}
            >
              {/* Card Header */}
              <div className="relative h-48 bg-gradient-to-br from-amber-500 to-orange-600 p-6 flex items-center justify-center">
                <div className="text-6xl">{destination.image}</div>
                <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-current text-amber-500" />
                  <span className="text-sm font-bold">{destination.rating}</span>
                </div>
                {destination.rating >= 4.7 && (
                  <div className="absolute top-4 left-4 bg-amber-400 rounded-full px-3 py-1 flex items-center space-x-1">
                    <Award className="w-4 h-4 text-white" />
                    <span className="text-xs font-bold text-white">Must Visit</span>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {destination.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{destination.visitors}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Camera className="w-4 h-4" />
                    <span>{destination.bestTime}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.slice(0, 2).map((highlight, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                    {destination.highlights.length > 2 && (
                      <span className="text-xs text-gray-500">
                        +{destination.highlights.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-amber-600">
                      Explore Location
                    </span>
                    <MapPin className="w-5 h-5 text-amber-500 hover:scale-110 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;