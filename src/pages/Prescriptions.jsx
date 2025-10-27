import React from 'react';

const Prescriptions = () => {
  // Mock prescription data
  const prescriptions = [
    {
      id: 1,
      doctor: 'Dr. Emily Roberts',
      date: '2024-03-15',
      medication: 'Amoxicillin 500mg',
      status: 'Active'
    },
    {
      id: 2,
      doctor: 'Dr. Benjamin Carter',
      date: '2024-02-28',
      medication: 'Ibuprofen 400mg',
      status: 'Completed'
    },
    {
      id: 3,
      doctor: 'Dr. Sophia Lee',
      date: '2024-01-20',
      medication: 'Lisinopril 10mg',
      status: 'Active'
    },
    {
      id: 4,
      doctor: 'Dr. Michael Chen',
      date: '2023-12-10',
      medication: 'Metformin 500mg',
      status: 'Completed'
    },
    {
      id: 5,
      doctor: 'Dr. Olivia Rodriguez',
      date: '2023-11-05',
      medication: 'Atorvastatin 20mg',
      status: 'Completed'
    },
    {
      id: 6,
      doctor: 'Dr. Daniel White',
      date: '2023-10-18',
      medication: 'Levothyroxine 50mcg',
      status: 'Completed'
    },
    {
      id: 7,
      doctor: 'Dr. Sarah Kim',
      date: '2023-09-22',
      medication: 'Albuterol Inhaler',
      status: 'Completed'
    },
    {
      id: 8,
      doctor: 'Dr. Robert Green',
      date: '2023-08-14',
      medication: 'Omeprazole 20mg',
      status: 'Completed'
    }
  ];

  const handleViewPDF = (prescriptionId) => {
    console.log('Viewing PDF for prescription:', prescriptionId);
    // TODO: Implement PDF viewing logic
    alert(`Viewing PDF for prescription ${prescriptionId}`);
  };

  const handleRefillRequest = (prescriptionId) => {
    console.log('Requesting refill for prescription:', prescriptionId);
    // TODO: Implement refill request logic
    alert(`Refill requested for prescription ${prescriptionId}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Completed':
        return 'bg-gray-100 text-gray-800';
      case 'Expired':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            My Prescriptions
          </h1>
          <p className="text-gray-600">
            Access your medication details, refill requests, and pharmacy information.
          </p>
        </div>

        {/* Prescriptions List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4">
                <span className="text-sm font-medium text-gray-700">Doctor & Medication</span>
              </div>
              <div className="col-span-2">
                <span className="text-sm font-medium text-gray-700">Date</span>
              </div>
              <div className="col-span-2">
                <span className="text-sm font-medium text-gray-700">Status</span>
              </div>
              <div className="col-span-4">
                <span className="text-sm font-medium text-gray-700">Actions</span>
              </div>
            </div>
          </div>

          {/* Prescriptions List */}
          <div className="divide-y divide-gray-200">
            {prescriptions.map((prescription) => (
              <div key={prescription.id} className="px-6 py-4 hover:bg-gray-50 transition duration-150">
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Doctor & Medication */}
                  <div className="col-span-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {prescription.doctor}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {prescription.medication}
                    </p>
                  </div>

                  {/* Date */}
                  <div className="col-span-2">
                    <span className="text-gray-900 font-medium">
                      {new Date(prescription.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>

                  {/* Status */}
                  <div className="col-span-2">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(prescription.status)}`}>
                      {prescription.status}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="col-span-4">
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleViewPDF(prescription.id)}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        View PDF
                      </button>
                      {prescription.status === 'Active' && (
                        <button
                          onClick={() => handleRefillRequest(prescription.id)}
                          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          Request Refill
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State (for demonstration) */}
        {prescriptions.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <div className="text-gray-400 text-6xl mb-4">💊</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No prescriptions found
            </h3>
            <p className="text-gray-600 mb-6">
              You don't have any prescriptions yet. Contact your doctor to get started.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
              Find a Doctor
            </button>
          </div>
        )}

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Prescriptions</p>
                <p className="text-2xl font-bold text-gray-900">2</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Refill Requests</p>
                <p className="text-2xl font-bold text-gray-900">1</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Prescriptions</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prescriptions;