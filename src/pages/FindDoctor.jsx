import React, { useState } from 'react';

const FindDoctor = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  // Mock data for doctors
  const doctors = [
    {
      id: 1,
      name: 'Dr. Eleanor Vance',
      specialty: 'Cardiology',
      rating: 4.8,
      reviews: 120,
      price: 75,
      image: '👩‍⚕️'
    },
    {
      id: 2,
      name: 'Dr. Marcus Thorne',
      specialty: 'Pediatrics',
      rating: 4.8,
      reviews: 85,
      price: 60,
      image: '👨‍⚕️'
    },
    {
      id: 3,
      name: 'Dr. Sofia Rodriguez',
      specialty: 'Dermatology',
      rating: 4.7,
      reviews: 150,
      price: 80,
      image: '👩‍⚕️'
    },
    {
      id: 4,
      name: 'Dr. Benjamin Carter',
      specialty: 'Orthopedics',
      rating: 4.9,
      reviews: 110,
      price: 90,
      image: '👨‍⚕️'
    },
    {
      id: 5,
      name: 'Dr. Olivia Kim',
      specialty: 'Neurology',
      rating: 4.6,
      reviews: 80,
      price: 85,
      image: '👩‍⚕️'
    },
    {
      id: 6,
      name: 'Dr. Samuel Green',
      specialty: 'General Practice',
      rating: 4.7,
      reviews: 200,
      price: 55,
      image: '👨‍⚕️'
    },
    {
      id: 7,
      name: 'Dr. Isabella Chen',
      specialty: 'Oncology',
      rating: 4.9,
      reviews: 70,
      price: 100,
      image: '👩‍⚕️'
    },
    {
      id: 8,
      name: 'Dr. David Lee',
      specialty: 'Gastroenterology',
      rating: 4.8,
      reviews: 130,
      price: 90,
      image: '👨‍⚕️'
    }
  ];

  // Mock specialties and cities
  const specialties = [
    'Cardiology', 'Pediatrics', 'Dermatology', 'Orthopedics', 
    'Neurology', 'General Practice', 'Oncology', 'Gastroenterology'
  ];

  const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

  // Filter doctors based on search and filters
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = !selectedSpecialty || doctor.specialty === selectedSpecialty;
    const matchesCity = !selectedCity; // In real app, doctors would have city property
    
    return matchesSearch && matchesSpecialty && matchesCity;
  });

  const handleBookAppointment = (doctorId) => {
    console.log('Booking appointment with doctor:', doctorId);
    // TODO: Implement booking logic
    alert(`Booking appointment with doctor ${doctorId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Find a Doctor
          </h1>
          <p className="text-gray-600">
            Search for healthcare professionals by name, specialty, or location.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Input */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search by name, city, or specialty
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search doctors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Specialty Filter */}
            <div>
              <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-2">
                Select Specialty
              </label>
              <select
                id="specialty"
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Specialties</option>
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty}>{specialty}</option>
                ))}
              </select>
            </div>

            {/* City Filter */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                Select City
              </label>
              <select
                id="city"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Cities</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Found {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDoctors.map(doctor => (
            <div key={doctor.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
              {/* Doctor Image/Icon */}
              <div className="bg-blue-50 p-6 text-center">
                <span className="text-4xl">{doctor.image}</span>
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {doctor.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {doctor.specialty}
                </p>

                {/* Rating and Reviews */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="text-sm font-medium text-gray-900">
                      {doctor.rating}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    ({doctor.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ${doctor.price}
                  </span>
                  <span className="text-sm text-gray-500">/ session</span>
                </div>

                {/* Book Button */}
                <button
                  onClick={() => handleBookAppointment(doctor.id)}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No doctors found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindDoctor;