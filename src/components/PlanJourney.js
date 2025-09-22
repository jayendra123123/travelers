import React, { useState } from 'react';
import { MapPin, Star, Clock, Users, DollarSign, Utensils, Bed, Car, Calendar, CheckCircle, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlanJourney = () => {
  const [selectedTab, setSelectedTab] = useState('itineraries');

  // 10 Famous Trip Itineraries in Uttar Pradesh
  const tripItineraries = [
    {
      id: 1,
      name: "Golden Triangle Extended",
      duration: "7 Days",
      places: [
        "Delhi", "Agra (Taj Mahal, Agra Fort)", "Fatehpur Sikri", 
        "Bharatpur", "Mathura-Vrindavan", "Ghaziabad", "Delhi"
      ],
      highlights: ["Taj Mahal Sunrise", "Krishna Janmabhoomi", "Bird Watching", "Mughal Architecture"],
      totalCost: "₹35,000-50,000",
      budgetBreakdown: {
        accommodation: "₹15,000",
        food: "₹8,000",
        transport: "₹7,000",
        activities: "₹5,000"
      },
      difficulty: "Easy",
      bestSeason: "Oct-Mar",
      icon: "🏛️"
    },
    {
      id: 2,
      name: "Spiritual Uttar Pradesh",
      duration: "8 Days",
      places: [
        "Varanasi", "Sarnath", "Ayodhya", "Chitrakoot", 
        "Mathura", "Vrindavan", "Haridwar", "Rishikesh"
      ],
      highlights: ["Ganga Aarti", "Ram Janmabhoomi", "Krishna Temples", "Yoga & Meditation"],
      totalCost: "₹25,000-40,000",
      budgetBreakdown: {
        accommodation: "₹12,000",
        food: "₹6,000",
        transport: "₹9,000",
        activities: "₹3,000"
      },
      difficulty: "Easy",
      bestSeason: "Oct-Apr",
      icon: "🕉️"
    },
    {
      id: 3,
      name: "Adventure & Nature",
      duration: "6 Days",
      places: [
        "Rishikesh", "Mussoorie", "Nainital", "Dudhwa National Park", 
        "Pilibhit Tiger Reserve", "Chambal Safari"
      ],
      highlights: ["River Rafting", "Tiger Safari", "Hill Station", "Wildlife Photography"],
      totalCost: "₹40,000-60,000",
      budgetBreakdown: {
        accommodation: "₹18,000",
        food: "₹10,000",
        transport: "₹12,000",
        activities: "₹15,000"
      },
      difficulty: "Medium",
      bestSeason: "Oct-Mar",
      icon: "🏔️"
    },
    {
      id: 4,
      name: "Cultural Heritage Trail",
      duration: "10 Days",
      places: [
        "Lucknow", "Varanasi", "Jhansi", "Gwalior", "Mahoba", 
        "Khajuraho", "Chitrakoot", "Banda", "Kanpur", "Lucknow"
      ],
      highlights: ["Awadhi Culture", "Historical Forts", "Temple Architecture", "Local Crafts"],
      totalCost: "₹45,000-65,000",
      budgetBreakdown: {
        accommodation: "₹20,000",
        food: "₹12,000",
        transport: "₹15,000",
        activities: "₹8,000"
      },
      difficulty: "Medium",
      bestSeason: "Oct-Mar",
      icon: "🎭"
    },
    {
      id: 5,
      name: "Buddhist Circuit",
      duration: "5 Days",
      places: [
        "Varanasi", "Sarnath", "Kushinagar", "Lumbini (Nepal)", 
        "Kapilavastu", "Shravasti"
      ],
      highlights: ["Buddha's Life Journey", "Ancient Monasteries", "Meditation Sessions", "Buddhist Art"],
      totalCost: "₹30,000-45,000",
      budgetBreakdown: {
        accommodation: "₹13,000",
        food: "₹7,000",
        transport: "₹10,000",
        activities: "₹5,000"
      },
      difficulty: "Easy",
      bestSeason: "Nov-Feb",
      icon: "☸️"
    },
    {
      id: 6,
      name: "Mughal Heritage Journey",
      duration: "6 Days",
      places: [
        "Agra", "Fatehpur Sikri", "Lucknow", "Aligarh", 
        "Rampur", "Sambhal"
      ],
      highlights: ["Mughal Architecture", "Islamic Art", "Persian Gardens", "Royal Cuisine"],
      totalCost: "₹38,000-55,000",
      budgetBreakdown: {
        accommodation: "₹16,000",
        food: "₹9,000",
        transport: "₹11,000",
        activities: "₹7,000"
      },
      difficulty: "Easy",
      bestSeason: "Oct-Mar",
      icon: "🕌"
    },
    {
      id: 7,
      name: "Craft & Textile Tour",
      duration: "7 Days",
      places: [
        "Varanasi", "Mirzapur", "Bhadohi", "Khurja", 
        "Moradabad", "Saharanpur", "Lucknow"
      ],
      highlights: ["Silk Weaving", "Carpet Making", "Pottery", "Wood Carving", "Chikankari"],
      totalCost: "₹32,000-48,000",
      budgetBreakdown: {
        accommodation: "₹14,000",
        food: "₹8,000",
        transport: "₹10,000",
        activities: "₹6,000"
      },
      difficulty: "Easy",
      bestSeason: "Year-round",
      icon: "🧵"
    },
    {
      id: 8,
      name: "Hill Station Escape",
      duration: "5 Days",
      places: [
        "Nainital", "Mussoorie", "Rishikesh", "Haridwar", "Dehradun"
      ],
      highlights: ["Mountain Views", "Lake Activities", "Adventure Sports", "Cool Climate"],
      totalCost: "₹35,000-50,000",
      budgetBreakdown: {
        accommodation: "₹15,000",
        food: "₹8,000",
        transport: "₹9,000",
        activities: "₹8,000"
      },
      difficulty: "Easy",
      bestSeason: "Apr-Jun, Sep-Nov",
      icon: "⛰️"
    },
    {
      id: 9,
      name: "Food & Festival Tour",
      duration: "8 Days",
      places: [
        "Lucknow", "Varanasi", "Mathura", "Agra", 
        "Bareilly", "Kanpur", "Gorakhpur", "Lucknow"
      ],
      highlights: ["Street Food", "Cooking Classes", "Local Markets", "Food Festivals"],
      totalCost: "₹28,000-42,000",
      budgetBreakdown: {
        accommodation: "₹12,000",
        food: "₹10,000",
        transport: "₹8,000",
        activities: "₹5,000"
      },
      difficulty: "Easy",
      bestSeason: "Oct-Mar",
      icon: "🍽️"
    },
    {
      id: 10,
      name: "Photography Expedition",
      duration: "9 Days",
      places: [
        "Agra", "Varanasi", "Lucknow", "Dudhwa", 
        "Chitrakoot", "Jhansi", "Fatehpur Sikri", "Mathura", "Delhi"
      ],
      highlights: ["Heritage Photography", "Wildlife Shots", "Street Photography", "Cultural Portraits"],
      totalCost: "₹50,000-70,000",
      budgetBreakdown: {
        accommodation: "₹20,000",
        food: "₹12,000",
        transport: "₹15,000",
        activities: "₹10,000"
      },
      difficulty: "Medium",
      bestSeason: "Oct-Mar",
      icon: "📸"
    }
  ];

  // Famous Restaurants
  const famousRestaurants = [
    {
      name: "Tunday Kababi",
      location: "Lucknow",
      specialty: "Galouti Kebab",
      priceRange: "₹200-500",
      rating: 4.5,
      type: "Mughlai",
      mustTry: ["Galouti Kebab", "Roomali Roti", "Biryani"]
    },
    {
      name: "Kashi Chat Bhandar",
      location: "Varanasi",
      specialty: "Chaat & Street Food",
      priceRange: "₹50-200",
      rating: 4.7,
      type: "Street Food",
      mustTry: ["Kachori Aloo", "Tamatar Chaat", "Lassi"]
    },
    {
      name: "Panchhi Petha Store",
      location: "Agra",
      specialty: "Petha Sweets",
      priceRange: "₹100-300",
      rating: 4.4,
      type: "Sweets",
      mustTry: ["Angoori Petha", "Chocolate Petha", "Dry Fruits Petha"]
    },
    {
      name: "Sharma Tea Stall",
      location: "Varanasi",
      specialty: "Kulhad Chai",
      priceRange: "₹10-50",
      rating: 4.8,
      type: "Tea/Snacks",
      mustTry: ["Kulhad Chai", "Bun Maska", "Samosa"]
    },
    {
      name: "Brijwasi Mithai Wala",
      location: "Mathura",
      specialty: "Traditional Sweets",
      priceRange: "₹150-400",
      rating: 4.6,
      type: "Sweets",
      mustTry: ["Peda", "Laddu", "Barfi"]
    },
    {
      name: "Royal Cafe",
      location: "Lucknow",
      specialty: "Basket Chaat",
      priceRange: "₹100-300",
      rating: 4.3,
      type: "Chaat",
      mustTry: ["Basket Chaat", "Dahi Bhalla", "Aloo Tikki"]
    }
  ];

  // Accommodation Options
  const accommodations = [
    {
      type: "Luxury Hotels",
      priceRange: "₹8,000-25,000/night",
      examples: [
        { name: "The Oberoi Amarvilas", location: "Agra", rating: 4.9 },
        { name: "Taj Ganges", location: "Varanasi", rating: 4.7 },
        { name: "Renaissance Lucknow", location: "Lucknow", rating: 4.6 }
      ]
    },
    {
      type: "Heritage Hotels",
      priceRange: "₹5,000-15,000/night",
      examples: [
        { name: "Usha Kiran Palace", location: "Gwalior", rating: 4.5 },
        { name: "Brij Raj Bhawan", location: "Kota", rating: 4.4 },
        { name: "Clarks Awadh", location: "Lucknow", rating: 4.3 }
      ]
    },
    {
      type: "Mid-Range Hotels",
      priceRange: "₹2,000-6,000/night",
      examples: [
        { name: "Hotel Taj Plaza", location: "Agra", rating: 4.2 },
        { name: "Ganpati Guest House", location: "Varanasi", rating: 4.1 },
        { name: "Hotel Clarks Inn", location: "Lucknow", rating: 4.0 }
      ]
    },
    {
      type: "Budget Stays",
      priceRange: "₹500-2,000/night",
      examples: [
        { name: "Backpacker Hostels", location: "Various", rating: 3.8 },
        { name: "Dharamshalas", location: "Pilgrimage sites", rating: 3.5 },
        { name: "Guest Houses", location: "Tourist areas", rating: 3.7 }
      ]
    }
  ];

  // Transportation Costs
  const transportationCosts = [
    {
      mode: "Private Car with Driver",
      cost: "₹12-18 per km",
      description: "Most comfortable, flexible timing"
    },
    {
      mode: "Train Travel",
      cost: "₹300-2,500 per journey",
      description: "AC coaches, reliable, affordable"
    },
    {
      mode: "Bus Travel",
      cost: "₹200-800 per journey",
      description: "Volvo/AC buses, budget-friendly"
    },
    {
      mode: "Domestic Flights",
      cost: "₹3,000-8,000 per flight",
      description: "Quick travel, major cities only"
    }
  ];

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
              <Link to="/experiences" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Experiences</Link>
              <Link to="/culture" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Culture</Link>
              <Link to="/plan-journey" className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 border-b-2 border-green-600">
                Plan Journey
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Plan Your Journey</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Complete travel planning with curated itineraries, accommodations, dining, 
            and cost breakdowns for the perfect Uttar Pradesh experience
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8">
            {[
              { id: 'itineraries', name: 'Trip Itineraries', icon: '🗺️' },
              { id: 'restaurants', name: 'Famous Restaurants', icon: '🍽️' },
              { id: 'accommodation', name: 'Accommodation', icon: '🏨' },
              { id: 'costs', name: 'Travel Costs', icon: '💰' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 flex items-center space-x-2 ${
                  selectedTab === tab.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Trip Itineraries Tab */}
        {selectedTab === 'itineraries' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">10 Famous Trip Itineraries</h2>
              <p className="text-gray-600 text-lg">
                Carefully crafted journeys covering the best of Uttar Pradesh
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {tripItineraries.map((trip) => (
                <div
                  key={trip.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Trip Header */}
                  <div className="bg-gradient-to-r from-green-500 to-blue-600 p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{trip.icon}</div>
                      <div className={`px-3 py-1 rounded-full text-xs font-bold ${getDifficultyColor(trip.difficulty)}`}>
                        {trip.difficulty}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{trip.name}</h3>
                    <div className="flex items-center space-x-4 text-sm opacity-90">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{trip.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{trip.bestSeason}</span>
                      </div>
                    </div>
                  </div>

                  {/* Trip Content */}
                  <div className="p-6">
                    {/* Places */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-green-600" />
                        Destinations Covered
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {trip.places.map((place, idx) => (
                          <span
                            key={idx}
                            className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                          >
                            {place}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <Star className="w-5 h-5 mr-2 text-yellow-500" />
                        Trip Highlights
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {trip.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Cost Breakdown */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-800 flex items-center">
                          <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                          Total Cost
                        </h4>
                        <span className="text-xl font-bold text-green-600">{trip.totalCost}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Accommodation:</span>
                          <span className="font-medium">{trip.budgetBreakdown.accommodation}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Food:</span>
                          <span className="font-medium">{trip.budgetBreakdown.food}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Transport:</span>
                          <span className="font-medium">{trip.budgetBreakdown.transport}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Activities:</span>
                          <span className="font-medium">{trip.budgetBreakdown.activities}</span>
                        </div>
                      </div>
                    </div>

                    {/* Book Button */}
                    <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                      Plan This Journey
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Famous Restaurants Tab */}
        {selectedTab === 'restaurants' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Famous Restaurants</h2>
              <p className="text-gray-600 text-lg">
                Discover the best culinary experiences across Uttar Pradesh
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {famousRestaurants.map((restaurant, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <Utensils className="w-6 h-6" />
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-current text-yellow-300" />
                        <span className="text-sm font-bold">{restaurant.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{restaurant.name}</h3>
                    <p className="text-sm opacity-90">{restaurant.location}</p>
                  </div>

                  <div className="p-4">
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Specialty:</span>
                        <span className="font-medium">{restaurant.specialty}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Type:</span>
                        <span className="font-medium">{restaurant.type}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Price Range:</span>
                        <span className="font-medium text-green-600">{restaurant.priceRange}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Must Try:</h4>
                      <div className="flex flex-wrap gap-2">
                        {restaurant.mustTry.map((item, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Accommodation Tab */}
        {selectedTab === 'accommodation' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Accommodation Options</h2>
              <p className="text-gray-600 text-lg">
                From luxury hotels to budget stays - find the perfect place for your stay
              </p>
            </div>

            <div className="space-y-8">
              {accommodations.map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{category.type}</h3>
                        <p className="text-lg opacity-90">{category.priceRange}</p>
                      </div>
                      <Bed className="w-12 h-12 opacity-80" />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {category.examples.map((hotel, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200"
                        >
                          <h4 className="font-semibold text-gray-900 mb-1">{hotel.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{hotel.location}</p>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-current text-yellow-500" />
                            <span className="text-sm font-medium">{hotel.rating}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Travel Costs Tab */}
        {selectedTab === 'costs' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Travel Cost Guide</h2>
              <p className="text-gray-600 text-lg">
                Comprehensive breakdown of travel expenses for budget planning
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Transportation Costs */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6 text-white">
                  <div className="flex items-center space-x-3">
                    <Car className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">Transportation</h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  {transportationCosts.map((transport, idx) => (
                    <div
                      key={idx}
                      className="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition-colors duration-200"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">{transport.mode}</h4>
                        <span className="font-bold text-green-600">{transport.cost}</span>
                      </div>
                      <p className="text-sm text-gray-600">{transport.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Daily Budget Guide */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">Daily Budget Guide</h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  {[
                    { category: "Budget Traveler", cost: "₹1,500-2,500/day", desc: "Basic accommodation, local food, public transport" },
                    { category: "Mid-Range Traveler", cost: "₹3,000-5,000/day", desc: "Comfortable hotels, good restaurants, private transport" },
                    { category: "Luxury Traveler", cost: "₹8,000-15,000/day", desc: "Premium hotels, fine dining, private guided tours" },
                    { category: "Backpacker", cost: "₹800-1,500/day", desc: "Hostels, street food, trains/buses" }
                  ].map((budget, idx) => (
                    <div
                      key={idx}
                      className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors duration-200"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">{budget.category}</h4>
                        <span className="font-bold text-purple-600">{budget.cost}</span>
                      </div>
                      <p className="text-sm text-gray-600">{budget.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cost Saving Tips */}
            <div className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-6 text-white">
                <h3 className="text-2xl font-bold">💡 Cost Saving Tips</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Book trains in advance for better fares",
                    "Try local street food for authentic experience",
                    "Use government tourist guest houses",
                    "Travel during off-season for discounts",
                    "Book hotel packages for multiple days",
                    "Use prepaid taxi services",
                    "Carry water bottle to save on drinks",
                    "Join group tours for shared costs"
                  ].map((tip, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanJourney;