import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState('today');

  // Mock data for appointments
  const todaysAppointments = [
    { id: 1, patientName: 'John Doe', time: '10:00 AM', type: 'Video Call', status: 'upcoming' },
    { id: 2, patientName: 'Jane Smith', time: '10:30 AM', type: 'Follow-up', status: 'upcoming' },
    { id: 3, patientName: 'Robert Johnson', time: '11:00 AM', type: 'Video Call', status: 'upcoming' },
    { id: 4, patientName: 'Emily White', time: '02:00 PM', type: 'New Consultation', status: 'upcoming' },
    { id: 5, patientName: 'David Lee', time: '02:30 PM', type: 'Video Call', status: 'upcoming' }
  ];

  const upcomingAppointments = [
    { id: 6, patientName: 'Alice Johnson', time: '09:00 AM', date: '2024-04-16', type: 'Follow-up' },
    { id: 7, patientName: 'Michael Brown', time: '10:00 AM', date: '2024-04-16', type: 'Video Call' },
    { id: 8, patientName: 'Sarah Wilson', time: '11:30 AM', date: '2024-04-17', type: 'New Consultation' },
    { id: 9, patientName: 'Thomas Davis', time: '03:00 PM', date: '2024-04-17', type: 'Follow-up' }
  ];

  const pendingPrescriptions = 3;
  const upcomingPatients = 12;
  const navigate = useNavigate();

  const handleStartCall = (appointmentId) => {
    console.log('Starting call for appointment:', appointmentId);
    alert(`Starting video call for appointment ${appointmentId}`);
  };

  const handleWritePrescription = (appointmentId) => {
    window.location.href = '/create-prescription';
  };

  const handleViewAppointments = () => {
    setActiveTab('upcoming');
  };

  const handleViewAllPatients = () => {
    navigate('/patient-management');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Doctor Dashboard
          </h1>
          <p className="text-gray-600">
            Manage your consultations, appointments, and patient care.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Today's Appointments */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Today's Appointments</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{todaysAppointments.length}</p>
                <p className="text-sm text-gray-500 mt-1">Review your daily schedule</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <button
              onClick={handleViewAppointments}
              className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition duration-200"
            >
              View Appointments
            </button>
          </div>

          {/* Upcoming Appointments */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Upcoming Appointments</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{upcomingAppointments.length}</p>
                <p className="text-sm text-gray-500 mt-1">Next 7 days</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <button
              onClick={() => setActiveTab('upcoming')}
              className="w-full mt-4 bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-700 transition duration-200"
            >
              Manage Schedule
            </button>
          </div>

          {/* Pending Prescriptions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Prescriptions</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{pendingPrescriptions}</p>
                <p className="text-sm text-gray-500 mt-1">Action required</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <button className="w-full mt-4 bg-yellow-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-yellow-700 transition duration-200">
              Write New Prescription
            </button>
          </div>

          {/* Upcoming Patients */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Upcoming Patients</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{upcomingPatients}</p>
                <p className="text-sm text-gray-500 mt-1">This week</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <button
              onClick={handleViewAllPatients}
              className="w-full mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-purple-700 transition duration-200"
            >
              View All Patients
            </button>
          </div>
        </div>

        {/* Appointments Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('today')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'today'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Today's Appointments ({todaysAppointments.length})
              </button>
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'upcoming'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Upcoming Appointments ({upcomingAppointments.length})
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'today' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Schedule</h3>
                <div className="space-y-4">
                  {todaysAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{appointment.patientName}</h4>
                        <p className="text-sm text-gray-600">{appointment.time} • {appointment.type}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleStartCall(appointment.id)}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition duration-200"
                        >
                          Start Call
                        </button>
                        <button
                          onClick={() => handleWritePrescription(appointment.id)}
                          className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition duration-200"
                        >
                          Write Prescription
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'upcoming' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Patient Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date & Time
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {upcomingAppointments.map((appointment) => (
                        <tr key={appointment.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{appointment.patientName}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {appointment.type}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => handleStartCall(appointment.id)}
                                className="text-blue-600 hover:text-blue-900"
                              >
                                Start Call
                              </button>
                              <button
                                onClick={() => handleWritePrescription(appointment.id)}
                                className="text-green-600 hover:text-green-900"
                              >
                                Prescription
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <button className="bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition duration-200">
              New Appointment
            </button>
            <button className="bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition duration-200">
              Write Prescription
            </button>
            <button className="bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition duration-200">
              Patient Records
            </button>
            <button className="bg-yellow-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-yellow-700 transition duration-200">
              Lab Results
            </button>
            <button className="bg-red-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-red-700 transition duration-200">
              Emergency Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;