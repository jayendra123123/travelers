import React, { useState, useMemo } from 'react';
import { Search, Award, Globe, Calendar, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import LocationCard from './LocationCard';
import SearchSuggestions from './SearchSuggestions';

// 100+ Famous locations in Sikkim - moved outside component to prevent recreating on every render
const locations = [
  // Historical & Heritage
  { name: 'Rumtek Monastery', category: 'historical', description: 'Sacred Buddhist Monastery, Seat of Karma Kagyu Lineage', rating: 4.9, visitors: '200K+' },
    { name: 'Enchey Monastery', category: 'historical', description: 'Sacred 200-year-old Monastery', rating: 4.7, visitors: '150K+' },
    { name: 'Pemayangtse Monastery', category: 'historical', description: 'Ancient Nyingma Order Gompa', rating: 4.6, visitors: '100K+' },
    { name: 'Tashiding Monastery', category: 'historical', description: 'Sacred Buddhist Pilgrimage Site', rating: 4.5, visitors: '80K+' },
    { name: 'Dubdi Monastery', category: 'historical', description: 'Sikkim\'s Oldest Monastery', rating: 4.4, visitors: '50K+' },
    { name: 'Namgyal Institute of Tibetology', category: 'historical', description: 'Tibetan Research Center', rating: 4.3, visitors: '45K+' },
    { name: 'Rabdentse Ruins', category: 'historical', description: 'Ancient Capital Remains', rating: 4.5, visitors: '40K+' },
    { name: 'Changu Fortress', category: 'historical', description: 'Ancient Border Stronghold', rating: 4.2, visitors: '35K+' },
    { name: 'Dro-dul Chorten', category: 'historical', description: 'Sacred Buddhist Stupa', rating: 4.3, visitors: '60K+' },
    { name: 'Sikkim Palace, Gangtok', category: 'historical', description: 'Royal Heritage Structure', rating: 4.4, visitors: '70K+' },

    // Religious Sites
    { name: 'Tsomgo Lake', category: 'religious', description: 'Sacred Alpine Glacial Lake', rating: 4.8, visitors: '300K+' },
    { name: 'Gurudongmar Lake', category: 'religious', description: 'One of World\'s Highest Sacred Lakes', rating: 4.9, visitors: '50K+' },
    { name: 'Khecheopalri Lake', category: 'religious', description: 'Wish-fulfilling Sacred Lake', rating: 4.8, visitors: '80K+' },
    { name: 'Kirateshwar Mahadev Temple', category: 'religious', description: 'Ancient Shiva Temple', rating: 4.7, visitors: '65K+' },
    { name: 'Samdruptse', category: 'religious', description: 'Giant Buddha Statue', rating: 4.6, visitors: '120K+' },
    { name: 'Solophok Chardham', category: 'religious', description: 'Pilgrimage Complex', rating: 4.5, visitors: '100K+' },
    { name: 'Phodong Monastery', category: 'religious', description: 'Karma Kagyu Buddhist Monastery', rating: 4.7, visitors: '75K+' },
    { name: 'Phensang Monastery', category: 'religious', description: 'Nyingma Buddhist Monastery', rating: 4.4, visitors: '40K+' },
    { name: 'Sangachoeling Monastery', category: 'religious', description: 'Second Oldest Monastery', rating: 4.5, visitors: '35K+' },
    { name: 'Tholung Monastery', category: 'religious', description: 'Sacred Artifacts Repository', rating: 4.3, visitors: '20K+' },

    // Natural & Wildlife
    { name: 'Khangchendzonga National Park', category: 'nature', description: 'UNESCO World Heritage Site, Third Highest Peak', rating: 4.9, visitors: '50K+' },
    { name: 'Yumthang Valley', category: 'nature', description: 'Valley of Flowers', rating: 4.8, visitors: '100K+' },
    { name: 'Green Lake Trek', category: 'nature', description: 'High Altitude Alpine Lake', rating: 4.7, visitors: '15K+' },
    { name: 'Singalila National Park', category: 'nature', description: 'Red Panda Reserve', rating: 4.6, visitors: '30K+' },
    { name: 'Barsey Rhododendron Sanctuary', category: 'nature', description: 'Rhododendron Forest Paradise', rating: 4.5, visitors: '25K+' },
    { name: 'Maenam Wildlife Sanctuary', category: 'nature', description: 'Himalayan Flora & Fauna', rating: 4.4, visitors: '20K+' },
    { name: 'Shingba Rhododendron Sanctuary', category: 'nature', description: 'Rare Alpine Flowers', rating: 4.5, visitors: '18K+' },
    { name: 'Pangolakha Wildlife Sanctuary', category: 'nature', description: 'Himalayan Black Bear Habitat', rating: 4.3, visitors: '15K+' },

    // Modern Cities & Culture
    { name: 'Gangtok', category: 'cultural', description: 'Capital City', rating: 4.7, visitors: '500K+' },
    { name: 'MG Marg, Gangtok', category: 'cultural', description: 'Pedestrian-friendly Shopping Street', rating: 4.6, visitors: '400K+' },
    { name: 'Lal Bazaar, Gangtok', category: 'cultural', description: 'Traditional Market', rating: 4.4, visitors: '300K+' },
    { name: 'Namchi', category: 'cultural', description: 'Religious Tourism Hub', rating: 4.5, visitors: '150K+' },
    { name: 'Sikkim Handicraft Center', category: 'cultural', description: 'Traditional Arts & Crafts', rating: 4.3, visitors: '100K+' },
    { name: 'Pelling', category: 'cultural', description: 'Scenic Mountain Town', rating: 4.6, visitors: '180K+' },
    { name: 'Ravangla', category: 'cultural', description: 'Buddha Park Town', rating: 4.5, visitors: '120K+' },
    { name: 'Lachung', category: 'cultural', description: 'Mountain Village', rating: 4.8, visitors: '90K+' },

    // Additional Historical Sites
    { name: 'Kabi Lungchok', category: 'historical', description: 'Blood Brotherhood Site', rating: 4.3, visitors: '30K+' },
    { name: 'Coronation Throne of Norbugang', category: 'historical', description: 'First Chogyal Coronation Site', rating: 4.2, visitors: '25K+' },
    { name: 'Old Ralang Monastery', category: 'historical', description: 'Ancient Kagyu Monastery', rating: 4.4, visitors: '35K+' },
    { name: 'Sikkimese Stone Art', category: 'historical', description: 'Ancient Stone Carvings', rating: 4.1, visitors: '20K+' },
    { name: 'Dubdi Monastery', category: 'historical', description: 'First Monastery of Sikkim', rating: 4.5, visitors: '40K+' },
    
    // More Religious Sites
    { name: 'Lingdum Monastery', category: 'religious', description: 'Zurmang Kagyud Monastery', rating: 4.6, visitors: '30K+' },
    { name: 'Ranka Monastery', category: 'religious', description: 'Nyingma Buddhist Monastery', rating: 4.5, visitors: '40K+' },
    { name: 'Chardham', category: 'religious', description: 'Replicas of Four Holy Dhams', rating: 4.7, visitors: '80K+' },
    { name: 'Pang Lhabsol Ground', category: 'religious', description: 'Traditional Festival Site', rating: 4.4, visitors: '25K+' },
    { name: 'Tendong Hill', category: 'religious', description: 'Sacred Lepcha Heritage', rating: 4.5, visitors: '20K+' },
    { name: 'Banjhakri Falls', category: 'religious', description: 'Shamanic Energy Site', rating: 4.6, visitors: '45K+' },
    { name: 'Chakung Monastery', category: 'religious', description: 'Ancient Nyingma Gompa', rating: 4.2, visitors: '15K+' },
    { name: 'Tashiding Hot Springs', category: 'religious', description: 'Sacred Healing Waters', rating: 4.4, visitors: '30K+' },
    
    // Cultural & Educational
    { name: 'Sikkim University', category: 'cultural', description: 'Central University', rating: 4.4, visitors: '40K+' },
    { name: 'Sikkim Manipal University', category: 'cultural', description: 'Technical Education Hub', rating: 4.3, visitors: '50K+' },
    { name: 'Namgyal Research Institute', category: 'cultural', description: 'Tibetan Studies Center', rating: 4.5, visitors: '25K+' },
    { name: 'Directorate of Handicrafts & Handloom', category: 'cultural', description: 'Traditional Crafts Institute', rating: 4.2, visitors: '20K+' },
    
    // Hill Stations & Scenic Places
    { name: 'Zuluk', category: 'nature', description: 'Ancient Silk Route Hamlet', rating: 4.7, visitors: '30K+' },
    { name: 'Nathang Valley', category: 'nature', description: 'High Altitude Valley', rating: 4.8, visitors: '25K+' },
    { name: 'Lachen', category: 'nature', description: 'Gateway to North Sikkim', rating: 4.7, visitors: '40K+' },
    { name: 'Dzongri', category: 'nature', description: 'High Altitude Trekking Base', rating: 4.6, visitors: '15K+' },
    
    // Archaeological Sites
    { name: 'Yuksom', category: 'historical', description: 'First Capital of Sikkim', rating: 4.5, visitors: '35K+' },
    { name: 'Tinkitam Rock Garden', category: 'historical', description: 'Ancient Stone Formations', rating: 4.2, visitors: '20K+' },
    { name: 'Tashiding Stone Carvings', category: 'historical', description: 'Ancient Buddhist Inscriptions', rating: 4.3, visitors: '15K+' },
    { name: 'Barapathing Ruins', category: 'historical', description: 'Pre-Buddhist Settlement', rating: 4.1, visitors: '10K+' },
    
    // More Cities & Towns
    { name: 'Mangan', category: 'cultural', description: 'North District Capital', rating: 4.2, visitors: '25K+' },
    { name: 'Jorethang', category: 'cultural', description: 'Commercial Township', rating: 4.0, visitors: '30K+' },
    { name: 'Singtam', category: 'cultural', description: 'Industrial Town', rating: 4.1, visitors: '28K+' },
    { name: 'Rangpo', category: 'cultural', description: 'Border Gateway Town', rating: 4.0, visitors: '35K+' },
    { name: 'Soreng', category: 'cultural', description: 'Western Sikkim Hub', rating: 4.2, visitors: '20K+' },
    { name: 'Gyalshing', category: 'cultural', description: 'West District Capital', rating: 4.1, visitors: '22K+' },
    { name: 'Pakyong', category: 'modern', description: 'Home to Sikkim Airport', rating: 4.3, visitors: '40K+' },
    { name: 'Dikchu', category: 'cultural', description: 'River Valley Settlement', rating: 4.0, visitors: '15K+' },
    
    // Unique Attractions
    { name: 'Zero Point, Yumthang', category: 'nature', description: 'Snow Desert Landscape', rating: 4.8, visitors: '45K+' },
    { name: 'Nathu La Pass', category: 'modern', description: 'Indo-China Border Pass', rating: 4.5, visitors: '60K+' },
    { name: 'Chungthang', category: 'nature', description: 'River Confluence Town', rating: 4.3, visitors: '15K+' },
    { name: 'Zemu Glacier', category: 'nature', description: 'Largest Glacier in Eastern Himalayas', rating: 4.7, visitors: '5K+' },
    { name: 'Temi Tea Garden', category: 'cultural', description: 'Organic Tea Estate', rating: 4.5, visitors: '35K+' },
    { name: 'Gnathang Valley', category: 'nature', description: 'High Altitude Valley', rating: 4.6, visitors: '20K+' },
    { name: 'Aritar', category: 'cultural', description: 'Cultural Heritage Village', rating: 4.4, visitors: '18K+' },
    { name: 'Kanchenjunga Falls', category: 'nature', description: 'Multi-tiered Waterfall', rating: 4.6, visitors: '40K+' },
    
    // Modern Developments
    { name: 'Pakyong Airport', category: 'modern', description: 'Engineering Marvel Airport', rating: 4.5, visitors: '100K+' },
    { name: 'Sikkim Flower Show Complex', category: 'modern', description: 'International Exhibition Center', rating: 4.3, visitors: '40K+' },
    { name: 'Banjhakri Eco Park', category: 'modern', description: 'Energy Park & Gardens', rating: 4.4, visitors: '55K+' },
    { name: 'Ropeway Gangtok', category: 'modern', description: 'Aerial Transit System', rating: 4.6, visitors: '90K+' },
    
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
    'gangtok': [
      { name: 'Gangtok', category: 'cultural', description: 'Capital City', rating: 4.7, visitors: '500K+', distance: '0 km' },
      { name: 'Rumtek Monastery', category: 'historical', description: 'Sacred Buddhist Monastery', rating: 4.9, visitors: '200K+', distance: '24 km' },
      { name: 'MG Marg, Gangtok', category: 'cultural', description: 'Pedestrian-friendly Shopping Street', rating: 4.6, visitors: '400K+', distance: '1 km' },
      { name: 'Enchey Monastery', category: 'historical', description: 'Sacred 200-year-old Monastery', rating: 4.7, visitors: '150K+', distance: '3 km' },
      { name: 'Namgyal Institute of Tibetology', category: 'historical', description: 'Tibetan Research Center', rating: 4.3, visitors: '45K+', distance: '2 km' },
      { name: 'Tsomgo Lake', category: 'religious', description: 'Sacred Alpine Glacial Lake', rating: 4.8, visitors: '300K+', distance: '38 km' }
    ],
    'pelling': [
      { name: 'Pelling', category: 'cultural', description: 'Scenic Mountain Town', rating: 4.6, visitors: '180K+', distance: '0 km' },
      { name: 'Pemayangtse Monastery', category: 'historical', description: 'Ancient Nyingma Order Gompa', rating: 4.6, visitors: '100K+', distance: '2.5 km' },
      { name: 'Rabdentse Ruins', category: 'historical', description: 'Ancient Capital Remains', rating: 4.5, visitors: '40K+', distance: '3 km' },
      { name: 'Khecheopalri Lake', category: 'religious', description: 'Wish-fulfilling Sacred Lake', rating: 4.8, visitors: '80K+', distance: '27 km' },
      { name: 'Kanchenjunga Falls', category: 'nature', description: 'Multi-tiered Waterfall', rating: 4.6, visitors: '40K+', distance: '15 km' },
      { name: 'Singshore Bridge', category: 'modern', description: 'Second Highest Gorge Bridge in Asia', rating: 4.4, visitors: '55K+', distance: '8 km' }
    ],
    'lachung': [
      { name: 'Lachung', category: 'cultural', description: 'Mountain Village', rating: 4.8, visitors: '90K+', distance: '0 km' },
      { name: 'Yumthang Valley', category: 'nature', description: 'Valley of Flowers', rating: 4.8, visitors: '100K+', distance: '25 km' },
      { name: 'Zero Point', category: 'nature', description: 'Snow Desert Landscape', rating: 4.8, visitors: '45K+', distance: '45 km' },
      { name: 'Bhim Nala Falls', category: 'nature', description: 'Pristine Waterfall', rating: 4.5, visitors: '30K+', distance: '10 km' },
      { name: 'Lachung Monastery', category: 'religious', description: 'Ancient Buddhist Temple', rating: 4.6, visitors: '40K+', distance: '1.5 km' },
      { name: 'Shingba Rhododendron Sanctuary', category: 'nature', description: 'Rare Alpine Flowers', rating: 4.5, visitors: '18K+', distance: '20 km' }
    ],
    'namchi': [
      { name: 'Namchi', category: 'cultural', description: 'Religious Tourism Hub', rating: 4.5, visitors: '150K+', distance: '0 km' },
      { name: 'Samdruptse', category: 'religious', description: 'Giant Buddha Statue', rating: 4.6, visitors: '120K+', distance: '6 km' },
      { name: 'Solophok Chardham', category: 'religious', description: 'Pilgrimage Complex', rating: 4.5, visitors: '100K+', distance: '3 km' },
      { name: 'Temi Tea Garden', category: 'cultural', description: 'Organic Tea Estate', rating: 4.5, visitors: '35K+', distance: '15 km' },
      { name: 'Tendong Hill', category: 'religious', description: 'Sacred Lepcha Heritage', rating: 4.5, visitors: '20K+', distance: '18 km' },
      { name: 'Ngadak Monastery', category: 'historical', description: 'Historic Buddhist Temple', rating: 4.3, visitors: '25K+', distance: '8 km' }
    ],
    'ravangla': [
      { name: 'Ravangla', category: 'cultural', description: 'Buddha Park Town', rating: 4.5, visitors: '120K+', distance: '0 km' },
      { name: 'Buddha Park', category: 'religious', description: 'Giant Buddha Statue & Gardens', rating: 4.7, visitors: '100K+', distance: '2 km' },
      { name: 'Ralong Monastery', category: 'religious', description: 'Kagyu School Monastery', rating: 4.5, visitors: '40K+', distance: '8 km' },
      { name: 'Maenam Wildlife Sanctuary', category: 'nature', description: 'Himalayan Flora & Fauna', rating: 4.4, visitors: '20K+', distance: '12 km' },
      { name: 'Bon Monastery', category: 'religious', description: 'Pre-Buddhist Tradition Temple', rating: 4.3, visitors: '15K+', distance: '10 km' },
      { name: 'Ralang Hot Springs', category: 'nature', description: 'Therapeutic Sulfur Springs', rating: 4.2, visitors: '25K+', distance: '15 km' }
    ],
    'yuksom': [
      { name: 'Yuksom', category: 'historical', description: 'First Capital of Sikkim', rating: 4.5, visitors: '35K+', distance: '0 km' },
      { name: 'Dubdi Monastery', category: 'historical', description: 'First Monastery of Sikkim', rating: 4.5, visitors: '40K+', distance: '3 km' },
      { name: 'Coronation Throne', category: 'historical', description: 'First Chogyal Coronation Site', rating: 4.2, visitors: '25K+', distance: '1 km' },
      { name: 'Kathok Wodsallin Monastery', category: 'religious', description: 'Ancient Buddhist Temple', rating: 4.3, visitors: '20K+', distance: '2 km' },
      { name: 'Khecheopalri Lake', category: 'religious', description: 'Wish-fulfilling Sacred Lake', rating: 4.8, visitors: '80K+', distance: '24 km' },
      { name: 'Dzongri Trek Base', category: 'adventure', description: 'Trekking Starting Point', rating: 4.6, visitors: '15K+', distance: '5 km' }
    ],
    'tsomgo': [
      { name: 'Tsomgo Lake', category: 'religious', description: 'Sacred Alpine Glacial Lake', rating: 4.8, visitors: '300K+', distance: '0 km' },
      { name: 'Baba Mandir', category: 'religious', description: 'Holy Shrine', rating: 4.6, visitors: '200K+', distance: '5 km' },
      { name: 'Nathu La Pass', category: 'modern', description: 'Indo-China Border Pass', rating: 4.5, visitors: '60K+', distance: '18 km' },
      { name: 'Kyongnosla Alpine Sanctuary', category: 'nature', description: 'Alpine Vegetation Preserve', rating: 4.3, visitors: '25K+', distance: '10 km' },
      { name: 'Hangu Lake', category: 'nature', description: 'Hidden Alpine Lake', rating: 4.4, visitors: '15K+', distance: '8 km' },
      { name: 'Zuluk', category: 'nature', description: 'Ancient Silk Route Hamlet', rating: 4.7, visitors: '30K+', distance: '32 km' }
    ],
    'lachen': [
      { name: 'Lachen', category: 'nature', description: 'Gateway to North Sikkim', rating: 4.7, visitors: '40K+', distance: '0 km' },
      { name: 'Gurudongmar Lake', category: 'religious', description: 'One of World\'s Highest Sacred Lakes', rating: 4.9, visitors: '50K+', distance: '55 km' },
      { name: 'Green Lake Trek Base', category: 'nature', description: 'High Altitude Alpine Lake Trek Start', rating: 4.7, visitors: '15K+', distance: '10 km' },
      { name: 'Chopta Valley', category: 'nature', description: 'Alpine Valley', rating: 4.6, visitors: '20K+', distance: '30 km' },
      { name: 'Lachen Monastery', category: 'religious', description: 'Ancient Buddhist Temple', rating: 4.4, visitors: '25K+', distance: '1 km' },
      { name: 'Thangu Valley', category: 'nature', description: 'High Altitude Valley', rating: 4.8, visitors: '18K+', distance: '30 km' }
    ],
    'yumthang': [
      { name: 'Yumthang Valley', category: 'nature', description: 'Valley of Flowers', rating: 4.8, visitors: '100K+', distance: '0 km' },
      { name: 'Zero Point', category: 'nature', description: 'Snow Desert Landscape', rating: 4.8, visitors: '45K+', distance: '23 km' },
      { name: 'Hot Springs', category: 'nature', description: 'Natural Thermal Springs', rating: 4.6, visitors: '60K+', distance: '1 km' },
      { name: 'Shingba Rhododendron Sanctuary', category: 'nature', description: 'Rare Alpine Flowers', rating: 4.5, visitors: '18K+', distance: '5 km' },
      { name: 'Lachung', category: 'cultural', description: 'Mountain Village', rating: 4.8, visitors: '90K+', distance: '25 km' },
      { name: 'Yumthang Chu River', category: 'nature', description: 'Pristine Mountain River', rating: 4.7, visitors: '80K+', distance: '0.5 km' }
    ],
    'zuluk': [
      { name: 'Zuluk', category: 'nature', description: 'Ancient Silk Route Hamlet', rating: 4.7, visitors: '30K+', distance: '0 km' },
      { name: 'Thambi View Point', category: 'nature', description: 'Sunrise View of Kanchenjunga', rating: 4.9, visitors: '25K+', distance: '5 km' },
      { name: 'Lungthung', category: 'nature', description: 'Silk Route Settlement', rating: 4.6, visitors: '20K+', distance: '12 km' },
      { name: 'Nathang Valley', category: 'nature', description: 'High Altitude Valley', rating: 4.8, visitors: '25K+', distance: '15 km' },
      { name: 'Elephant Lake', category: 'nature', description: 'Alpine Water Body', rating: 4.4, visitors: '15K+', distance: '18 km' },
      { name: 'Gnathang Valley', category: 'nature', description: 'High Altitude Valley', rating: 4.6, visitors: '20K+', distance: '22 km' }
    ],
    'nathula': [
      { name: 'Nathu La Pass', category: 'modern', description: 'Indo-China Border Pass', rating: 4.5, visitors: '60K+', distance: '0 km' },
      { name: 'Baba Mandir', category: 'religious', description: 'Holy Shrine', rating: 4.6, visitors: '200K+', distance: '13 km' },
      { name: 'Tsomgo Lake', category: 'religious', description: 'Sacred Alpine Glacial Lake', rating: 4.8, visitors: '300K+', distance: '18 km' },
      { name: 'Kupup Lake', category: 'nature', description: 'Elephant-shaped Lake', rating: 4.5, visitors: '30K+', distance: '5 km' },
      { name: 'Memencho Lake', category: 'nature', description: 'High Altitude Lake', rating: 4.4, visitors: '20K+', distance: '20 km' },
      { name: 'Zuluk', category: 'nature', description: 'Ancient Silk Route Hamlet', rating: 4.7, visitors: '30K+', distance: '32 km' }
    ]
};

const UttarPradeshTravelPortal = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

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
    const query = encodeURIComponent(locationName + ', Sikkim, India');
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
                <h1 className="text-xl font-bold text-gray-900">Sikkim Explorer</h1>
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
                Himalayan Paradise
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Sikkim
            </span>
            <br />
            <span className="text-white/90">Unveiled</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Embark on an extraordinary journey through India's most breathtaking Himalayan state, where natural beauty meets vibrant culture
          </p>

          {/* Premium Search Container */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-2xl p-3 shadow-2xl border border-gray-200/20">
              <div className="flex items-center">
                <div className="flex items-center flex-1">
                  <Search className="w-6 h-6 text-gray-400 ml-4" />
                  <input
                    type="text"
                    placeholder="Discover snow-capped mountains, Buddhist monasteries, alpine lakes..."
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
              Discover {filteredLocations.length} extraordinary places that showcase the finest of Sikkim's mountain landscapes and cultural wonders
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
                  <h3 className="text-2xl font-bold">Sikkim Explorer</h3>
                  <p className="text-amber-400 text-sm">Premium Travel Experience</p>
                </div>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Experience the extraordinary natural beauty and cultural richness of Sikkim through our carefully curated destinations and premium travel experiences.
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
                <li className="hover:text-white cursor-pointer transition-colors">🏔️ Himalayan Treks</li>
                <li className="hover:text-white cursor-pointer transition-colors">🙏 Buddhist Monasteries</li>
                <li className="hover:text-white cursor-pointer transition-colors">🌿 Alpine Meadows</li>
                <li className="hover:text-white cursor-pointer transition-colors">🎭 Cultural Immersions</li>
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
              © 2025 Sikkim Explorer. Crafted with ❤️ for India's Cultural Heritage.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UttarPradeshTravelPortal;