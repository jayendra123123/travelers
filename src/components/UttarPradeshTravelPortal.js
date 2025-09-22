import React, { useState, useMemo } from 'react';
import { Search, MapPin, Star, Award, Globe, Calendar, Compass } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import LocationCard from './LocationCard';
import SearchSuggestions from './SearchSuggestions';

const UttarPradeshTravelPortal = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  // 100+ Famous locations in Uttar Pradesh
  const locations = [
    // Historical & Heritage
    { name: 'Taj Mahal, Agra', category: 'historical', description: 'UNESCO World Heritage Site, Symbol of Love', rating: 4.9, visitors: '6M+' },
    { name: 'Agra Fort', category: 'historical', description: 'Mughal Architecture Masterpiece', rating: 4.7, visitors: '2M+' },
    { name: 'Fatehpur Sikri', category: 'historical', description: 'Ghost City of Akbar', rating: 4.6, visitors: '1M+' },
    { name: 'Red Fort, Delhi Border', category: 'historical', description: 'Mughal Dynasty Fortress', rating: 4.5, visitors: '800K+' },
    { name: 'Buland Darwaza', category: 'historical', description: 'Gate of Magnificence', rating: 4.4, visitors: '500K+' },
    { name: 'Tomb of Itimad-ud-Daulah', category: 'historical', description: 'Baby Taj Mahal', rating: 4.3, visitors: '300K+' },
    { name: 'Jhansi Fort', category: 'historical', description: 'Rani Lakshmibai\'s Stronghold', rating: 4.5, visitors: '400K+' },
    { name: 'Chunar Fort', category: 'historical', description: 'Ancient Hilltop Fortress', rating: 4.2, visitors: '150K+' },
    { name: 'Kalinjar Fort', category: 'historical', description: 'Strategic Hill Fort', rating: 4.3, visitors: '200K+' },
    { name: 'Allahabad Fort', category: 'historical', description: 'Akbar\'s Architectural Marvel', rating: 4.4, visitors: '350K+' },

    // Religious Sites
    { name: 'Varanasi Ghats', category: 'religious', description: 'Spiritual Capital of India', rating: 4.8, visitors: '3M+' },
    { name: 'Kashi Vishwanath Temple', category: 'religious', description: 'Most Sacred Shiva Temple', rating: 4.9, visitors: '2.5M+' },
    { name: 'Ayodhya Ram Janmabhoomi', category: 'religious', description: 'Birthplace of Lord Rama', rating: 4.8, visitors: '2M+' },
    { name: 'Mathura Krishna Janmabhoomi', category: 'religious', description: 'Birthplace of Lord Krishna', rating: 4.7, visitors: '1.5M+' },
    { name: 'Vrindavan', category: 'religious', description: 'Krishna\'s Playground', rating: 4.6, visitors: '1.2M+' },
    { name: 'Sarnath', category: 'religious', description: 'Buddha\'s First Sermon', rating: 4.5, visitors: '800K+' },
    { name: 'Triveni Sangam, Prayagraj', category: 'religious', description: 'Confluence of Three Rivers', rating: 4.7, visitors: '5M+' },
    { name: 'Vindhyavasini Devi Temple', category: 'religious', description: 'Shakti Peetha Temple', rating: 4.4, visitors: '600K+' },
    { name: 'Chitrakoot', category: 'religious', description: 'Rama\'s Exile Destination', rating: 4.5, visitors: '700K+' },
    { name: 'Govardhan Hill', category: 'religious', description: 'Sacred Krishna Hill', rating: 4.3, visitors: '500K+' },

    // Natural & Wildlife
    { name: 'Dudhwa National Park', category: 'nature', description: 'Tiger Reserve & Wildlife Sanctuary', rating: 4.6, visitors: '100K+' },
    { name: 'Pilibhit Tiger Reserve', category: 'nature', description: 'Dense Forest & Tigers', rating: 4.4, visitors: '80K+' },
    { name: 'Chandra Prabha Wildlife Sanctuary', category: 'nature', description: 'Scenic Wildlife Haven', rating: 4.2, visitors: '50K+' },
    { name: 'Hastinapur Wildlife Sanctuary', category: 'nature', description: 'Gangetic Plains Wildlife', rating: 4.1, visitors: '60K+' },
    { name: 'Sur Sarovar Bird Sanctuary', category: 'nature', description: 'Keetham Lake Bird Paradise', rating: 4.3, visitors: '75K+' },
    { name: 'Okhla Bird Sanctuary', category: 'nature', description: 'Migratory Birds Haven', rating: 4.0, visitors: '40K+' },
    { name: 'Kishanpur Wildlife Sanctuary', category: 'nature', description: 'Tiger & Leopard Reserve', rating: 4.2, visitors: '45K+' },
    { name: 'Katarniaghat Wildlife Sanctuary', category: 'nature', description: 'Gharial & Crocodile Sanctuary', rating: 4.1, visitors: '35K+' },

    // Modern Cities & Culture
    { name: 'Lucknow', category: 'cultural', description: 'City of Nawabs', rating: 4.5, visitors: '2M+' },
    { name: 'Bara Imambara, Lucknow', category: 'cultural', description: 'Architectural Wonder', rating: 4.6, visitors: '800K+' },
    { name: 'Chota Imambara, Lucknow', category: 'cultural', description: 'Palace of Lights', rating: 4.4, visitors: '600K+' },
    { name: 'Rumi Darwaza, Lucknow', category: 'cultural', description: 'Turkish Gateway', rating: 4.3, visitors: '500K+' },
    { name: 'British Residency, Lucknow', category: 'cultural', description: 'Colonial Era Ruins', rating: 4.2, visitors: '300K+' },
    { name: 'Kanpur', category: 'cultural', description: 'Industrial Heritage City', rating: 4.1, visitors: '1M+' },
    { name: 'Meerut', category: 'cultural', description: '1857 Revolt Birthplace', rating: 4.0, visitors: '800K+' },
    { name: 'Aligarh', category: 'cultural', description: 'Educational Hub', rating: 4.1, visitors: '600K+' },

    // Additional Historical Sites
    { name: 'Mehtab Bagh, Agra', category: 'historical', description: 'Moonlight Garden', rating: 4.3, visitors: '400K+' },
    { name: 'Akbar\'s Tomb, Sikandra', category: 'historical', description: 'Mughal Emperor\'s Mausoleum', rating: 4.2, visitors: '350K+' },
    { name: 'Mariam\'s Tomb, Sikandra', category: 'historical', description: 'Akbar\'s Wife\'s Tomb', rating: 4.0, visitors: '200K+' },
    { name: 'Ram Bagh, Agra', category: 'historical', description: 'First Mughal Garden', rating: 3.9, visitors: '150K+' },
    { name: 'Guru ka Tal, Sikandra', category: 'historical', description: 'Historical Water Tank', rating: 3.8, visitors: '100K+' },
    
    // More Religious Sites
    { name: 'Banke Bihari Temple, Vrindavan', category: 'religious', description: 'Famous Krishna Temple', rating: 4.6, visitors: '900K+' },
    { name: 'ISKCON Temple, Vrindavan', category: 'religious', description: 'International Krishna Temple', rating: 4.5, visitors: '700K+' },
    { name: 'Prem Mandir, Vrindavan', category: 'religious', description: 'Temple of Love', rating: 4.7, visitors: '800K+' },
    { name: 'Radha Raman Temple, Vrindavan', category: 'religious', description: 'Ancient Krishna Temple', rating: 4.4, visitors: '500K+' },
    { name: 'Dwarkadheesh Temple, Mathura', category: 'religious', description: 'Krishna\'s Royal Temple', rating: 4.5, visitors: '600K+' },
    { name: 'Gita Mandir, Mathura', category: 'religious', description: 'Bhagavad Gita Temple', rating: 4.3, visitors: '400K+' },
    { name: 'Kusum Sarovar, Govardhan', category: 'religious', description: 'Sacred Water Body', rating: 4.2, visitors: '300K+' },
    { name: 'Radha Kund', category: 'religious', description: 'Most Sacred Pond', rating: 4.4, visitors: '350K+' },
    
    // Cultural & Educational
    { name: 'Banaras Hindu University', category: 'cultural', description: 'Ancient Seat of Learning', rating: 4.4, visitors: '500K+' },
    { name: 'Aligarh Muslim University', category: 'cultural', description: 'Historic University', rating: 4.3, visitors: '400K+' },
    { name: 'Jamia Millia Islamia', category: 'cultural', description: 'National University', rating: 4.2, visitors: '300K+' },
    { name: 'Allahabad University', category: 'cultural', description: 'Premier Educational Institute', rating: 4.1, visitors: '250K+' },
    
    // Hill Stations & Scenic Places
    { name: 'Nainital', category: 'nature', description: 'Lake City in Himalayas', rating: 4.6, visitors: '1.2M+' },
    { name: 'Mussoorie', category: 'nature', description: 'Queen of Hill Stations', rating: 4.5, visitors: '1M+' },
    { name: 'Rishikesh', category: 'nature', description: 'Yoga Capital of World', rating: 4.7, visitors: '800K+' },
    { name: 'Haridwar', category: 'religious', description: 'Gateway to Gods', rating: 4.6, visitors: '1.5M+' },
    
    // Archaeological Sites
    { name: 'Kaushambi', category: 'historical', description: 'Ancient Buddhist Site', rating: 4.0, visitors: '50K+' },
    { name: 'Shravasti', category: 'historical', description: 'Buddha\'s Monsoon Retreat', rating: 4.2, visitors: '80K+' },
    { name: 'Kapilavastu', category: 'historical', description: 'Buddha\'s Birthplace Region', rating: 4.1, visitors: '60K+' },
    { name: 'Sankassa', category: 'historical', description: 'Buddha\'s Descent Site', rating: 3.9, visitors: '40K+' },
    
    // More Cities & Towns
    { name: 'Gorakhpur', category: 'cultural', description: 'Cultural Heritage City', rating: 4.1, visitors: '600K+' },
    { name: 'Bareilly', category: 'cultural', description: 'Historical Trading Center', rating: 4.0, visitors: '400K+' },
    { name: 'Moradabad', category: 'cultural', description: 'Brass City of India', rating: 4.0, visitors: '300K+' },
    { name: 'Saharanpur', category: 'cultural', description: 'Wood Carving Capital', rating: 3.9, visitors: '250K+' },
    { name: 'Firozabad', category: 'cultural', description: 'Glass City of India', rating: 3.8, visitors: '200K+' },
    { name: 'Mirzapur', category: 'cultural', description: 'Carpet Weaving Center', rating: 3.9, visitors: '180K+' },
    { name: 'Jaunpur', category: 'historical', description: 'City of Ancient Learning', rating: 4.1, visitors: '220K+' },
    { name: 'Sultanpur', category: 'cultural', description: 'Historical Trading Hub', rating: 3.8, visitors: '150K+' },
    
    // Unique Attractions
    { name: 'Bateshwar', category: 'religious', description: 'Ancient Temple Complex', rating: 4.2, visitors: '100K+' },
    { name: 'Devgarh', category: 'historical', description: 'Ruined Fort City', rating: 4.0, visitors: '80K+' },
    { name: 'Mahoba', category: 'historical', description: 'Chandela Dynasty Capital', rating: 4.1, visitors: '120K+' },
    { name: 'Lalitpur', category: 'cultural', description: 'Town of Palaces', rating: 3.9, visitors: '90K+' },
    { name: 'Banda', category: 'historical', description: 'Bundela Heritage Town', rating: 3.8, visitors: '70K+' },
    { name: 'Hamirpur', category: 'cultural', description: 'Educational Hub', rating: 3.7, visitors: '60K+' },
    { name: 'Chitrakoot Dham', category: 'religious', description: 'Holy Pilgrimage Site', rating: 4.3, visitors: '400K+' },
    { name: 'Vindhyachal', category: 'religious', description: 'Goddess Durga Temple', rating: 4.4, visitors: '500K+' },
    
    // Modern Developments
    { name: 'Noida', category: 'modern', description: 'Planned Industrial City', rating: 4.2, visitors: '800K+' },
    { name: 'Greater Noida', category: 'modern', description: 'Modern Satellite City', rating: 4.1, visitors: '500K+' },
    { name: 'Ghaziabad', category: 'modern', description: 'Gateway of UP', rating: 4.0, visitors: '600K+' },
    { name: 'Faridabad', category: 'modern', description: 'Industrial Hub', rating: 3.9, visitors: '400K+' },
    
    // Wildlife & Nature Additional
    { name: 'Turtle Sanctuary Sandi', category: 'nature', description: 'Turtle Conservation Center', rating: 4.0, visitors: '30K+' },
    { name: 'Patna Bird Sanctuary', category: 'nature', description: 'Migratory Bird Haven', rating: 3.9, visitors: '25K+' },
    { name: 'Samaspur Bird Sanctuary', category: 'nature', description: 'Wetland Bird Sanctuary', rating: 3.8, visitors: '20K+' },
    
    // Unique Cultural Sites
    { name: 'Kuchipudi Village', category: 'cultural', description: 'Classical Dance Origin', rating: 4.1, visitors: '50K+' },
    { name: 'Khurja', category: 'cultural', description: 'Pottery & Ceramics Hub', rating: 3.9, visitors: '80K+' },
    { name: 'Bhadohi', category: 'cultural', description: 'Carpet Capital', rating: 3.8, visitors: '70K+' },
    
    // Adventure & Sports
    { name: 'Dudhwa Adventure Camp', category: 'adventure', description: 'Wildlife Adventure Base', rating: 4.2, visitors: '15K+' },
    { name: 'Rishikesh Adventure Sports', category: 'adventure', description: 'River Rafting & Bungee', rating: 4.5, visitors: '200K+' },
    { name: 'Nainital Boating', category: 'adventure', description: 'Lake Adventure Activities', rating: 4.3, visitors: '300K+' },
    
    // Offbeat Destinations  
    { name: 'Piprahwa', category: 'historical', description: 'Buddha Relic Site', rating: 4.0, visitors: '25K+' },
    { name: 'Kampil', category: 'historical', description: 'Ancient Drupad Capital', rating: 3.9, visitors: '20K+' },
    { name: 'Ahichhatra', category: 'historical', description: 'Pandava Kingdom Remains', rating: 3.8, visitors: '18K+' },
    { name: 'Hastinapur', category: 'historical', description: 'Mahabharata Epic Site', rating: 4.1, visitors: '150K+' },
    { name: 'Indraprastha', category: 'historical', description: 'Pandava Capital City', rating: 4.0, visitors: '100K+' },
    
    // Fairs & Festivals Locations
    { name: 'Kumbh Mela Ground, Prayagraj', category: 'cultural', description: 'World\'s Largest Gathering', rating: 4.8, visitors: '100M+' },
    { name: 'Sonepur Cattle Fair Ground', category: 'cultural', description: 'Asia\'s Largest Cattle Fair', rating: 4.2, visitors: '2M+' },
    { name: 'Pushkar Fair Ground', category: 'cultural', description: 'Camel Fair Venue', rating: 4.3, visitors: '500K+' }
  ];

  // Nearby locations mapping - when user searches for a location, show nearby attractions
  const nearbyLocationsMap = {
    'agra': [
      { name: 'Taj Mahal, Agra', category: 'historical', description: 'UNESCO World Heritage Site, Symbol of Love', rating: 4.9, visitors: '6M+', distance: '0 km' },
      { name: 'Agra Fort', category: 'historical', description: 'Mughal Architecture Masterpiece', rating: 4.7, visitors: '2M+', distance: '2.5 km' },
      { name: 'Mehtab Bagh, Agra', category: 'historical', description: 'Moonlight Garden', rating: 4.3, visitors: '400K+', distance: '1.2 km' },
      { name: 'Tomb of Itimad-ud-Daulah', category: 'historical', description: 'Baby Taj Mahal', rating: 4.3, visitors: '300K+', distance: '5 km' },
      { name: 'Akbar\'s Tomb, Sikandra', category: 'historical', description: 'Mughal Emperor\'s Mausoleum', rating: 4.2, visitors: '350K+', distance: '10 km' },
      { name: 'Fatehpur Sikri', category: 'historical', description: 'Ghost City of Akbar', rating: 4.6, visitors: '1M+', distance: '37 km' }
    ],
    'mathura': [
      { name: 'Mathura Krishna Janmabhoomi', category: 'religious', description: 'Birthplace of Lord Krishna', rating: 4.7, visitors: '1.5M+', distance: '0 km' },
      { name: 'Dwarkadheesh Temple, Mathura', category: 'religious', description: 'Krishna\'s Royal Temple', rating: 4.5, visitors: '600K+', distance: '1 km' },
      { name: 'Gita Mandir, Mathura', category: 'religious', description: 'Bhagavad Gita Temple', rating: 4.3, visitors: '400K+', distance: '2 km' },
      { name: 'Vrindavan', category: 'religious', description: 'Krishna\'s Playground', rating: 4.6, visitors: '1.2M+', distance: '11 km' },
      { name: 'Govardhan Hill', category: 'religious', description: 'Sacred Krishna Hill', rating: 4.3, visitors: '500K+', distance: '22 km' },
      { name: 'Barsana', category: 'religious', description: 'Radha\'s Birthplace', rating: 4.4, visitors: '400K+', distance: '45 km' }
    ],
    'vrindavan': [
      { name: 'Vrindavan', category: 'religious', description: 'Krishna\'s Playground', rating: 4.6, visitors: '1.2M+', distance: '0 km' },
      { name: 'Banke Bihari Temple, Vrindavan', category: 'religious', description: 'Famous Krishna Temple', rating: 4.6, visitors: '900K+', distance: '1 km' },
      { name: 'ISKCON Temple, Vrindavan', category: 'religious', description: 'International Krishna Temple', rating: 4.5, visitors: '700K+', distance: '2 km' },
      { name: 'Prem Mandir, Vrindavan', category: 'religious', description: 'Temple of Love', rating: 4.7, visitors: '800K+', distance: '3 km' },
      { name: 'Radha Raman Temple, Vrindavan', category: 'religious', description: 'Ancient Krishna Temple', rating: 4.4, visitors: '500K+', distance: '1.5 km' },
      { name: 'Mathura Krishna Janmabhoomi', category: 'religious', description: 'Birthplace of Lord Krishna', rating: 4.7, visitors: '1.5M+', distance: '11 km' }
    ],
    'varanasi': [
      { name: 'Varanasi Ghats', category: 'religious', description: 'Spiritual Capital of India', rating: 4.8, visitors: '3M+', distance: '0 km' },
      { name: 'Kashi Vishwanath Temple', category: 'religious', description: 'Most Sacred Shiva Temple', rating: 4.9, visitors: '2.5M+', distance: '1 km' },
      { name: 'Sarnath', category: 'religious', description: 'Buddha\'s First Sermon', rating: 4.5, visitors: '800K+', distance: '13 km' },
      { name: 'Banaras Hindu University', category: 'cultural', description: 'Ancient Seat of Learning', rating: 4.4, visitors: '500K+', distance: '8 km' },
      { name: 'Ramnagar Fort', category: 'historical', description: 'Royal Palace Museum', rating: 4.2, visitors: '200K+', distance: '14 km' },
      { name: 'Chunar Fort', category: 'historical', description: 'Ancient Hilltop Fortress', rating: 4.2, visitors: '150K+', distance: '40 km' }
    ],
    'lucknow': [
      { name: 'Lucknow', category: 'cultural', description: 'City of Nawabs', rating: 4.5, visitors: '2M+', distance: '0 km' },
      { name: 'Bara Imambara, Lucknow', category: 'cultural', description: 'Architectural Wonder', rating: 4.6, visitors: '800K+', distance: '3 km' },
      { name: 'Chota Imambara, Lucknow', category: 'cultural', description: 'Palace of Lights', rating: 4.4, visitors: '600K+', distance: '4 km' },
      { name: 'Rumi Darwaza, Lucknow', category: 'cultural', description: 'Turkish Gateway', rating: 4.3, visitors: '500K+', distance: '3.5 km' },
      { name: 'British Residency, Lucknow', category: 'cultural', description: 'Colonial Era Ruins', rating: 4.2, visitors: '300K+', distance: '5 km' },
      { name: 'La Martiniere College', category: 'cultural', description: 'Historic Educational Institution', rating: 4.1, visitors: '100K+', distance: '6 km' }
    ],
    'ayodhya': [
      { name: 'Ayodhya Ram Janmabhoomi', category: 'religious', description: 'Birthplace of Lord Rama', rating: 4.8, visitors: '2M+', distance: '0 km' },
      { name: 'Hanuman Garhi, Ayodhya', category: 'religious', description: 'Sacred Hanuman Temple', rating: 4.6, visitors: '800K+', distance: '2 km' },
      { name: 'Kanak Bhawan, Ayodhya', category: 'religious', description: 'Sita Ram Temple', rating: 4.5, visitors: '600K+', distance: '1.5 km' },
      { name: 'Dashrath Mahal, Ayodhya', category: 'historical', description: 'King Dashrath\'s Palace', rating: 4.3, visitors: '400K+', distance: '3 km' },
      { name: 'Faizabad', category: 'cultural', description: 'Historic Nawabi City', rating: 4.1, visitors: '300K+', distance: '7 km' },
      { name: 'Guptar Ghat, Ayodhya', category: 'religious', description: 'Rama\'s Final Journey Site', rating: 4.4, visitors: '350K+', distance: '4 km' }
    ],
    'prayagraj': [
      { name: 'Triveni Sangam, Prayagraj', category: 'religious', description: 'Confluence of Three Rivers', rating: 4.7, visitors: '5M+', distance: '0 km' },
      { name: 'Allahabad Fort', category: 'historical', description: 'Akbar\'s Architectural Marvel', rating: 4.4, visitors: '350K+', distance: '3 km' },
      { name: 'Kumbh Mela Ground, Prayagraj', category: 'cultural', description: 'World\'s Largest Gathering', rating: 4.8, visitors: '100M+', distance: '5 km' },
      { name: 'Allahabad University', category: 'cultural', description: 'Premier Educational Institute', rating: 4.1, visitors: '250K+', distance: '8 km' },
      { name: 'Anand Bhavan', category: 'historical', description: 'Nehru Family Museum', rating: 4.3, visitors: '200K+', distance: '6 km' },
      { name: 'Khusro Bagh', category: 'historical', description: 'Mughal Garden Tombs', rating: 4.2, visitors: '150K+', distance: '7 km' }
    ],
    'chitrakoot': [
      { name: 'Chitrakoot', category: 'religious', description: 'Rama\'s Exile Destination', rating: 4.5, visitors: '700K+', distance: '0 km' },
      { name: 'Chitrakoot Dham', category: 'religious', description: 'Holy Pilgrimage Site', rating: 4.3, visitors: '400K+', distance: '2 km' },
      { name: 'Ram Ghat, Chitrakoot', category: 'religious', description: 'Sacred Bathing Ghat', rating: 4.4, visitors: '500K+', distance: '1 km' },
      { name: 'Kamadgiri Hill', category: 'religious', description: 'Sacred Parikrama Hill', rating: 4.3, visitors: '350K+', distance: '3 km' },
      { name: 'Bharat Milap Temple', category: 'religious', description: 'Brothers\' Meeting Place', rating: 4.2, visitors: '300K+', distance: '2.5 km' },
      { name: 'Sphatik Shila', category: 'religious', description: 'Crystal Rock Seat', rating: 4.1, visitors: '250K+', distance: '4 km' }
    ],
    'kanpur': [
      { name: 'Kanpur', category: 'cultural', description: 'Industrial Heritage City', rating: 4.1, visitors: '1M+', distance: '0 km' },
      { name: 'Kanpur Memorial Church', category: 'historical', description: '1857 Uprising Memorial', rating: 4.2, visitors: '150K+', distance: '5 km' },
      { name: 'Allen Forest Zoo', category: 'nature', description: 'Urban Wildlife Park', rating: 4.0, visitors: '200K+', distance: '8 km' },
      { name: 'Bithoor', category: 'historical', description: 'Ancient Pilgrimage Town', rating: 4.3, visitors: '300K+', distance: '25 km' },
      { name: 'Jajmau', category: 'historical', description: 'Ancient Trading Center', rating: 3.9, visitors: '100K+', distance: '15 km' },
      { name: 'Phool Bagh', category: 'cultural', description: 'Historic Garden Park', rating: 4.0, visitors: '180K+', distance: '6 km' }
    ],
    'jhansi': [
      { name: 'Jhansi Fort', category: 'historical', description: 'Rani Lakshmibai\'s Stronghold', rating: 4.5, visitors: '400K+', distance: '0 km' },
      { name: 'Rani Mahal, Jhansi', category: 'historical', description: 'Queen\'s Palace Museum', rating: 4.3, visitors: '200K+', distance: '2 km' },
      { name: 'Government Museum, Jhansi', category: 'cultural', description: 'Archaeological Collection', rating: 4.1, visitors: '100K+', distance: '3 km' },
      { name: 'Orchha', category: 'historical', description: 'Medieval Heritage Town', rating: 4.6, visitors: '500K+', distance: '16 km' },
      { name: 'Khajuraho', category: 'historical', description: 'UNESCO Temple Complex', rating: 4.7, visitors: '800K+', distance: '175 km' },
      { name: 'Shivpuri', category: 'nature', description: 'Wildlife National Park', rating: 4.2, visitors: '150K+', distance: '120 km' }
    ],
    'gorakhpur': [
      { name: 'Gorakhpur', category: 'cultural', description: 'Cultural Heritage City', rating: 4.1, visitors: '600K+', distance: '0 km' },
      { name: 'Gorakhnath Temple', category: 'religious', description: 'Ancient Nath Sect Temple', rating: 4.4, visitors: '800K+', distance: '4 km' },
      { name: 'Kushmi Forest', category: 'nature', description: 'Dense Forest Reserve', rating: 4.0, visitors: '50K+', distance: '45 km' },
      { name: 'Ramgarh Tal', category: 'nature', description: 'Natural Lake', rating: 3.9, visitors: '80K+', distance: '12 km' },
      { name: 'Veer Bahadur Singh Planetarium', category: 'modern', description: 'Science & Astronomy Center', rating: 4.2, visitors: '120K+', distance: '6 km' },
      { name: 'Chauri Chaura', category: 'historical', description: 'Freedom Struggle Site', rating: 4.0, visitors: '75K+', distance: '25 km' }
    ]
  };

  // Filter suggestions based on search query - now includes nearby locations
  const filteredSuggestions = useMemo(() => {
    if (!searchQuery) return [];
    
    const query = searchQuery.toLowerCase();
    
    // Check if user is searching for a specific city/location
    const nearbyKey = Object.keys(nearbyLocationsMap).find(key => 
      query.includes(key) || key.includes(query.replace(/\s+/g, ''))
    );
    
    if (nearbyKey && nearbyLocationsMap[nearbyKey]) {
      // Return nearby locations for the searched city
      return nearbyLocationsMap[nearbyKey].slice(0, 8);
    }
    
    // Otherwise, return normal filtered results
    return locations.filter(location =>
      location.name.toLowerCase().includes(query) ||
      location.description.toLowerCase().includes(query) ||
      location.category.toLowerCase().includes(query)
    ).slice(0, 8);
  }, [searchQuery]);

  // Filter locations by category
  const filteredLocations = useMemo(() => {
    if (selectedCategory === 'all') return locations;
    return locations.filter(location => location.category === selectedCategory);
  }, [selectedCategory]);

  const categories = [
    { id: 'all', name: 'All Destinations', count: locations.length },
    { id: 'historical', name: 'Historical', count: locations.filter(l => l.category === 'historical').length },
    { id: 'religious', name: 'Religious', count: locations.filter(l => l.category === 'religious').length },
    { id: 'nature', name: 'Nature & Wildlife', count: locations.filter(l => l.category === 'nature').length },
    { id: 'cultural', name: 'Cultural', count: locations.filter(l => l.category === 'cultural').length },
    { id: 'modern', name: 'Modern Cities', count: locations.filter(l => l.category === 'modern').length },
    { id: 'adventure', name: 'Adventure', count: locations.filter(l => l.category === 'adventure').length }
  ];

  const handleLocationClick = (locationName) => {
    const query = encodeURIComponent(locationName + ', Uttar Pradesh, India');
    window.open(`https://www.google.com/maps/search/${query}`, '_blank');
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.name);
    setShowSuggestions(false);
    handleLocationClick(suggestion.name);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">UP Explorer</h1>
                <p className="text-xs text-gray-500">Premium Travel Experience</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/destinations" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Destinations</Link>
              <Link to="/experiences" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Experiences</Link>
              <Link to="/culture" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Culture</Link>
              <Link to="/plan-journey" className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300">
                Plan Journey
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-amber-900"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <div className="mb-6 flex justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <span className="text-amber-300 font-medium flex items-center">
                <Award className="w-5 h-5 mr-2" />
                India's Cultural Capital
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Uttar Pradesh
            </span>
            <br />
            <span className="text-white/90">Unveiled</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Embark on an extraordinary journey through India's most magnificent state, where ancient heritage meets timeless spirituality
          </p>

          {/* Premium Search Container */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-2xl p-3 shadow-2xl border border-gray-200/20">
              <div className="flex items-center">
                <div className="flex items-center flex-1">
                  <Search className="w-6 h-6 text-gray-400 ml-4" />
                  <input
                    type="text"
                    placeholder="Discover sacred temples, majestic forts, cultural treasures..."
                    className="flex-1 px-4 py-4 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none text-lg"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowSuggestions(e.target.value.length > 0);
                    }}
                    onFocus={() => setShowSuggestions(searchQuery.length > 0)}
                  />
                </div>
                <button
                  className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                  onClick={() => searchQuery && handleLocationClick(searchQuery)}
                >
                  <Globe className="w-5 h-5" />
                  <span>Explore</span>
                </button>
              </div>
            </div>

            {/* Enhanced Suggestions Dropdown */}
            <SearchSuggestions
              showSuggestions={showSuggestions}
              filteredSuggestions={filteredSuggestions}
              onSuggestionClick={handleSuggestionClick}
              searchQuery={searchQuery}
            />
          </div>

          {/* Stats Section */}
          <div className="flex justify-center space-x-8 md:space-x-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400">{locations.length}+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Premium Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400">5000+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Years of Heritage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400">∞</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Spiritual Experiences</div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Category Filters */}
      <div className="py-12 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Curated Experiences</h2>
            <p className="text-gray-600">Select your preferred type of destination</p>
          </div>
          <div className="flex overflow-x-auto space-x-6 pb-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex-shrink-0 px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 min-w-fit ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white border-amber-500 shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-amber-300 hover:bg-amber-50'
                }`}
              >
                <div className="text-center">
                  <div className="font-bold">{category.name}</div>
                  <div className="text-sm opacity-75">({category.count})</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Premium Locations Grid */}
      <div className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-amber-500 mr-2" />
              <span className="text-amber-600 font-medium uppercase tracking-wider text-sm">Handpicked Destinations</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {selectedCategory === 'all' ? 'All Premium Destinations' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover {filteredLocations.length} extraordinary places that showcase the finest of Uttar Pradesh's cultural heritage and natural beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredLocations.map((location, index) => (
              <LocationCard
                key={index}
                location={location}
                onClick={() => handleLocationClick(location.name)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Premium Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Compass className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">UP Explorer</h3>
                  <p className="text-amber-400 text-sm">Premium Travel Experience</p>
                </div>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Experience the extraordinary heritage and spiritual essence of Uttar Pradesh through our carefully curated destinations and premium travel experiences.
              </p>
              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-400">{locations.length}+</div>
                  <div className="text-xs text-gray-500 uppercase">Destinations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-400">5000+</div>
                  <div className="text-xs text-gray-500 uppercase">Years Heritage</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-400">∞</div>
                  <div className="text-xs text-gray-500 uppercase">Experiences</div>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-400">Experiences</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">🕌 Historical Heritage</li>
                <li className="hover:text-white cursor-pointer transition-colors">🙏 Sacred Pilgrimages</li>
                <li className="hover:text-white cursor-pointer transition-colors">🌿 Natural Sanctuaries</li>
                <li className="hover:text-white cursor-pointer transition-colors">� Cultural Immersions</li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-400">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Plan Your Journey</li>
                <li className="hover:text-white cursor-pointer transition-colors">Travel Concierge</li>
                <li className="hover:text-white cursor-pointer transition-colors">Cultural Guides</li>
                <li className="hover:text-white cursor-pointer transition-colors">Premium Support</li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 UP Explorer. Crafted with ❤️ for India's Cultural Heritage.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UttarPradeshTravelPortal;