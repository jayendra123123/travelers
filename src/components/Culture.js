import React, { useState } from 'react';
import { Users, MapPin, Calendar, Music, Utensils, Palette, Heart, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const Culture = () => {
  const [selectedCulture, setSelectedCulture] = useState('all');

  const cultures = [
    // Regional Cultures
    {
      name: 'Awadhi Culture',
      region: 'Lucknow & Central UP',
      description: 'Refined culture of the Nawabs with exquisite cuisine, poetry, and arts',
      language: 'Awadhi, Urdu',
      cuisine: ['Biryani', 'Kebabs', 'Korma', 'Kulfi'],
      festivals: ['Eid', 'Holi', 'Diwali', 'Muharram'],
      arts: ['Chikankari', 'Kathak Dance', 'Ghazals', 'Qawwali'],
      traditions: ['Tehzeeb (Etiquette)', 'Mushaira (Poetry)', 'Dastarkhwan (Dining)', 'Adab (Courtesy)'],
      clothing: ['Sherwani', 'Churidar', 'Angrakha', 'Dupatta'],
      icon: '👑',
      color: 'from-purple-500 to-pink-600',
      category: 'regional'
    },
    {
      name: 'Braj Culture',
      region: 'Mathura-Vrindavan Area',
      description: 'Krishna-centric culture with devotional music, dance, and vibrant festivals',
      language: 'Braj Bhasha',
      cuisine: ['Peda', 'Lassi', 'Makhan-Mishri', 'Rabri'],
      festivals: ['Janmashtami', 'Holi', 'Radhashtami', 'Govardhan Puja'],
      arts: ['Ras Leela', 'Bhajan-Kirtan', 'Miniature Painting', 'Folk Dance'],
      traditions: ['Parikrama', 'Bhakti Poetry', 'Temple Worship', 'Seva (Service)'],
      clothing: ['Dhoti-Kurta', 'Lehenga', 'Pagri', 'Tilak'],
      icon: '🪈',
      color: 'from-blue-500 to-indigo-600',
      category: 'regional'
    },
    {
      name: 'Banarasi Culture',
      region: 'Varanasi & Eastern UP',
      description: 'Ancient spiritual culture blending Hindu traditions with classical arts',
      language: 'Bhojpuri, Hindi',
      cuisine: ['Kachori-Jalebi', 'Baati Chokha', 'Thandai', 'Paan'],
      festivals: ['Dev Deepavali', 'Ganga Aarti', 'Shivratri', 'Nag Panchami'],
      arts: ['Classical Music', 'Banarasi Silk', 'Tabla', 'Sitar'],
      traditions: ['Ganga Worship', 'Morning Yoga', 'Evening Aarti', 'Sacred Threads'],
      clothing: ['Banarasi Saree', 'Dhoti', 'Kurta', 'Gamcha'],
      icon: '🕉️',
      color: 'from-orange-500 to-red-600',
      category: 'regional'
    },
    {
      name: 'Bundelkhandi Culture',
      region: 'Jhansi-Banda Region',
      description: 'Warrior culture with brave traditions, folk arts, and rustic charm',
      language: 'Bundeli',
      cuisine: ['Dal-Bafla', 'Gulgula', 'Kheer', 'Raita'],
      festivals: ['Teej', 'Karva Chauth', 'Dussehra', 'Diwali'],
      arts: ['Folk Songs', 'Bundeli Dance', 'Stone Carving', 'Pottery'],
      traditions: ['Valor Stories', 'Folk Tales', 'Agriculture Rituals', 'Community Festivals'],
      clothing: ['Dhoti-Kurta', 'Lehenga-Choli', 'Pagri', 'Odhni'],
      icon: '⚔️',
      color: 'from-green-500 to-teal-600',
      category: 'regional'
    },

    // Religious Cultures
    {
      name: 'Hindu Traditional Culture',
      region: 'Throughout UP',
      description: 'Ancient Vedic traditions with diverse worship practices and philosophies',
      language: 'Sanskrit, Hindi',
      cuisine: ['Prasad', 'Vegetarian Thali', 'Khichdi', 'Sweets'],
      festivals: ['Diwali', 'Holi', 'Dussehra', 'Karva Chauth'],
      arts: ['Temple Architecture', 'Classical Dance', 'Bhajan-Kirtan', 'Yoga'],
      traditions: ['Puja Rituals', 'Fasting', 'Pilgrimage', 'Guru-Shishya'],
      clothing: ['Saree', 'Dhoti-Kurta', 'Tilaka', 'Sacred Thread'],
      icon: '🕉️',
      color: 'from-saffron-500 to-orange-600',
      category: 'religious'
    },
    {
      name: 'Islamic Culture',
      region: 'Lucknow, Rampur, Aligarh',
      description: 'Rich Islamic heritage with Mughal influences in art, architecture, and lifestyle',
      language: 'Urdu, Arabic',
      cuisine: ['Biryani', 'Haleem', 'Sheer Khurma', 'Kebabs'],
      festivals: ['Eid ul-Fitr', 'Eid ul-Adha', 'Muharram', 'Milad'],
      arts: ['Calligraphy', 'Mughal Architecture', 'Qawwali', 'Miniature Painting'],
      traditions: ['Five Daily Prayers', 'Friday Congregation', 'Zakat', 'Hajj'],
      clothing: ['Sherwani', 'Burqa', 'Kurta-Pajama', 'Taqiyah'],
      icon: '☪️',
      color: 'from-emerald-500 to-cyan-600',
      category: 'religious'
    },
    {
      name: 'Buddhist Culture',
      region: 'Sarnath, Kushinagar',
      description: 'Peaceful Buddhist traditions with meditation, mindfulness, and compassion',
      language: 'Pali, Hindi',
      cuisine: ['Vegetarian Food', 'Tea', 'Rice', 'Simple Meals'],
      festivals: ['Buddha Purnima', 'Dharma Chakra Day', 'Kathina', 'Magha Puja'],
      arts: ['Sculpture', 'Thangka Painting', 'Chanting', 'Meditation'],
      traditions: ['Meditation', 'Mindfulness', 'Compassion', 'Non-violence'],
      clothing: ['Robes', 'Simple Clothing', 'Prayer Beads', 'Minimal Adornment'],
      icon: '☸️',
      color: 'from-yellow-500 to-amber-600',
      category: 'religious'
    },

    // Tribal Cultures
    {
      name: 'Tharu Culture',
      region: 'Terai Region, Lakhimpur',
      description: 'Indigenous culture with unique traditions, art forms, and forest lifestyle',
      language: 'Tharu',
      cuisine: ['Fish Curry', 'Rice', 'Forest Vegetables', 'Traditional Brew'],
      festivals: ['Maghi', 'Jitiya', 'Chhath', 'Harvest Festival'],
      arts: ['Wall Paintings', 'Folk Dance', 'Handicrafts', 'Storytelling'],
      traditions: ['Forest Conservation', 'Community Living', 'Traditional Medicine', 'Oral History'],
      clothing: ['Traditional Dress', 'Handwoven Cloth', 'Natural Dyes', 'Jewelry'],
      icon: '🌿',
      color: 'from-green-600 to-emerald-700',
      category: 'tribal'
    },
    {
      name: 'Gond Culture',
      region: 'Sonbhadra District',
      description: 'Artistic tribal culture known for distinctive paintings and nature worship',
      language: 'Gondi',
      cuisine: ['Mahua', 'Forest Fruits', 'Traditional Grains', 'Herbal Food'],
      festivals: ['Nagpanchami', 'Hareli', 'Pola', 'Diwali'],
      arts: ['Gond Paintings', 'Tribal Dance', 'Folk Music', 'Craft Work'],
      traditions: ['Nature Worship', 'Ancestor Reverence', 'Community Decisions', 'Oral Traditions'],
      clothing: ['Tribal Attire', 'Body Art', 'Natural Ornaments', 'Colorful Fabrics'],
      icon: '🎨',
      color: 'from-red-500 to-pink-600',
      category: 'tribal'
    },

    // Art & Craft Cultures
    {
      name: 'Handloom Culture',
      region: 'Varanasi, Mirzapur',
      description: 'Traditional weaving culture producing world-famous textiles and carpets',
      language: 'Hindi, Local dialects',
      cuisine: ['Simple Meals', 'Tea', 'Seasonal Food', 'Community Cooking'],
      festivals: ['Vishwakarma Puja', 'Diwali', 'Holi', 'Local Fairs'],
      arts: ['Silk Weaving', 'Carpet Making', 'Textile Design', 'Pattern Creation'],
      traditions: ['Master-Apprentice System', 'Family Businesses', 'Quality Craftsmanship', 'Design Innovation'],
      clothing: ['Work Clothes', 'Traditional Wear', 'Handwoven Items', 'Cultural Dress'],
      icon: '🧵',
      color: 'from-indigo-500 to-purple-600',
      category: 'craft'
    },
    {
      name: 'Pottery Culture',
      region: 'Khurja, Chunar',
      description: 'Ancient pottery traditions creating beautiful ceramics and earthenware',
      language: 'Hindi, Local dialects',
      cuisine: ['Traditional Food', 'Clay-cooked Items', 'Local Specialties', 'Seasonal Dishes'],
      festivals: ['Vishwakarma Day', 'Pottery Fairs', 'Cultural Festivals', 'Harvest Celebrations'],
      arts: ['Pottery Making', 'Ceramic Art', 'Glazing', 'Decorative Patterns'],
      traditions: ['Clay Preparation', 'Wheel Throwing', 'Kiln Firing', 'Artistic Expression'],
      clothing: ['Work Attire', 'Practical Clothing', 'Aprons', 'Traditional Wear'],
      icon: '🏺',
      color: 'from-amber-500 to-orange-600',
      category: 'craft'
    }
  ];

  const cultureCategories = [
    { id: 'all', name: 'All Cultures', icon: '🌍' },
    { id: 'regional', name: 'Regional', icon: '🏛️' },
    { id: 'religious', name: 'Religious', icon: '🙏' },
    { id: 'tribal', name: 'Tribal', icon: '🌿' },
    { id: 'craft', name: 'Arts & Crafts', icon: '🎨' }
  ];

  const filteredCultures = selectedCulture === 'all' 
    ? cultures 
    : cultures.filter(culture => culture.category === selectedCulture);

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
              <Link to="/culture" className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors border-b-2 border-indigo-600">Culture</Link>
              <Link to="/plan-journey" className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300">
                Plan Journey
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Cultural Heritage</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore the rich tapestry of diverse cultures that make Uttar Pradesh 
            a vibrant mosaic of traditions, arts, and customs
          </p>
        </div>
      </div>

      {/* Culture Categories Filter */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {cultureCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCulture(category.id)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  selectedCulture === category.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-indigo-50'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cultures Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {cultureCategories.find(c => c.id === selectedCulture)?.name || 'All Cultures'}
          </h2>
          <p className="text-gray-600 text-lg">
            Discover {filteredCultures.length} unique cultural traditions of Uttar Pradesh
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCultures.map((culture, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Card Header */}
              <div className={`relative h-32 bg-gradient-to-r ${culture.color} p-6 flex items-center justify-between`}>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{culture.name}</h3>
                  <div className="flex items-center space-x-2 text-white/90">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{culture.region}</span>
                  </div>
                </div>
                <div className="text-5xl opacity-80">{culture.icon}</div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {culture.description}
                </p>

                {/* Culture Details */}
                <div className="space-y-4">
                  {/* Language */}
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">L</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Language</h4>
                      <p className="text-sm text-gray-600">{culture.language}</p>
                    </div>
                  </div>

                  {/* Cuisine */}
                  <div className="flex items-start space-x-3">
                    <Utensils className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-2">Traditional Cuisine</h4>
                      <div className="flex flex-wrap gap-2">
                        {culture.cuisine.map((item, idx) => (
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

                  {/* Festivals */}
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-2">Major Festivals</h4>
                      <div className="flex flex-wrap gap-2">
                        {culture.festivals.map((festival, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full"
                          >
                            {festival}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Arts */}
                  <div className="flex items-start space-x-3">
                    <Palette className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-2">Art Forms</h4>
                      <div className="flex flex-wrap gap-2">
                        {culture.arts.map((art, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded-full"
                          >
                            {art}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Traditions */}
                  <div className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Traditions</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {culture.traditions.map((tradition, idx) => (
                          <div
                            key={idx}
                            className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded border border-red-100"
                          >
                            {tradition}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Traditional Clothing */}
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-2">Traditional Attire</h4>
                      <div className="flex flex-wrap gap-2">
                        {culture.clothing.map((item, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Learn More Button */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className={`w-full bg-gradient-to-r ${culture.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
                    Explore This Culture
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Culture;