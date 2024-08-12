import React, { useState, useEffect } from 'react';
import DoctorCardIC from './InstantConsultationBooking/DoctorCardIC/DoctorCardIC';
import FindDoctorSearchIC from './InstantConsultationBooking/FindDoctorSearchIC/FindDoctorSearchIC';

// Sample data, replace with actual data fetching logic
const sampleDoctors = [
  { id: 1, name: 'Dr. Smith', speciality: 'Dentist', experience: 10, ratings: 4.5, profilePic: '' },
  { id: 2, name: 'Dr. Jones', speciality: 'Dermatologist', experience: 8, ratings: 4.7, profilePic: '' },
  // Add more sample doctor data here
];

const BookingConsultation = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    // Fetch doctors data or use static data
    setDoctors(sampleDoctors);
    setFilteredDoctors(sampleDoctors);
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = doctors.filter(doctor => doctor.speciality.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredDoctors(filtered);
  };

  return (
    <div className="booking-consultation">
      <h1>Book a Consultation</h1>
      <FindDoctorSearchIC onSearch={handleSearch} />
      <div className="doctor-list">
        {filteredDoctors.map(doctor => (
          <DoctorCardIC
            key={doctor.id}
            name={doctor.name}
            speciality={doctor.speciality}
            experience={doctor.experience}
            ratings={doctor.ratings}
            profilePic={doctor.profilePic}
          />
        ))}
      </div>
    </div>
  );
};

export default BookingConsultation;
