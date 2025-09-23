import React, { useState, useMemo } from 'react';
import { Search, Award, Globe, Calendar, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import LocationCard from './LocationCard';
import SearchSuggestions from './SearchSuggestions';

// 100+ Famous locations across India - organized by state/region
const locations = [
  // === NORTH INDIA ===
  
  // Delhi
  { name: 'Red Fort', category: 'historical', description: 'UNESCO World Heritage Mughal fortress', rating: 4.7, visitors: '2.5M+', state: 'Delhi' },
  { name: 'Qutub Minar', category: 'historical', description: 'UNESCO site with 73m tall victory tower', rating: 4.6, visitors: '2M+', state: 'Delhi' },
  { name: 'India Gate', category: 'historical', description: 'War memorial to 70,000 Indian soldiers', rating: 4.7, visitors: '4M+', state: 'Delhi' },
  { name: 'Humayun\'s Tomb', category: 'historical', description: 'UNESCO site, inspiration for Taj Mahal', rating: 4.8, visitors: '1.5M+', state: 'Delhi' },
  { name: 'Lotus Temple', category: 'religious', description: 'Iconic Bahá\'í House of Worship', rating: 4.6, visitors: '3M+', state: 'Delhi' },
  
  // Rajasthan
  { name: 'Amber Fort, Jaipur', category: 'historical', description: 'Majestic hilltop fort with Rajput architecture', rating: 4.7, visitors: '1.4M+', state: 'Rajasthan' },
  { name: 'Hawa Mahal, Jaipur', category: 'historical', description: 'Palace of Winds with 953 windows', rating: 4.5, visitors: '1.1M+', state: 'Rajasthan' },
  { name: 'City Palace, Udaipur', category: 'historical', description: 'Royal palace complex on Lake Pichola', rating: 4.6, visitors: '800K+', state: 'Rajasthan' },
  { name: 'Mehrangarh Fort, Jodhpur', category: 'historical', description: 'Massive 15th century fort on hilltop', rating: 4.8, visitors: '1M+', state: 'Rajasthan' },
  { name: 'Jaisalmer Fort', category: 'historical', description: 'Living fort city in the Thar Desert', rating: 4.7, visitors: '700K+', state: 'Rajasthan' },
  { name: 'Ranthambore National Park', category: 'nature', description: 'Famous tiger reserve with ancient ruins', rating: 4.6, visitors: '500K+', state: 'Rajasthan' },
  
  // Uttar Pradesh
  { name: 'Taj Mahal, Agra', category: 'historical', description: 'UNESCO World Heritage Site, Symbol of Love', rating: 4.9, visitors: '6M+', state: 'Uttar Pradesh' },
  { name: 'Varanasi Ghats', category: 'religious', description: 'Ancient spiritual riverfront steps', rating: 4.8, visitors: '3M+', state: 'Uttar Pradesh' },
  { name: 'Agra Fort', category: 'historical', description: 'UNESCO site, Mughal imperial fortress', rating: 4.7, visitors: '2M+', state: 'Uttar Pradesh' },
  { name: 'Fatehpur Sikri', category: 'historical', description: 'UNESCO site, abandoned Mughal city', rating: 4.6, visitors: '1M+', state: 'Uttar Pradesh' },
  { name: 'Prayagraj Kumbh Mela', category: 'religious', description: 'World\'s largest religious gathering', rating: 4.9, visitors: '100M+', state: 'Uttar Pradesh' },
  
  // Himachal Pradesh
  { name: 'Shimla', category: 'nature', description: 'Colonial hill station, former summer capital', rating: 4.5, visitors: '3M+', state: 'Himachal Pradesh' },
  { name: 'Manali', category: 'nature', description: 'Adventure destination in Himalayan valley', rating: 4.7, visitors: '3.5M+', state: 'Himachal Pradesh' },
  { name: 'Dharamshala', category: 'cultural', description: 'Home of Dalai Lama, Tibetan community', rating: 4.6, visitors: '1M+', state: 'Himachal Pradesh' },
  { name: 'Spiti Valley', category: 'adventure', description: 'High altitude desert mountain valley', rating: 4.8, visitors: '500K+', state: 'Himachal Pradesh' },
  
  // Uttarakhand
  { name: 'Rishikesh', category: 'religious', description: 'Yoga capital, adventure sports hub', rating: 4.7, visitors: '800K+', state: 'Uttarakhand' },
  { name: 'Haridwar', category: 'religious', description: 'Sacred city on the Ganges', rating: 4.6, visitors: '1.5M+', state: 'Uttarakhand' },
  { name: 'Valley of Flowers', category: 'nature', description: 'UNESCO World Heritage alpine valley', rating: 4.9, visitors: '300K+', state: 'Uttarakhand' },
  { name: 'Nainital', category: 'nature', description: 'Lake resort town in Kumaon Hills', rating: 4.5, visitors: '1M+', state: 'Uttarakhand' },
  { name: 'Badrinath Temple', category: 'religious', description: 'Sacred Hindu shrine in the Himalayas', rating: 4.8, visitors: '1.2M+', state: 'Uttarakhand' },
  
  // Jammu & Kashmir and Ladakh
  { name: 'Dal Lake, Srinagar', category: 'nature', description: 'Iconic lake with floating gardens and houseboats', rating: 4.8, visitors: '1.5M+', state: 'Jammu & Kashmir' },
  { name: 'Gulmarg', category: 'nature', description: 'Premier ski resort, world\'s highest golf course', rating: 4.7, visitors: '800K+', state: 'Jammu & Kashmir' },
  { name: 'Pangong Lake, Ladakh', category: 'nature', description: 'High altitude lake between India and Tibet', rating: 4.9, visitors: '600K+', state: 'Ladakh' },
  { name: 'Leh Palace', category: 'historical', description: 'Former royal palace overlooking Leh', rating: 4.6, visitors: '500K+', state: 'Ladakh' },
  { name: 'Magnetic Hill, Ladakh', category: 'nature', description: 'Optical illusion defying gravity', rating: 4.3, visitors: '400K+', state: 'Ladakh' },
  
  // Punjab
  { name: 'Golden Temple, Amritsar', category: 'religious', description: 'Holiest Sikh gurdwara with golden dome', rating: 4.9, visitors: '100K+ daily', state: 'Punjab' },
  { name: 'Wagah Border', category: 'cultural', description: 'Famous border ceremony between India and Pakistan', rating: 4.7, visitors: '2M+', state: 'Punjab' },
  { name: 'Jallianwala Bagh', category: 'historical', description: 'Historical site of 1919 massacre', rating: 4.5, visitors: '1M+', state: 'Punjab' },
  
  // Haryana
  { name: 'Kurukshetra', category: 'religious', description: 'Ancient battlefield of Mahabharata', rating: 4.6, visitors: '1M+', state: 'Haryana' },
  
  // === NORTHEAST INDIA ===
  
  // Sikkim
  { name: 'Tsomgo Lake', category: 'nature', description: 'Sacred glacial lake at 12,400 ft', rating: 4.8, visitors: '300K+', state: 'Sikkim' },
  { name: 'Nathula Pass', category: 'modern', description: 'Indo-China border mountain pass', rating: 4.5, visitors: '60K+', state: 'Sikkim' },
  { name: 'Rumtek Monastery', category: 'religious', description: 'Largest monastery in Sikkim', rating: 4.7, visitors: '200K+', state: 'Sikkim' },
  { name: 'Khangchendzonga National Park', category: 'nature', description: 'UNESCO site with world\'s 3rd highest peak', rating: 4.9, visitors: '50K+', state: 'Sikkim' },
  
  // Assam
  { name: 'Kaziranga National Park', category: 'nature', description: 'UNESCO site, home to two-thirds of world\'s one-horned rhinos', rating: 4.8, visitors: '200K+', state: 'Assam' },
  { name: 'Kamakhya Temple', category: 'religious', description: 'Ancient Shakti worship site', rating: 4.6, visitors: '2.5M+', state: 'Assam' },
  { name: 'Majuli', category: 'cultural', description: 'World\'s largest river island', rating: 4.7, visitors: '300K+', state: 'Assam' },
  
  // Meghalaya
  { name: 'Living Root Bridges', category: 'nature', description: 'Bio-engineering marvel by Khasi tribe', rating: 4.9, visitors: '200K+', state: 'Meghalaya' },
  { name: 'Cherrapunji', category: 'nature', description: 'One of the wettest places on Earth', rating: 4.7, visitors: '400K+', state: 'Meghalaya' },
  { name: 'Shillong', category: 'cultural', description: 'Scotland of the East hill station', rating: 4.6, visitors: '1M+', state: 'Meghalaya' },
  
  // Arunachal Pradesh
  { name: 'Tawang Monastery', category: 'religious', description: 'Largest Buddhist monastery in India', rating: 4.8, visitors: '100K+', state: 'Arunachal Pradesh' },
  
  // === EAST INDIA ===
  
  // West Bengal
  { name: 'Darjeeling', category: 'nature', description: 'Hill station famous for tea plantations', rating: 4.7, visitors: '1.5M+', state: 'West Bengal' },
  { name: 'Sundarbans', category: 'nature', description: 'UNESCO site, world\'s largest mangrove forest', rating: 4.8, visitors: '500K+', state: 'West Bengal' },
  { name: 'Victoria Memorial, Kolkata', category: 'historical', description: 'Magnificent marble museum', rating: 4.6, visitors: '2M+', state: 'West Bengal' },
  { name: 'Howrah Bridge, Kolkata', category: 'modern', description: 'Iconic cantilever bridge over Hooghly River', rating: 4.5, visitors: 'Millions', state: 'West Bengal' },
  
  // Odisha
  { name: 'Konark Sun Temple', category: 'religious', description: 'UNESCO site, massive stone chariot temple', rating: 4.8, visitors: '2M+', state: 'Odisha' },
  { name: 'Jagannath Temple, Puri', category: 'religious', description: 'Ancient temple famous for Rath Yatra', rating: 4.9, visitors: '5M+', state: 'Odisha' },
  { name: 'Chilika Lake', category: 'nature', description: 'Asia\'s largest brackish water lagoon', rating: 4.7, visitors: '1M+', state: 'Odisha' },
  
  // Bihar
  { name: 'Mahabodhi Temple, Bodh Gaya', category: 'religious', description: 'UNESCO site, Buddha\'s enlightenment site', rating: 4.8, visitors: '1M+', state: 'Bihar' },
  { name: 'Nalanda University Ruins', category: 'historical', description: 'UNESCO site, ancient Buddhist university', rating: 4.7, visitors: '400K+', state: 'Bihar' },
  
  // Jharkhand
  { name: 'Hundru Falls', category: 'nature', description: '98-foot waterfall on Subarnarekha River', rating: 4.5, visitors: '500K+', state: 'Jharkhand' },
  
  // === CENTRAL INDIA ===
  
  // Madhya Pradesh
  { name: 'Khajuraho Group of Monuments', category: 'historical', description: 'UNESCO site, famous for Nagara-style temples', rating: 4.7, visitors: '1M+', state: 'Madhya Pradesh' },
  { name: 'Sanchi Stupa', category: 'historical', description: 'UNESCO site, ancient Buddhist monuments', rating: 4.6, visitors: '500K+', state: 'Madhya Pradesh' },
  { name: 'Bandhavgarh National Park', category: 'nature', description: 'Highest density of Bengal tigers in India', rating: 4.8, visitors: '150K+', state: 'Madhya Pradesh' },
  { name: 'Kanha National Park', category: 'nature', description: 'Inspiration for Rudyard Kipling\'s Jungle Book', rating: 4.8, visitors: '200K+', state: 'Madhya Pradesh' },
  
  // Chhattisgarh
  { name: 'Chitrakote Falls', category: 'nature', description: 'India\'s Niagara Falls, horseshoe-shaped waterfall', rating: 4.6, visitors: '300K+', state: 'Chhattisgarh' },
  
  // === WESTERN INDIA ===
  
  // Maharashtra
  { name: 'Gateway of India, Mumbai', category: 'historical', description: 'Iconic monument overlooking Arabian Sea', rating: 4.7, visitors: '10M+', state: 'Maharashtra' },
  { name: 'Ajanta & Ellora Caves', category: 'historical', description: 'UNESCO site, ancient rock-cut temples', rating: 4.9, visitors: '1.2M+', state: 'Maharashtra' },
  { name: 'Elephanta Caves', category: 'historical', description: 'UNESCO site, ancient cave temples', rating: 4.7, visitors: '1M+', state: 'Maharashtra' },
  { name: 'Lonavala', category: 'nature', description: 'Hill station with waterfalls and lakes', rating: 4.5, visitors: '2M+', state: 'Maharashtra' },
  
  // Gujarat
  { name: 'Statue of Unity', category: 'modern', description: 'World\'s tallest statue at 182 meters', rating: 4.6, visitors: '2.9M+', state: 'Gujarat' },
  { name: 'Sabarmati Ashram', category: 'historical', description: 'Gandhi\'s residence during freedom struggle', rating: 4.7, visitors: '700K+', state: 'Gujarat' },
  { name: 'Rann of Kutch', category: 'nature', description: 'White salt desert and cultural festival', rating: 4.8, visitors: '500K+', state: 'Gujarat' },
  { name: 'Gir National Park', category: 'nature', description: 'Last home of Asiatic lions', rating: 4.7, visitors: '150K+', state: 'Gujarat' },
  
  // Goa
  { name: 'Beaches of Goa', category: 'nature', description: 'Famous beach destination with golden sands', rating: 4.8, visitors: '7M+', state: 'Goa' },
  { name: 'Basilica of Bom Jesus', category: 'religious', description: 'UNESCO site, holds remains of St. Francis Xavier', rating: 4.7, visitors: '1M+', state: 'Goa' },
  { name: 'Fort Aguada', category: 'historical', description: '17th century Portuguese fort', rating: 4.5, visitors: '2M+', state: 'Goa' },
  { name: 'Dudhsagar Falls', category: 'nature', description: 'One of India\'s tallest waterfalls', rating: 4.7, visitors: '1M+', state: 'Goa' },
  
  // === SOUTH INDIA ===
  
  // Karnataka
  { name: 'Hampi', category: 'historical', description: 'UNESCO site, ruins of Vijayanagara Empire', rating: 4.9, visitors: '600K+', state: 'Karnataka' },
  { name: 'Mysore Palace', category: 'historical', description: 'Former royal residence, architectural marvel', rating: 4.8, visitors: '3.5M+', state: 'Karnataka' },
  { name: 'Jog Falls', category: 'nature', description: 'Second highest plunge waterfall in India', rating: 4.7, visitors: '1M+', state: 'Karnataka' },
  { name: 'Gol Gumbaz, Bijapur', category: 'historical', description: 'Second largest dome in the world', rating: 4.6, visitors: '500K+', state: 'Karnataka' },
  
  // Kerala
  { name: 'Kerala Backwaters', category: 'nature', description: 'Network of lagoons, lakes and canals', rating: 4.9, visitors: '1M+', state: 'Kerala' },
  { name: 'Munnar', category: 'nature', description: 'Hill station with tea plantations', rating: 4.8, visitors: '800K+', state: 'Kerala' },
  { name: 'Fort Kochi', category: 'historical', description: 'Historic district with colonial influence', rating: 4.7, visitors: '1M+', state: 'Kerala' },
  { name: 'Periyar Wildlife Sanctuary', category: 'nature', description: 'Famous tiger and elephant reserve', rating: 4.7, visitors: '500K+', state: 'Kerala' },
  
  // Tamil Nadu
  { name: 'Meenakshi Amman Temple, Madurai', category: 'religious', description: 'Ancient temple with 14 gateway towers', rating: 4.8, visitors: '15K+ daily', state: 'Tamil Nadu' },
  { name: 'Shore Temple, Mahabalipuram', category: 'historical', description: 'UNESCO site, ancient sea-facing shrine', rating: 4.7, visitors: '2M+', state: 'Tamil Nadu' },
  { name: 'Brihadeeswarar Temple, Thanjavur', category: 'religious', description: 'UNESCO site, thousand-year-old temple', rating: 4.9, visitors: '2M+', state: 'Tamil Nadu' },
  { name: 'Ooty', category: 'nature', description: 'Queen of hill stations in Nilgiri mountains', rating: 4.6, visitors: '2.5M+', state: 'Tamil Nadu' },
  
  // Andhra Pradesh & Telangana
  { name: 'Tirupati Balaji Temple', category: 'religious', description: 'World\'s richest temple, sacred pilgrimage site', rating: 4.9, visitors: '50K+ daily', state: 'Andhra Pradesh' },
  { name: 'Charminar, Hyderabad', category: 'historical', description: 'Iconic monument and mosque', rating: 4.5, visitors: '3M+', state: 'Telangana' },
  { name: 'Golconda Fort, Hyderabad', category: 'historical', description: 'Medieval fortress known for acoustics', rating: 4.6, visitors: '1.5M+', state: 'Telangana' },
  
  // === UNION TERRITORIES ===
  
  // Andaman & Nicobar Islands
  { name: 'Radhanagar Beach', category: 'nature', description: 'Asia\'s best beach with white sands', rating: 4.9, visitors: '500K+', state: 'Andaman & Nicobar' },
  { name: 'Cellular Jail', category: 'historical', description: 'Colonial prison for political prisoners', rating: 4.8, visitors: '300K+', state: 'Andaman & Nicobar' },
  
  // Puducherry
  { name: 'Auroville', category: 'cultural', description: 'Experimental township with Matrimandir', rating: 4.7, visitors: '1M+', state: 'Puducherry' },
  { name: 'French Quarter', category: 'cultural', description: 'Colonial heritage area with architecture', rating: 4.6, visitors: '1.5M+', state: 'Puducherry' },
  
  // Lakshadweep
  { name: 'Agatti Island', category: 'nature', description: 'Coral atolls with pristine beaches', rating: 4.9, visitors: '10K+', state: 'Lakshadweep' }
];

// Nearby locations mapping - organized by major cities across India
const nearbyLocationsMap = {
    'delhi': [
      { name: 'Red Fort', category: 'historical', description: 'UNESCO World Heritage Mughal fortress', rating: 4.7, visitors: '2.5M+', distance: '0 km', state: 'Delhi' },
      { name: 'Qutub Minar', category: 'historical', description: 'UNESCO site with 73m tall victory tower', rating: 4.6, visitors: '2M+', distance: '15 km', state: 'Delhi' },
      { name: 'India Gate', category: 'historical', description: 'War memorial to 70,000 Indian soldiers', rating: 4.7, visitors: '4M+', distance: '5 km', state: 'Delhi' },
      { name: 'Humayun\'s Tomb', category: 'historical', description: 'UNESCO site, inspiration for Taj Mahal', rating: 4.8, visitors: '1.5M+', distance: '7 km', state: 'Delhi' },
      { name: 'Lotus Temple', category: 'religious', description: 'Iconic Bahá\'í House of Worship', rating: 4.6, visitors: '3M+', distance: '12 km', state: 'Delhi' },
      { name: 'Akshardham Temple', category: 'religious', description: 'Elaborate Hindu temple complex', rating: 4.8, visitors: '2M+', distance: '10 km', state: 'Delhi' }
    ],
    
    'mumbai': [
      { name: 'Gateway of India', category: 'historical', description: 'Iconic monument overlooking Arabian Sea', rating: 4.7, visitors: '10M+', distance: '0 km', state: 'Maharashtra' },
      { name: 'Marine Drive', category: 'modern', description: 'Iconic seafront promenade', rating: 4.8, visitors: '8M+', distance: '3 km', state: 'Maharashtra' },
      { name: 'Elephanta Caves', category: 'historical', description: 'UNESCO site, ancient cave temples', rating: 4.7, visitors: '1M+', distance: '10 km boat ride', state: 'Maharashtra' },
      { name: 'Chhatrapati Shivaji Terminus', category: 'historical', description: 'UNESCO site, Victorian Gothic railway station', rating: 4.6, visitors: 'Millions', distance: '5 km', state: 'Maharashtra' },
      { name: 'Siddhivinayak Temple', category: 'religious', description: 'Famous Hindu temple', rating: 4.8, visitors: '25K+ daily', distance: '8 km', state: 'Maharashtra' },
      { name: 'Film City', category: 'modern', description: 'Bollywood film studios', rating: 4.3, visitors: '200K+', distance: '25 km', state: 'Maharashtra' }
    ],
    
    'jaipur': [
      { name: 'Amber Fort', category: 'historical', description: 'Majestic hilltop fort with Rajput architecture', rating: 4.7, visitors: '1.4M+', distance: '11 km', state: 'Rajasthan' },
      { name: 'Hawa Mahal', category: 'historical', description: 'Palace of Winds with 953 windows', rating: 4.5, visitors: '1.1M+', distance: '0 km', state: 'Rajasthan' },
      { name: 'City Palace, Jaipur', category: 'historical', description: 'Royal residence with museums', rating: 4.6, visitors: '1M+', distance: '1 km', state: 'Rajasthan' },
      { name: 'Jantar Mantar', category: 'historical', description: 'UNESCO site, astronomical observation site', rating: 4.5, visitors: '700K+', distance: '2 km', state: 'Rajasthan' },
      { name: 'Albert Hall Museum', category: 'cultural', description: 'Oldest museum in Rajasthan', rating: 4.4, visitors: '500K+', distance: '5 km', state: 'Rajasthan' },
      { name: 'Jal Mahal', category: 'historical', description: 'Palace in Man Sagar Lake', rating: 4.5, visitors: '1M+', distance: '7 km', state: 'Rajasthan' }
    ],
    
    'agra': [
      { name: 'Taj Mahal', category: 'historical', description: 'UNESCO World Heritage Site, Symbol of Love', rating: 4.9, visitors: '6M+', distance: '0 km', state: 'Uttar Pradesh' },
      { name: 'Agra Fort', category: 'historical', description: 'UNESCO site, Mughal imperial fortress', rating: 4.7, visitors: '2M+', distance: '2.5 km', state: 'Uttar Pradesh' },
      { name: 'Fatehpur Sikri', category: 'historical', description: 'UNESCO site, abandoned Mughal city', rating: 4.6, visitors: '1M+', distance: '37 km', state: 'Uttar Pradesh' },
      { name: 'Mehtab Bagh', category: 'historical', description: 'Moonlight Garden opposite Taj Mahal', rating: 4.5, visitors: '400K+', distance: '1.2 km', state: 'Uttar Pradesh' },
      { name: 'Itimad-ud-Daulah', category: 'historical', description: 'Baby Taj, Marble tomb', rating: 4.4, visitors: '300K+', distance: '6 km', state: 'Uttar Pradesh' },
      { name: 'Sikandra', category: 'historical', description: 'Akbar\'s Tomb', rating: 4.3, visitors: '250K+', distance: '13 km', state: 'Uttar Pradesh' }
    ],
    
    'varanasi': [
      { name: 'Varanasi Ghats', category: 'religious', description: 'Ancient spiritual riverfront steps', rating: 4.8, visitors: '3M+', distance: '0 km', state: 'Uttar Pradesh' },
      { name: 'Kashi Vishwanath Temple', category: 'religious', description: 'Sacred Shiva temple', rating: 4.9, visitors: '1M+', distance: '1 km', state: 'Uttar Pradesh' },
      { name: 'Sarnath', category: 'religious', description: 'Buddha\'s first sermon site', rating: 4.7, visitors: '800K+', distance: '10 km', state: 'Uttar Pradesh' },
      { name: 'Ramnagar Fort', category: 'historical', description: '18th century fort and museum', rating: 4.4, visitors: '300K+', distance: '14 km', state: 'Uttar Pradesh' },
      { name: 'Banaras Hindu University', category: 'cultural', description: 'Prestigious university campus', rating: 4.3, visitors: '500K+', distance: '6 km', state: 'Uttar Pradesh' },
      { name: 'Assi Ghat', category: 'religious', description: 'Southernmost ghat in Varanasi', rating: 4.5, visitors: '1M+', distance: '5 km', state: 'Uttar Pradesh' }
    ],
    
    'goa': [
      { name: 'Baga Beach', category: 'nature', description: 'Popular beach with water sports', rating: 4.5, visitors: '2M+', distance: '0 km', state: 'Goa' },
      { name: 'Fort Aguada', category: 'historical', description: '17th century Portuguese fort', rating: 4.5, visitors: '2M+', distance: '9 km', state: 'Goa' },
      { name: 'Basilica of Bom Jesus', category: 'religious', description: 'UNESCO site with St. Francis Xavier\'s remains', rating: 4.7, visitors: '1M+', distance: '15 km', state: 'Goa' },
      { name: 'Dudhsagar Falls', category: 'nature', description: 'Four-tiered waterfall', rating: 4.7, visitors: '1M+', distance: '60 km', state: 'Goa' },
      { name: 'Anjuna Flea Market', category: 'cultural', description: 'Famous hippie-era market', rating: 4.3, visitors: '500K+', distance: '8 km', state: 'Goa' },
      { name: 'Chapora Fort', category: 'historical', description: 'Scenic ruined fort', rating: 4.4, visitors: '800K+', distance: '10 km', state: 'Goa' }
    ],
    
    'kolkata': [
      { name: 'Victoria Memorial', category: 'historical', description: 'Magnificent marble museum', rating: 4.6, visitors: '2M+', distance: '0 km', state: 'West Bengal' },
      { name: 'Howrah Bridge', category: 'modern', description: 'Iconic cantilever bridge', rating: 4.5, visitors: 'Millions', distance: '5 km', state: 'West Bengal' },
      { name: 'Dakshineswar Kali Temple', category: 'religious', description: 'Hindu temple on Hooghly river', rating: 4.7, visitors: '1.5M+', distance: '15 km', state: 'West Bengal' },
      { name: 'Science City', category: 'modern', description: 'Largest science center in India', rating: 4.4, visitors: '1M+', distance: '10 km', state: 'West Bengal' },
      { name: 'Sunderbans National Park', category: 'nature', description: 'UNESCO site, mangrove forests', rating: 4.8, visitors: '500K+', distance: '110 km', state: 'West Bengal' },
      { name: 'Marble Palace', category: 'historical', description: '19th century mansion with art collection', rating: 4.3, visitors: '200K+', distance: '8 km', state: 'West Bengal' }
    ],
    
    'chennai': [
      { name: 'Marina Beach', category: 'nature', description: 'Second longest urban beach in world', rating: 4.5, visitors: '30K+ daily', distance: '0 km', state: 'Tamil Nadu' },
      { name: 'Kapaleeshwarar Temple', category: 'religious', description: 'Ancient Shiva temple with gopuram', rating: 4.7, visitors: '1M+', distance: '7 km', state: 'Tamil Nadu' },
      { name: 'Fort St. George', category: 'historical', description: 'First English fortress in India', rating: 4.4, visitors: '500K+', distance: '5 km', state: 'Tamil Nadu' },
      { name: 'Mahabalipuram', category: 'historical', description: 'UNESCO site with shore temple', rating: 4.8, visitors: '2M+', distance: '55 km', state: 'Tamil Nadu' },
      { name: 'Government Museum', category: 'cultural', description: 'Second oldest museum in India', rating: 4.3, visitors: '400K+', distance: '8 km', state: 'Tamil Nadu' },
      { name: 'Elliot\'s Beach', category: 'nature', description: 'Quieter alternative to Marina', rating: 4.4, visitors: '500K+', distance: '12 km', state: 'Tamil Nadu' }
    ],
    
    'bengaluru': [
      { name: 'Lalbagh Botanical Garden', category: 'nature', description: '240-acre garden with glass house', rating: 4.5, visitors: '2M+', distance: '0 km', state: 'Karnataka' },
      { name: 'Bangalore Palace', category: 'historical', description: 'Tudor-style royal residence', rating: 4.3, visitors: '500K+', distance: '8 km', state: 'Karnataka' },
      { name: 'ISKCON Temple', category: 'religious', description: 'Modern Hindu temple complex', rating: 4.7, visitors: '1M+', distance: '12 km', state: 'Karnataka' },
      { name: 'Cubbon Park', category: 'nature', description: '300-acre public park', rating: 4.4, visitors: '1.5M+', distance: '5 km', state: 'Karnataka' },
      { name: 'Bannerghatta National Park', category: 'nature', description: 'Wildlife safari and butterfly park', rating: 4.3, visitors: '1.2M+', distance: '22 km', state: 'Karnataka' },
      { name: 'Wonderla', category: 'modern', description: 'Amusement park with rides', rating: 4.6, visitors: '1M+', distance: '28 km', state: 'Karnataka' }
    ],
    
    'hyderabad': [
      { name: 'Charminar', category: 'historical', description: 'Iconic monument and mosque', rating: 4.5, visitors: '3M+', distance: '0 km', state: 'Telangana' },
      { name: 'Golconda Fort', category: 'historical', description: 'Medieval fortress known for acoustics', rating: 4.6, visitors: '1.5M+', distance: '11 km', state: 'Telangana' },
      { name: 'Ramoji Film City', category: 'modern', description: 'World\'s largest film studio complex', rating: 4.4, visitors: '1.5M+', distance: '25 km', state: 'Telangana' },
      { name: 'Hussain Sagar Lake', category: 'nature', description: 'Heart-shaped lake with Buddha statue', rating: 4.5, visitors: '2M+', distance: '7 km', state: 'Telangana' },
      { name: 'Salar Jung Museum', category: 'cultural', description: 'One of India\'s largest museums', rating: 4.7, visitors: '1M+', distance: '2 km', state: 'Telangana' },
      { name: 'Birla Mandir', category: 'religious', description: 'White marble Hindu temple', rating: 4.6, visitors: '800K+', distance: '8 km', state: 'Telangana' }
    ]
};

const categories = [
  { id: 'all', name: 'All India', count: locations.length },
  { id: 'historical', name: 'Historical Sites', count: locations.filter(loc => loc.category === 'historical').length },
  { id: 'religious', name: 'Religious Places', count: locations.filter(loc => loc.category === 'religious').length },
  { id: 'nature', name: 'Nature & Wildlife', count: locations.filter(loc => loc.category === 'nature').length },
  { id: 'cultural', name: 'Cultural Experiences', count: locations.filter(loc => loc.category === 'cultural').length },
  { id: 'modern', name: 'Modern Attractions', count: locations.filter(loc => loc.category === 'modern').length },
  { id: 'adventure', name: 'Adventure', count: locations.filter(loc => loc.category === 'adventure').length }
];

// Indian regions for filtering
const regions = [
  { id: 'all', name: 'All India' },
  { id: 'north', name: 'North India', states: ['Delhi', 'Uttar Pradesh', 'Rajasthan', 'Himachal Pradesh', 'Uttarakhand', 'Jammu & Kashmir', 'Punjab', 'Haryana', 'Ladakh'] },
  { id: 'south', name: 'South India', states: ['Karnataka', 'Kerala', 'Tamil Nadu', 'Andhra Pradesh', 'Telangana', 'Puducherry'] },
  { id: 'east', name: 'East India', states: ['West Bengal', 'Bihar', 'Odisha', 'Jharkhand'] },
  { id: 'west', name: 'West India', states: ['Maharashtra', 'Gujarat', 'Goa'] },
  { id: 'northeast', name: 'North East', states: ['Sikkim', 'Assam', 'Meghalaya', 'Arunachal Pradesh', 'Manipur', 'Mizoram', 'Nagaland', 'Tripura'] },
  { id: 'central', name: 'Central India', states: ['Madhya Pradesh', 'Chhattisgarh'] },
  { id: 'islands', name: 'Island Territories', states: ['Andaman & Nicobar', 'Lakshadweep'] }
];

const IndiaExplorerPortal = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Filter locations based on selected category and region
  const filteredLocations = useMemo(() => {
    return locations.filter(location => {
      // Filter by category
      const categoryMatch = selectedCategory === 'all' || location.category === selectedCategory;
      
      // Filter by region
      const selectedRegionObj = regions.find(r => r.id === selectedRegion);
      const regionMatch = selectedRegion === 'all' || 
        (selectedRegionObj && selectedRegionObj.states && selectedRegionObj.states.includes(location.state));
      
      return categoryMatch && regionMatch;
    });
  }, [selectedCategory, selectedRegion]);

  // Filter suggestions based on search query
  const filteredSuggestions = useMemo(() => {
    if (!searchQuery) return [];
    
    const normalizedQuery = searchQuery.toLowerCase();
    
    // Check if the query matches any location in nearby locations map
    for (const [key, nearbyPlaces] of Object.entries(nearbyLocationsMap)) {
      if (key.toLowerCase().includes(normalizedQuery)) {
        return nearbyPlaces.map(place => ({
          ...place,
          distance: place.distance
        }));
      }
    }
    
    // Otherwise return direct location matches
    return locations
      .filter(location => 
        location.name.toLowerCase().includes(normalizedQuery) || 
        location.description.toLowerCase().includes(normalizedQuery) ||
        location.category.toLowerCase().includes(normalizedQuery) ||
        location.state.toLowerCase().includes(normalizedQuery)
      )
      .slice(0, 8); // Limit to top 8 matches
  }, [searchQuery]);

  const handleLocationClick = (locationName) => {
    const locationObj = locations.find(loc => loc.name === locationName);
    const state = locationObj ? locationObj.state : 'India';
    const query = encodeURIComponent(locationName + ', ' + state + ', India');
    window.open(`https://www.google.com/maps/search/${query}`, '_blank');
  };

  const handleSuggestionClick = (suggestion) => {
    handleLocationClick(suggestion.name);
    setShowSuggestions(false);
  };

  return (
    <div className="bg-white">
      {/* Navigation Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">India Explorer</h1>
                <p className="text-amber-500 text-xs">Incredible Land of Diversity</p>
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
            <div className="md:hidden">
              <button className="p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Premium Hero Header */}
      <div className="relative bg-slate-900 min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800/90 to-slate-900/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,158,0,0.1),transparent_70%)]"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-20 text-center">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Globe className="w-6 h-6 text-amber-400" />
            <span className="text-amber-300 font-medium flex items-center">
              <Award className="w-5 h-5 mr-2" />
              Incredible Land of Diversity
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              India
            </span>
            <br />
            <span className="text-white/90">Unveiled</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Embark on an extraordinary journey through India's vibrant tapestry of cultures, landscapes, and historical wonders
          </p>
          
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl flex items-center p-1 pl-2">
                <div className="flex-1 flex items-center">
                  <Search className="w-6 h-6 text-gray-400 ml-4" />
                  <input
                    type="text"
                    placeholder="Discover temples, forts, beaches, mountains, cultural treasures..."
                    className="flex-1 px-4 py-4 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none text-lg"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowSuggestions(e.target.value.length > 0);
                    }}
                    onFocus={() => setShowSuggestions(searchQuery.length > 0)}
                  />
                </div>
                <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-amber-500/30 hover:shadow-lg">
                  Explore
                </button>
              </div>
              
              <SearchSuggestions 
                showSuggestions={showSuggestions} 
                filteredSuggestions={filteredSuggestions}
                onSuggestionClick={handleSuggestionClick}
                searchQuery={searchQuery}
              />
            </div>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400">29</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">States</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400">8</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Union Territories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400">5000+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Years of Heritage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400">∞</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Cultural Experiences</div>
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

      {/* Regional Filters */}
      <div className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Explore by Region</h3>
            <p className="text-gray-600">Discover India's diverse geographical regions</p>
          </div>
          <div className="flex overflow-x-auto space-x-4 pb-4 justify-center">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`flex-shrink-0 px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                  selectedRegion === region.id
                    ? 'bg-amber-500 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-300 hover:bg-amber-50'
                }`}
              >
                {region.name}
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
              {selectedCategory === 'all' ? 'Top Indian Destinations' : categories.find(c => c.id === selectedCategory)?.name}
              {selectedRegion !== 'all' ? ` in ${regions.find(r => r.id === selectedRegion)?.name}` : ''}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover {filteredLocations.length} extraordinary places that showcase the finest of India's rich cultural heritage and natural wonders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredLocations.map((location, index) => (
              <LocationCard
                key={index}
                location={{...location, state: location.state}}
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
                  <h3 className="text-2xl font-bold">India Explorer</h3>
                  <p className="text-amber-400 text-sm">Premium Travel Experience</p>
                </div>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Experience the extraordinary natural beauty, ancient history, and cultural richness of India through our carefully curated destinations and premium travel experiences.
              </p>
              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-400">{locations.length}+</div>
                  <div className="text-xs text-gray-500 uppercase">Destinations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-400">37</div>
                  <div className="text-xs text-gray-500 uppercase">States & UTs</div>
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
                <li className="hover:text-white cursor-pointer transition-colors">🏔️ Mountain Adventures</li>
                <li className="hover:text-white cursor-pointer transition-colors">🏛️ Heritage Tours</li>
                <li className="hover:text-white cursor-pointer transition-colors">🌊 Beach Getaways</li>
                <li className="hover:text-white cursor-pointer transition-colors">🍛 Culinary Journeys</li>
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
              © 2025 India Explorer. Crafted with ❤️ for India's Rich Heritage.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndiaExplorerPortal;