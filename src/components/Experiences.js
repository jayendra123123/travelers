import React, { useState } from 'react';
import { Star, Clock, Users, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const Experiences = () => {
  const [selectedType, setSelectedType] = useState('all');

  const experiences = [
    // Spiritual Experiences
    {
      name: 'Ganga Aarti at Varanasi',
      type: 'spiritual',
      description: 'Witness the mesmerizing evening prayer ceremony at Dashashwamedh Ghat',
      duration: '2 hours',
      difficulty: 'Easy',
      price: '₹500-1000',
      participants: '5-50',
      highlights: ['Sacred Fire Ceremony', 'Chanting & Music', 'River View', 'Photography'],
      bestTime: 'Evening 6-8 PM',
      season: 'Oct-Mar',
      rating: 4.9,
      icon: '🕉️',
      bookingRequired: false
    },
    {
      name: 'Sunrise at Taj Mahal',
      type: 'heritage',
      description: 'Experience the Taj Mahal in golden morning light with fewer crowds',
      duration: '3 hours',
      difficulty: 'Easy',
      price: '₹1000-1500',
      participants: '2-30',
      highlights: ['Golden Hour Photography', 'Peaceful Ambiance', 'Guided Tours', 'Garden Walk'],
      bestTime: '5:30-8:30 AM',
      season: 'Oct-Mar',
      rating: 4.8,
      icon: '🌅',
      bookingRequired: true
    },
    {
      name: 'Meditation Retreat in Rishikesh',
      type: 'spiritual',
      description: 'Deep meditation and yoga sessions by the holy Ganges',
      duration: '3-7 days',
      difficulty: 'Medium',
      price: '₹2000-5000/day',
      participants: '1-20',
      highlights: ['Yoga Sessions', 'Meditation', 'Ayurveda', 'Spiritual Talks'],
      bestTime: 'Any time',
      season: 'Sep-Apr',
      rating: 4.7,
      icon: '🧘',
      bookingRequired: true
    },

    // Adventure Experiences
    {
      name: 'White Water Rafting - Rishikesh',
      type: 'adventure',
      description: 'Thrilling rapids adventure on the Ganges river',
      duration: '4-6 hours',
      difficulty: 'Medium-Hard',
      price: '₹1500-3000',
      participants: '6-12',
      highlights: ['Class III-IV Rapids', 'Body Surfing', 'Cliff Jumping', 'Team Building'],
      bestTime: '9 AM-4 PM',
      season: 'Sep-Jun',
      rating: 4.6,
      icon: '🏄',
      bookingRequired: true
    },
    {
      name: 'Bungee Jumping at Mohan Chatti',
      type: 'adventure',
      description: 'India\'s highest bungee jump from 83 meters',
      duration: '2 hours',
      difficulty: 'Hard',
      price: '₹3500-4500',
      participants: '1',
      highlights: ['83m Jump', 'Valley Views', 'Professional Safety', 'Certificate'],
      bestTime: '10 AM-5 PM',
      season: 'Mar-Jun, Sep-Nov',
      rating: 4.8,
      icon: '🪂',
      bookingRequired: true
    },
    {
      name: 'Tiger Safari - Dudhwa',
      type: 'wildlife',
      description: 'Spot majestic tigers in their natural habitat',
      duration: '3-4 hours',
      difficulty: 'Easy',
      price: '₹2000-4000',
      participants: '4-6',
      highlights: ['Tiger Spotting', 'Elephant Safari', 'Bird Watching', 'Nature Photography'],
      bestTime: '6-9 AM, 3-6 PM',
      season: 'Nov-May',
      rating: 4.5,
      icon: '🐅',
      bookingRequired: true
    },

    // Cultural Experiences
    {
      name: 'Awadhi Cooking Class - Lucknow',
      type: 'cultural',
      description: 'Learn authentic Awadhi cuisine from local chefs',
      duration: '4-5 hours',
      difficulty: 'Easy',
      price: '₹2500-4000',
      participants: '4-12',
      highlights: ['Biryani Making', 'Kebab Preparation', 'Traditional Recipes', 'Meal Included'],
      bestTime: '10 AM-3 PM',
      season: 'Year-round',
      rating: 4.7,
      icon: '👨‍🍳',
      bookingRequired: true
    },
    {
      name: 'Handicraft Workshop - Varanasi',
      type: 'cultural',
      description: 'Create traditional Banarasi silk products and crafts',
      duration: '3-4 hours',
      difficulty: 'Medium',
      price: '₹1500-2500',
      participants: '5-15',
      highlights: ['Silk Weaving', 'Traditional Crafts', 'Local Artisans', 'Take Home Souvenir'],
      bestTime: '9 AM-1 PM',
      season: 'Year-round',
      rating: 4.4,
      icon: '🎨',
      bookingRequired: true
    },
    {
      name: 'Classical Music Performance',
      type: 'cultural',
      description: 'Evening of traditional Indian classical music by renowned artists',
      duration: '2-3 hours',
      difficulty: 'Easy',
      price: '₹800-2000',
      participants: '20-100',
      highlights: ['Hindustani Classical', 'Traditional Instruments', 'Cultural Learning', 'Interactive Session'],
      bestTime: '7-10 PM',
      season: 'Oct-Mar',
      rating: 4.6,
      icon: '🎵',
      bookingRequired: true
    },

    // Photography Experiences
    {
      name: 'Street Photography Tour - Old Delhi',
      type: 'photography',
      description: 'Capture the essence of old Delhi\'s bustling streets and culture',
      duration: '5-6 hours',
      difficulty: 'Medium',
      price: '₹3000-5000',
      participants: '3-8',
      highlights: ['Expert Guide', 'Hidden Locations', 'People Photography', 'Photo Editing Tips'],
      bestTime: '6 AM-12 PM',
      season: 'Oct-Mar',
      rating: 4.5,
      icon: '📸',
      bookingRequired: true
    },
    {
      name: 'Heritage Architecture Photography',
      type: 'photography',
      description: 'Professional photography workshop at Mughal monuments',
      duration: '4-5 hours',
      difficulty: 'Medium',
      price: '₹2500-4000',
      participants: '4-10',
      highlights: ['Professional Techniques', 'Golden Hour Shots', 'Composition Tips', 'Post-processing'],
      bestTime: 'Sunrise/Sunset',
      season: 'Oct-Mar',
      rating: 4.7,
      icon: '🏛️',
      bookingRequired: true
    },

    // Nature Experiences
    {
      name: 'Bird Watching - Bharatpur',
      type: 'nature',
      description: 'Spot over 230 bird species in Keoladeo National Park',
      duration: '4-5 hours',
      difficulty: 'Easy',
      price: '₹1500-2500',
      participants: '4-15',
      highlights: ['Migratory Birds', 'Expert Guide', 'Binoculars Provided', 'Nature Walk'],
      bestTime: '6-10 AM',
      season: 'Oct-Mar',
      rating: 4.4,
      icon: '🦅',
      bookingRequired: true
    },
    {
      name: 'Gharial Spotting - Chambal',
      type: 'nature',
      description: 'Boat safari to see critically endangered gharials and dolphins',
      duration: '3-4 hours',
      difficulty: 'Easy',
      price: '₹2000-3000',
      participants: '6-12',
      highlights: ['Gharial Crocodiles', 'Gangetic Dolphins', 'River Ecosystem', 'Conservation Learn'],
      bestTime: '7-11 AM, 3-6 PM',
      season: 'Oct-Apr',
      rating: 4.3,
      icon: '🐊',
      bookingRequired: true
    },

    // Wellness Experiences
    {
      name: 'Ayurveda Spa Treatment',
      type: 'wellness',
      description: 'Traditional Ayurvedic healing and rejuvenation therapies',
      duration: '2-3 hours',
      difficulty: 'Easy',
      price: '₹3000-8000',
      participants: '1-2',
      highlights: ['Panchakarma', 'Herbal Treatments', 'Consultation', 'Relaxation'],
      bestTime: '10 AM-6 PM',
      season: 'Year-round',
      rating: 4.6,
      icon: '💆',
      bookingRequired: true
    },
    {
      name: 'Yoga by the Ganges',
      type: 'wellness',
      description: 'Morning yoga sessions overlooking the sacred river',
      duration: '1.5-2 hours',
      difficulty: 'Easy-Medium',
      price: '₹500-1500',
      participants: '5-20',
      highlights: ['River View', 'Professional Instructor', 'All Levels Welcome', 'Meditation'],
      bestTime: '6-8 AM',
      season: 'Sep-Apr',
      rating: 4.8,
      icon: '🧘‍♀️',
      bookingRequired: false
    }
  ];

  const experienceTypes = [
    { id: 'all', name: 'All Experiences', icon: '🎯' },
    { id: 'spiritual', name: 'Spiritual', icon: '🕉️' },
    { id: 'adventure', name: 'Adventure', icon: '🏄' },
    { id: 'cultural', name: 'Cultural', icon: '🎭' },
    { id: 'heritage', name: 'Heritage', icon: '🏛️' },
    { id: 'wildlife', name: 'Wildlife', icon: '🦅' },
    { id: 'photography', name: 'Photography', icon: '📸' },
    { id: 'nature', name: 'Nature', icon: '🌿' },
    { id: 'wellness', name: 'Wellness', icon: '💆' }
  ];

  const filteredExperiences = selectedType === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.type === selectedType);

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
                <h1 className="text-xl font-bold text-gray-900">UP Explorer</h1>
                <p className="text-xs text-gray-500">Premium Travel Experience</p>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/destinations" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Destinations</Link>
              <Link to="/experiences" className="text-purple-600 hover:text-purple-700 font-medium transition-colors border-b-2 border-purple-600">Experiences</Link>
              <Link to="/culture" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Culture</Link>
              <Link to="/plan-journey" className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300">
                Plan Journey
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Unique Experiences</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Immerse yourself in extraordinary activities and create unforgettable memories 
            in the heart of Uttar Pradesh
          </p>
        </div>
      </div>

      {/* Experience Types Filter */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {experienceTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  selectedType === type.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-purple-50'
                }`}
              >
                <span className="text-lg">{type.icon}</span>
                <span>{type.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Experiences Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {experienceTypes.find(t => t.id === selectedType)?.name || 'All Experiences'}
          </h2>
          <p className="text-gray-600 text-lg">
            {filteredExperiences.length} incredible experiences to choose from
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Card Header */}
              <div className="relative h-48 bg-gradient-to-br from-purple-500 to-pink-600 p-6 flex items-center justify-center">
                <div className="text-6xl">{experience.icon}</div>
                <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-current text-amber-500" />
                  <span className="text-sm font-bold">{experience.rating}</span>
                </div>
                <div className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-bold ${getDifficultyColor(experience.difficulty)}`}>
                  {experience.difficulty}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{experience.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {experience.description}
                </p>

                {/* Experience Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{experience.participants}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="font-semibold text-purple-600">
                      {experience.price}
                    </div>
                    <div className="text-gray-500">
                      {experience.season}
                    </div>
                  </div>
                </div>

                {/* Best Time */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-xs font-semibold text-gray-700 mb-1">Best Time:</div>
                  <div className="text-sm text-gray-600">{experience.bestTime}</div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Experience Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.highlights.slice(0, 2).map((highlight, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                    {experience.highlights.length > 2 && (
                      <span className="text-xs text-gray-500">
                        +{experience.highlights.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Booking Status */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {experience.bookingRequired ? (
                        <>
                          <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                          <span className="text-sm text-gray-600">Booking Required</span>
                        </>
                      ) : (
                        <>
                          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                          <span className="text-sm text-gray-600">Walk-in Welcome</span>
                        </>
                      )}
                    </div>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300">
                      Book Now
                    </button>
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

export default Experiences;