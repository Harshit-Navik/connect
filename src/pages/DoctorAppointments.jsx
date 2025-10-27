import React, { useState } from 'react';

const DoctorAppointments = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  // Mock appointment data
  const appointments = {
    upcoming: [
      {
        id: 1,
        patientName: 'Alice Johnson',
        patientId: 'P001',
        date: '2024-04-16',
        time: '09:00 AM',
        type: 'Follow-up',
        duration: '30 min',
        reason: 'Hypertension check-up',
        status: 'confirmed'
      },
      {
        id: 2,
        patientName: 'Bob Williams',
        patientId: 'P006',
        date: '2024-04-16',
        time: '10:30 AM',
        type: 'New Consultation',
        duration: '45 min',
        reason: 'Annual physical examination',
        status: 'confirmed'
      },
      {
        id: 3,
        patientName: 'Diana Miller',
        patientId: 'P008',
        date: '2024-04-17',
        time: '11:00 AM',
        type: 'Video Call',
        duration: '30 min',
        reason: 'Medication review',
        status: 'confirmed'
      },
      {
        id: 4,
        patientName: 'Charlie Brown',
        patientId: 'P009',
        date: '2024-04-17',
        time: '02:00 PM',
        type: 'Follow-up',
        duration: '30 min',
        reason: 'Diabetes management',
        status: 'pending'
      }
    ],
    completed: [
      {
        id: 5,
        patientName: 'John Doe',
        patientId: 'P010',
        date: '2024-04-15',
        time: '10:00 AM',
        type: 'Video Call',
        duration: '30 min',
        reason: 'Vitamin D deficiency',
        status: 'completed'
      },
      {
        id: 6,
        patientName: 'Jane Smith',
        patientId: 'P011',
        date: '2024-04-15',
        time: '11:30 AM',
        type: 'Follow-up',
        duration: '30 min',
        reason: 'Post-operative check',
        status: 'completed'
      },
      {
        id: 7,
        patientName: 'Robert Johnson',
        patientId: 'P012',
        date: '2024-04-14',
        time: '03:00 PM',
        type: 'New Consultation',
        duration: '45 min',
        reason: 'Cardiology referral',
        status: 'completed'
      }
    ],
    cancelled: [
      {
        id: 8,
        patientName: 'Emily White',
        patientId: 'P013',
        date: '2024-04-13',
        time: '09:30 AM',
        type: 'Follow-up',
        duration: '30 min',
        reason: 'Routine check-up',
        status: 'cancelled',
        cancellationReason: 'Patient rescheduled'
      },
      {
        id: 9,
        patientName: 'David Lee',
        patientId: 'P014',
        date: '2024-04-12',
        time: '02:30 PM',
        type: 'Video Call',
        duration: '30 min',
        reason: 'Medication consultation',
        status: 'cancelled',
        cancellationReason: 'Emergency at clinic'
      }
    ]
  };

  const handleStartCall = (appointmentId) => {
    console.log('Starting call for appointment:', appointmentId);
    alert(`Starting video call for appointment ${appointmentId}`);
  };

  const handleWritePrescription = (appointmentId) => {
    console.log('Writing prescription for appointment:', appointmentId);
    alert(`Redirecting to prescription form for appointment ${appointmentId}`);
  };

  const handleReschedule = (appointmentId) => {
    console.log('Rescheduling appointment:', appointmentId);
    alert(`Opening reschedule form for appointment ${appointmentId}`);
  };

  const handleCancel = (appointmentId) => {
    console.log('Cancelling appointment:', appointmentId);
    alert(`Cancelling appointment ${appointmentId}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'confirmed':
        return 'Confirmed';
      case 'pending':
        return 'Pending';
      case 'completed':
        return 'Completed';
      case 'cancelled':
        return 'Cancelled';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Doctor's Appointments
          </h1>
          <p className="text-gray-600">
            Manage and track all your patient appointments in one place.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Today</p>
                <p className="text-3xl font-bold text-gray-900">3</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Upcoming</p>
                <p className="text-3xl font-bold text-gray-900">{appointments.upcoming.length}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-3xl font-bold text-gray-900">{appointments.completed.length}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Cancelled</p>
                <p className="text-3xl font-bold text-gray-900">{appointments.cancelled.length}</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Appointments Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Tabs Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm flex items-center ${
                  activeTab === 'upcoming'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Upcoming ({appointments.upcoming.length})
              </button>
              <button
                onClick={() => setActiveTab('completed')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm flex items-center ${
                  activeTab === 'completed'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Completed ({appointments.completed.length})
              </button>
              <button
                onClick={() => setActiveTab('cancelled')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm flex items-center ${
                  activeTab === 'cancelled'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Cancelled ({appointments.cancelled.length})
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Upcoming Appointments */}
            {activeTab === 'upcoming' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h3>
                {appointments.upcoming.map((appointment) => (
                  <div key={appointment.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition duration-150">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-medium text-sm">
                            {appointment.patientName.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{appointment.patientName}</h4>
                          <p className="text-sm text-gray-600">
                            {appointment.date} at {appointment.time} • {appointment.type}
                          </p>
                          <p className="text-sm text-gray-500">{appointment.reason}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                          {getStatusText(appointment.status)}
                        </span>
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
                            Prescription
                          </button>
                          <button
                            onClick={() => handleReschedule(appointment.id)}
                            className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition duration-200"
                          >
                            Reschedule
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Completed Appointments */}
            {activeTab === 'completed' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Completed Appointments</h3>
                {appointments.completed.map((appointment) => (
                  <div key={appointment.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition duration-150">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 font-medium text-sm">
                            {appointment.patientName.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{appointment.patientName}</h4>
                          <p className="text-sm text-gray-600">
                            {appointment.date} at {appointment.time} • {appointment.type}
                          </p>
                          <p className="text-sm text-gray-500">{appointment.reason}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                          {getStatusText(appointment.status)}
                        </span>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleWritePrescription(appointment.id)}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition duration-200"
                          >
                            Prescription
                          </button>
                          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition duration-200">
                            View Notes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Cancelled Appointments */}
            {activeTab === 'cancelled' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Cancelled Appointments</h3>
                {appointments.cancelled.map((appointment) => (
                  <div key={appointment.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition duration-150">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-600 font-medium text-sm">
                            {appointment.patientName.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{appointment.patientName}</h4>
                          <p className="text-sm text-gray-600">
                            {appointment.date} at {appointment.time} • {appointment.type}
                          </p>
                          <p className="text-sm text-gray-500">
                            {appointment.reason} • {appointment.cancellationReason}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                          {getStatusText(appointment.status)}
                        </span>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleReschedule(appointment.id)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition duration-200"
                          >
                            Reschedule
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition duration-200 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New Appointment
            </button>
            <button className="bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition duration-200 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Bulk Prescriptions
            </button>
            <button className="bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition duration-200 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export Schedule
            </button>
            <button className="bg-yellow-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-yellow-700 transition duration-200 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Set Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointments;