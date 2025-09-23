import React, { useState } from 'react';
import { Users, MapPin, Calendar, Utensils, Palette, Heart, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const Culture = () => {
  const [selectedCulture, setSelectedCulture] = useState('all');

  const cultures = [
    // 28 States of India - Each State, Each Culture
    {
      name: 'Andhra Pradesh',
      region: 'South India',
      description: 'Rich Telugu heritage with classical dance, music, and renowned cuisine',
      language: 'Telugu',
      cuisine: ['Hyderabadi Biryani', 'Pesarattu', 'Gongura Pachadi', 'Pootharekulu'],
      festivals: ['Ugadi', 'Sankranti', 'Bathukamma', 'Ganesh Chaturthi'],
      arts: ['Kuchipudi Dance', 'Kalamkari Painting', 'Carnatic Music', 'Burrakatha Storytelling'],
      traditions: ['Rangoli Making', 'Classical Dance', 'Temple Worship', 'Handloom Weaving'],
      clothing: ['Kanjeevaram Sarees', 'Dhoti', 'Langa Voni', 'Pancha Kattu'],
      icon: '🏮',
      color: 'from-amber-500 to-red-600',
      category: 'regional'
    },
    {
      name: 'Arunachal Pradesh',
      region: 'Northeast India',
      description: 'Diverse tribal culture with unique customs, festivals, and breathtaking landscapes',
      language: 'Nyishi, Adi, Galo, Apatani (and many more)',
      cuisine: ['Bamboo Shoot Dishes', 'Apong (Rice Beer)', 'Lukter', 'Pika Pila'],
      festivals: ['Losar', 'Solung', 'Nyokum', 'Dree'],
      arts: ['Tribal Dances', 'Wood Carving', 'Bamboo Crafts', 'Thangka Painting'],
      traditions: ['Shamanic Practices', 'Community Harvesting', 'Animistic Worship', 'Folk Music'],
      clothing: ['Tribal Wear', 'Beaded Ornaments', 'Colorful Headgear', 'Woven Textiles'],
      icon: '🏔️',
      color: 'from-green-600 to-emerald-700',
      category: 'regional'
    },
    {
      name: 'Assam',
      region: 'Northeast India',
      description: 'Vibrant Assamese culture with rich literary heritage, folk music, and Bihu celebrations',
      language: 'Assamese',
      cuisine: ['Assam Tea', 'Masor Tenga', 'Khar', 'Pitha'],
      festivals: ['Bihu', 'Ambubachi Mela', 'Majuli Festival', 'Bogali Bihu'],
      arts: ['Bihu Dance', 'Sattriya Dance', 'Mask Making', 'Bell Metal Crafts'],
      traditions: ['Gamosa Weaving', 'Jaapi Making', 'Bhakti Movement', 'Xaj Ceremonies'],
      clothing: ['Mekhela Chador', 'Gamosa', 'Dhoti', 'Traditional Jewelry'],
      icon: '🍃',
      color: 'from-blue-500 to-indigo-600',
      category: 'regional'
    },
    {
      name: 'Bihar',
      region: 'East India',
      description: 'Historic cultural heritage with Buddhist influences, folk traditions, and ancient Magadha roots',
      language: 'Bhojpuri, Maithili, Magahi',
      cuisine: ['Litti Chokha', 'Sattu Paratha', 'Thekua', 'Khaja'],
      festivals: ['Chhath Puja', 'Madhushravani', 'Sama-Chakeva', 'Sarhul'],
      arts: ['Mithila Painting', 'Manjusha Art', 'Bidesia Folk Songs', 'Bhagalpuri Silk'],
      traditions: ['Sun Worship', 'Madhubani Art', 'Folk Theater', 'Tribal Rituals'],
      clothing: ['Dhoti-Kurta', 'Cotton Saree', 'Paag (Headgear)', 'Traditional Jewelry'],
      icon: '🌾',
      color: 'from-orange-500 to-red-600',
      category: 'regional'
    },
    {
      name: 'Chhattisgarh',
      region: 'Central India',
      description: 'Tribal culture with unique forest traditions, vibrant arts, and ancient cave paintings',
      language: 'Chhattisgarhi',
      cuisine: ['Fara', 'Chila', 'Bore Basi', 'Muthia'],
      festivals: ['Bastar Dussehra', 'Madai', 'Hareli', 'Goncha'],
      arts: ['Godna Art', 'Bell Metal Craft', 'Bamboo Craft', 'Tribal Dance'],
      traditions: ['Tribal Healing', 'Gedi Dance', 'Forest Conservation', 'Panthi Dance'],
      clothing: ['Tribal Ornaments', 'Handloom Fabrics', 'Bead Jewelry', 'Traditional Tattoos'],
      icon: '🏹',
      color: 'from-green-500 to-teal-600',
      category: 'regional'
    },
    {
      name: 'Goa',
      region: 'West India',
      description: 'Vibrant Indo-Portuguese culture with pristine beaches, seafood cuisine, and colonial heritage',
      language: 'Konkani, Portuguese influence',
      cuisine: ['Fish Curry Rice', 'Vindaloo', 'Bebinca', 'Feni'],
      festivals: ['Carnival', 'Shigmo', 'Feast of St. Francis Xavier', 'Ganesh Chaturthi'],
      arts: ['Mando Music', 'Dekhni Dance', 'Goan Architecture', 'Fugdi Dance'],
      traditions: ['Tiatr (Theater)', 'Zagor Folk Performance', 'Christmas Celebrations', 'Tinto Markets'],
      clothing: ['Kunbi Saree', 'Portuguese-influenced Formal Wear', 'Kashti (Loincloth)', 'Beach Wear'],
      icon: '🏖️',
      color: 'from-blue-400 to-cyan-500',
      category: 'regional'
    },
    {
      name: 'Gujarat',
      region: 'West India',
      description: 'Colorful cultural heritage with vibrant festivals, intricate textiles, and distinctive cuisine',
      language: 'Gujarati',
      cuisine: ['Dhokla', 'Thepla', 'Undhiyu', 'Khandvi'],
      festivals: ['Navratri', 'Uttarayan', 'Rann Utsav', 'Janmashtami'],
      arts: ['Garba Dance', 'Bandhani Textiles', 'Embroidery', 'Rogan Art'],
      traditions: ['Garba Dancing', 'Diamond Cutting', 'Textile Crafts', 'Mercantile Heritage'],
      clothing: ['Chaniya Choli', 'Kediya', 'Bandhani Sarees', 'Embroidered Textiles'],
      icon: '💃',
      color: 'from-red-500 to-orange-600',
      category: 'regional'
    },

    {
      name: 'Haryana',
      region: 'North India',
      description: 'Agricultural heritage with rural traditions, folk music, and renowned wrestling culture',
      language: 'Haryanvi',
      cuisine: ['Bajra Roti', 'Kadhi', 'Churma', 'Lassi'],
      festivals: ['Teej', 'Gogaji', 'Sanjhi', 'Baisakhi'],
      arts: ['Phag Folk Songs', 'Saang Folk Theater', 'Ragini Music', 'Folk Dances'],
      traditions: ['Wrestling', 'Hookah Culture', 'Cattle Fairs', 'Rural Customs'],
      clothing: ['Ghagra-Choli', 'Pagri (Turban)', 'Kurta-Pajama', 'Rural Jewelry'],
      icon: '🤼',
      color: 'from-green-400 to-emerald-500',
      category: 'regional'
    },
    {
      name: 'Himachal Pradesh',
      region: 'North India',
      description: 'Mountain culture with folk traditions, beautiful valleys, and nature worship',
      language: 'Pahari, Kangri, Kinnauri',
      cuisine: ['Dham', 'Madra', 'Chha Gosht', 'Sidu'],
      festivals: ['Kullu Dussehra', 'Losar', 'Minjar Fair', 'Mandi Shivratri'],
      arts: ['Kangra Painting', 'Wood Carving', 'Chamba Rumal', 'Metal Craft'],
      traditions: ['Deity Worship', 'Folk Dances', 'Nature Worship', 'Traditional Medicine'],
      clothing: ['Himachali Cap', 'Chamba Handkerchief', 'Dora', 'Pahari Ornaments'],
      icon: '🏔️',
      color: 'from-blue-400 to-indigo-500',
      category: 'regional'
    },
    {
      name: 'Jharkhand',
      region: 'East India',
      description: 'Tribal heritage with rich folk traditions, nature worship, and vibrant festivals',
      language: 'Santhali, Mundari, Ho, Kurukh',
      cuisine: ['Dhuska', 'Pittha', 'Handia (Rice Beer)', 'Rugra'],
      festivals: ['Sarhul', 'Karam', 'Tusu', 'Sohrai'],
      arts: ['Jadopatia Paintings', 'Paitkar Art', 'Tribal Dance', 'Bamboo Craft'],
      traditions: ['Tribal Governance', 'Nature Worship', 'Hunting Rituals', 'Community Living'],
      clothing: ['Panchi', 'Gamcha', 'Tribal Ornaments', 'Body Painting'],
      icon: '🌳',
      color: 'from-amber-500 to-yellow-600',
      category: 'regional'
    },
    {
      name: 'Karnataka',
      region: 'South India',
      description: 'Land of royal heritage, classical arts, technology hub with traditional roots',
      language: 'Kannada',
      cuisine: ['Bisi Bele Bath', 'Mysore Pak', 'Ragi Mudde', 'Kane Fry'],
      festivals: ['Mysore Dasara', 'Ugadi', 'Karaga', 'Pattadakal Dance Festival'],
      arts: ['Yakshagana', 'Carnatic Music', 'Mysore Paintings', 'Bidriware'],
      traditions: ['Classical Dance', 'Temple Worship', 'Ayurvedic Practices', 'Coffee Culture'],
      clothing: ['Panche', 'Ilkal Saree', 'Mysore Peta', 'Kasuti Embroidery'],
      icon: '🦁',
      color: 'from-red-500 to-rose-600',
      category: 'regional'
    },
    {
      name: 'Islamic Culture',
      region: 'Across India',
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
      name: 'Kerala',
      region: 'South India',
      description: 'God\'s own country with lush landscapes, ancient Ayurveda, and classical art forms',
      language: 'Malayalam',
      cuisine: ['Appam', 'Kerala Sadhya', 'Malabar Biryani', 'Ela Sadya'],
      festivals: ['Onam', 'Thrissur Pooram', 'Vishu', 'Theyyam'],
      arts: ['Kathakali', 'Mohiniyattam', 'Kalaripayattu', 'Boat Songs'],
      traditions: ['Ayurveda', 'Snake Boat Races', 'Temple Arts', 'Monsoon Rituals'],
      clothing: ['Mundu', 'Set Saree', 'Kasavu', 'Traditional Gold Jewelry'],
      icon: '🛶',
      color: 'from-emerald-500 to-green-600',
      category: 'regional'
    },
    {
      name: 'Madhya Pradesh',
      region: 'Central India',
      description: 'Heart of India with tribal heritage, ancient temples, and rich handicrafts',
      language: 'Hindi, Malvi, Nimadi',
      cuisine: ['Poha', 'Dal Bafla', 'Bhopali Gosht', 'Bhutte Ka Kees'],
      festivals: ['Khajuraho Dance Festival', 'Lokrang', 'Bhagoria', 'Malwa Utsav'],
      arts: ['Gond Paintings', 'Bagh Print', 'Chanderi Weaving', 'Maach Folk Theater'],
      traditions: ['Tribal Customs', 'Temple Architecture', 'Forest Conservation', 'Folk Traditions'],
      clothing: ['Chanderi Sarees', 'Tribal Ornaments', 'Bagh Print Fabrics', 'Traditional Turbans'],
      icon: '🏞️',
      color: 'from-amber-500 to-orange-600',
      category: 'regional'
    },
    {
      name: 'Buddhist Culture',
      region: 'Across India',
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

    {
      name: 'Maharashtra',
      region: 'West India',
      description: 'Land of Maratha heritage with vibrant festivals, rich cuisine, and bustling metropolitan life',
      language: 'Marathi',
      cuisine: ['Vada Pav', 'Puran Poli', 'Misal Pav', 'Modak'],
      festivals: ['Ganesh Chaturthi', 'Diwali', 'Gudi Padwa', 'Pola'],
      arts: ['Lavani Dance', 'Warli Painting', 'Tamasha Theater', 'Powada Ballads'],
      traditions: ['Palkhi Procession', 'Koli Customs', 'Ganesh Festival', 'Warkari Movement'],
      clothing: ['Nauvari Saree', 'Dhoti-Kurta', 'Paithani', 'Kolhapuri Chappal'],
      icon: '🕉️',
      color: 'from-yellow-500 to-orange-600',
      category: 'regional'
    },
    {
      name: 'Manipur',
      region: 'Northeast India',
      description: 'Land of jewels with classical dance, martial arts, and beautiful landscapes',
      language: 'Meiteilon (Manipuri)',
      cuisine: ['Eromba', 'Singju', 'Chamthong', 'Black Rice'],
      festivals: ['Lai Haraoba', 'Cheiraoba', 'Kang', 'Sangai Festival'],
      arts: ['Manipuri Dance', 'Pena Music', 'Thang-Ta Martial Arts', 'Pottery'],
      traditions: ['Lai Worship', 'Lake Culture', 'Martial Arts', 'Textile Weaving'],
      clothing: ['Phanek', 'Innaphi', 'Traditional Jewelry', 'Khudei'],
      icon: '💃',
      color: 'from-pink-500 to-rose-600',
      category: 'regional'
    },
    {
      name: 'Meghalaya',
      region: 'Northeast India',
      description: 'Abode of clouds with matrilineal society, living root bridges, and distinctive music',
      language: 'Khasi, Garo, Jaintia',
      cuisine: ['Jadoh', 'Tungrymbai', 'Dohneiiong', 'Putharo'],
      festivals: ['Nongkrem Dance', 'Shad Suk Mynsiem', 'Wangala', 'Behdienkhlam'],
      arts: ['Bamboo Craft', 'Living Root Bridges', 'Folk Music', 'Traditional Dances'],
      traditions: ['Matrilineal Society', 'Clan System', 'Living Architecture', 'Ancestral Worship'],
      clothing: ['Jainsem', 'Dhara', 'Dakmanda', 'Traditional Ornaments'],
      icon: '☁️',
      color: 'from-blue-400 to-indigo-500',
      category: 'regional'
    },
    {
      name: 'Tharu Culture',
      region: 'Terai Region',
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
      name: 'Mizoram',
      region: 'Northeast India',
      description: 'Land of hills with bamboo dance, vibrant festivals, and close-knit communities',
      language: 'Mizo',
      cuisine: ['Bai', 'Vawksa Rep', 'Smoked Meat', 'Bamboo Shoot Dishes'],
      festivals: ['Chapchar Kut', 'Mim Kut', 'Pawl Kut', 'Cheraw Festival'],
      arts: ['Bamboo Dance', 'Textile Weaving', 'Basketry', 'Puanchei Patterns'],
      traditions: ['Zawlbuk System', 'Tlawmngaihna (Selflessness)', 'Community Farming', 'Clan System'],
      clothing: ['Puanchei', 'Puan', 'Kawrchei', 'Traditional Jewelry'],
      icon: '🎋',
      color: 'from-green-500 to-emerald-600',
      category: 'regional'
    },
    {
      name: 'Nagaland',
      region: 'Northeast India',
      description: 'Land of festivals with warrior tribes, colorful heritage, and unique customs',
      language: 'Naga Languages (multiple)',
      cuisine: ['Axone (Fermented Soybean)', 'Smoked Pork', 'Bamboo Shoot', 'Rice Beer'],
      festivals: ['Hornbill Festival', 'Moatsu', 'Sekrenyi', 'Tuluni'],
      arts: ['Wood Carving', 'Textile Weaving', 'Traditional Song', 'War Dance'],
      traditions: ['Warrior Culture', 'Head Hunting History', 'Village Administration', 'Oral Traditions'],
      clothing: ['Tribal Shawls', 'Hornbill Feathers', 'Body Tattoos', 'Colorful Beads'],
      icon: '🦅',
      color: 'from-red-500 to-orange-600',
      category: 'regional'
    },
    {
      name: 'Odisha',
      region: 'East India',
      description: 'Ancient land with classical dance, magnificent temples, and maritime heritage',
      language: 'Odia',
      cuisine: ['Dalma', 'Chhena Poda', 'Pakhala', 'Chhena Jhili'],
      festivals: ['Rath Yatra', 'Konark Dance Festival', 'Nuakhai', 'Dhanu Jatra'],
      arts: ['Odissi Dance', 'Pattachitra Painting', 'Stone Carving', 'Silver Filigree'],
      traditions: ['Temple Architecture', 'Maritime History', 'Sand Art', 'Tribal Customs'],
      clothing: ['Sambalpuri Saree', 'Dhoti', 'Bomkai Textile', 'Tribal Jewelry'],
      icon: '🕍',
      color: 'from-amber-500 to-orange-600',
      category: 'regional'
    },
    {
      name: 'Gond Culture',
      region: 'Central India',
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

    {
      name: 'Punjab',
      region: 'North India',
      description: 'Vibrant land of five rivers with energetic folk dances, rich cuisine, and agricultural heritage',
      language: 'Punjabi',
      cuisine: ['Makki Di Roti & Sarson Da Saag', 'Butter Chicken', 'Chole Bhature', 'Lassi'],
      festivals: ['Baisakhi', 'Lohri', 'Hola Mohalla', 'Teeyan'],
      arts: ['Bhangra', 'Giddha', 'Phulkari Embroidery', 'Folk Songs'],
      traditions: ['Harvest Celebrations', 'Gurdwara Worship', 'Agricultural Customs', 'Turban Tying'],
      clothing: ['Phulkari', 'Salwar Kameez', 'Turban (Pagri)', 'Parandi'],
      icon: '🌾',
      color: 'from-yellow-500 to-amber-600',
      category: 'regional'
    },
    {
      name: 'Rajasthan',
      region: 'West India',
      description: 'Land of kings with desert culture, royal heritage, and colorful traditions',
      language: 'Rajasthani',
      cuisine: ['Dal Baati Churma', 'Gatte ki Sabzi', 'Pyaaz Kachori', 'Laal Maas'],
      festivals: ['Pushkar Mela', 'Desert Festival', 'Teej', 'Gangaur'],
      arts: ['Miniature Paintings', 'Puppetry', 'Folk Music', 'Block Printing'],
      traditions: ['Desert Survival', 'Royal Customs', 'Water Conservation', 'Puppet Shows'],
      clothing: ['Bandhani', 'Leheriya', 'Ghoomar Skirts', 'Turbans'],
      icon: '🏰',
      color: 'from-red-500 to-pink-600',
      category: 'regional'
    },
    {
      name: 'Sikkim',
      region: 'Northeast India',
      description: 'Himalayan paradise with Buddhist culture, pristine nature, and peaceful traditions',
      language: 'Nepali, Bhutia, Lepcha',
      cuisine: ['Momos', 'Thukpa', 'Gundruk', 'Sel Roti'],
      festivals: ['Losar', 'Saga Dawa', 'Pang Lhabsol', 'Dasain'],
      arts: ['Thangka Painting', 'Prayer Flags', 'Carpet Weaving', 'Buddhist Chanting'],
      traditions: ['Buddhist Rituals', 'Mountain Worship', 'Chaam Dances', 'Prayer Wheel Turning'],
      clothing: ['Bakhu', 'Kho', 'Honju', 'Traditional Jewelry'],
      icon: '🏔️',
      color: 'from-blue-500 to-indigo-600',
      category: 'regional'
    },
    {
      name: 'Handloom Culture',
      region: 'Throughout India',
      description: 'Traditional weaving culture producing world-famous textiles and carpets',
      language: 'Various regional languages',
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
      name: 'Tamil Nadu',
      region: 'South India',
      description: 'Ancient Dravidian culture with classical arts, temples, and philosophical traditions',
      language: 'Tamil',
      cuisine: ['Idli', 'Dosa', 'Sambar', 'Filter Coffee'],
      festivals: ['Pongal', 'Thiruvaiyaru Festival', 'Margazhi Dance Festival', 'Thai Pusam'],
      arts: ['Bharatanatyam', 'Carnatic Music', 'Bronze Sculpture', 'Temple Architecture'],
      traditions: ['Kolam Drawing', 'Temple Rituals', 'Classical Arts', 'Agricultural Ceremonies'],
      clothing: ['Madisar', 'Veshti', 'Pattu Pavadai', 'Temple Jewelry'],
      icon: '🔱',
      color: 'from-red-500 to-orange-600',
      category: 'regional'
    },
    {
      name: 'Telangana',
      region: 'South India',
      description: 'Vibrant culture with unique festivals, cuisine, and Deccan heritage',
      language: 'Telugu',
      cuisine: ['Hyderabadi Biryani', 'Sarva Pindi', 'Qubani Ka Meetha', 'Irani Chai'],
      festivals: ['Bonalu', 'Bathukamma', 'Sammakka Saralamma Jatara', 'Deccan Festival'],
      arts: ['Perini Dance', 'Pochampally Ikat', 'Dhakni Poetry', 'Qawwali'],
      traditions: ['Ganga Jamuni Tehzeeb', 'Rural Festivals', 'Folk Songs', 'Pastoral Customs'],
      clothing: ['Gadwal Sarees', 'Narayanpet', 'Traditional Jewelry', 'Rural Attire'],
      icon: '💎',
      color: 'from-pink-500 to-purple-600',
      category: 'regional'
    },
    {
      name: 'Tripura',
      region: 'Northeast India',
      description: 'Land of cultural fusion with tribal traditions, royal heritage, and handlooms',
      language: 'Bengali, Kokborok',
      cuisine: ['Mui Borok', 'Chakhwi', 'Berma Bhat', 'Fish Preparations'],
      festivals: ['Garia', 'Kharchi Puja', 'Hojagiri', 'Owa'],
      arts: ['Bamboo Craft', 'Risa Weaving', 'Tribal Dances', 'Mask Making'],
      traditions: ['Jhum Cultivation', 'Royal Heritage', 'Tribal Customs', 'Fusion Culture'],
      clothing: ['Rignai', 'Rikutu', 'Risa', 'Bamboo Jewelry'],
      icon: '🎭',
      color: 'from-green-500 to-blue-600',
      category: 'regional'
    },
    {
      name: 'Pottery Culture',
      region: 'Throughout India',
      description: 'Ancient pottery traditions creating beautiful ceramics and earthenware',
      language: 'Various regional languages',
      cuisine: ['Traditional Food', 'Clay-cooked Items', 'Local Specialties', 'Seasonal Dishes'],
      festivals: ['Vishwakarma Day', 'Pottery Fairs', 'Cultural Festivals', 'Harvest Celebrations'],
      arts: ['Pottery Making', 'Ceramic Art', 'Glazing', 'Decorative Patterns'],
      traditions: ['Clay Preparation', 'Wheel Throwing', 'Kiln Firing', 'Artistic Expression'],
      clothing: ['Work Attire', 'Practical Clothing', 'Aprons', 'Traditional Wear'],
      icon: '🏺',
      color: 'from-amber-500 to-orange-600',
      category: 'craft'
    },
    {
      name: 'Uttarakhand',
      region: 'North India',
      description: 'Land of gods with Himalayan traditions, pilgrimage sites, and mountain culture',
      language: 'Garhwali, Kumaoni',
      cuisine: ['Kafuli', 'Aloo Ke Gutke', 'Mandua Ki Roti', 'Bhang Ki Chutney'],
      festivals: ['Kumbh Mela', 'Nanda Devi Raj Jat', 'Phool Dei', 'Harela'],
      arts: ['Aipan Art', 'Folk Music', 'Wood Carving', 'Ringal Craft'],
      traditions: ['Pilgrimage', 'Mountain Worship', 'Folk Tales', 'Nature Conservation'],
      clothing: ['Pichora', 'Rangwali', 'Pahari Cap', 'Traditional Jewelry'],
      icon: '⛰️',
      color: 'from-blue-400 to-purple-500',
      category: 'regional'
    },
    {
      name: 'Uttar Pradesh',
      region: 'North India',
      description: 'Cultural heartland with Ganga-Jamuni traditions, historical sites, and diverse heritage',
      language: 'Hindi, Awadhi, Braj',
      cuisine: ['Kebabs', 'Tundey Kababi', 'Petha', 'Chaat'],
      festivals: ['Kumbh Mela', 'Ganga Dussehra', 'Taj Mahotsav', 'Ram Navami'],
      arts: ['Kathak Dance', 'Chikankari', 'Brass Work', 'Traditional Music'],
      traditions: ['Ganga-Jamuni Tehzeeb', 'Kite Flying', 'Religious Harmony', 'Folk Customs'],
      clothing: ['Chikankari Kurtas', 'Banarasi Sarees', 'Traditional Jewelry', 'Regional Attire'],
      icon: '🕌',
      color: 'from-amber-400 to-orange-500',
      category: 'regional'
    },
    {
      name: 'West Bengal',
      region: 'East India',
      description: 'Land of cultural renaissance with literature, arts, and intellectual heritage',
      language: 'Bengali',
      cuisine: ['Macher Jhol', 'Rasgulla', 'Shorshe Ilish', 'Mishti Doi'],
      festivals: ['Durga Puja', 'Saraswati Puja', 'Poush Mela', 'Rabindra Jayanti'],
      arts: ['Rabindra Sangeet', 'Kantha Stitch', 'Patachitra', 'Baul Music'],
      traditions: ['Adda Sessions', 'Literary Culture', 'Terracotta Craft', 'Intellectual Debates'],
      clothing: ['Tant Saree', 'Dhakai Jamdani', 'Dhoti', 'Bengal Ornaments'],
      icon: '🐯',
      color: 'from-white to-green-600',
      category: 'regional'
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
                <h1 className="text-xl font-bold text-gray-900">INDIA Explorer</h1>
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
          <h1 className="text-5xl font-bold mb-4">India Culture</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore the rich tapestry of diverse cultures from all 28 states that make India 
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
            Discover {filteredCultures.length} unique cultural traditions from across India
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