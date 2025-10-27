import React, { useState } from 'react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('doctors');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for doctors
  const doctors = [
    {
      id: 1,
      name: 'Dr. Jane Doe',
      licenseNumber: 'L-12345',
      specialty: 'Cardiology',
      email: 'jane.doe@healthconnect.com',
      phone: '555-0101',
      joinDate: '2023-01-15',
      verifiedStatus: 'Verified',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Dr. John Smith',
      licenseNumber: 'L-67890',
      specialty: 'Pediatrics',
      email: 'john.smith@healthconnect.com',
      phone: '555-0102',
      joinDate: '2023-02-20',
      verifiedStatus: 'Pending',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Dr. Emily White',
      licenseNumber: 'L-11223',
      specialty: 'Dermatology',
      email: 'emily.white@healthconnect.com',
      phone: '555-0103',
      joinDate: '2023-03-10',
      verifiedStatus: 'Verified',
      status: 'Active'
    },
    {
      id: 4,
      name: 'Dr. Michael Brown',
      licenseNumber: 'L-44566',
      specialty: 'Orthopedics',
      email: 'michael.brown@healthconnect.com',
      phone: '555-0104',
      joinDate: '2023-04-05',
      verifiedStatus: 'Pending',
      status: 'Active'
    },
    {
      id: 5,
      name: 'Dr. Sarah Green',
      licenseNumber: 'L-77889',
      specialty: 'Neurology',
      email: 'sarah.green@healthconnect.com',
      phone: '555-0105',
      joinDate: '2023-05-12',
      verifiedStatus: 'Verified',
      status: 'Inactive'
    },
    {
      id: 6,
      name: 'Dr. Robert Chen',
      licenseNumber: 'L-99001',
      specialty: 'Oncology',
      email: 'robert.chen@healthconnect.com',
      phone: '555-0106',
      joinDate: '2023-06-18',
      verifiedStatus: 'Verified',
      status: 'Active'
    },
    {
      id: 7,
      name: 'Dr. Lisa Wang',
      licenseNumber: 'L-22334',
      specialty: 'Psychiatry',
      email: 'lisa.wang@healthconnect.com',
      phone: '555-0107',
      joinDate: '2023-07-22',
      verifiedStatus: 'Pending',
      status: 'Active'
    },
    {
      id: 8,
      name: 'Dr. David Kim',
      licenseNumber: 'L-55667',
      specialty: 'Gastroenterology',
      email: 'david.kim@healthconnect.com',
      phone: '555-0108',
      joinDate: '2023-08-30',
      verifiedStatus: 'Verified',
      status: 'Active'
    }
  ];

  // Mock platform statistics
  const platformStats = [
    { name: 'Total Users', value: '2,847', change: '+12%', color: 'blue' },
    { name: 'Active Doctors', value: '156', change: '+5%', color: 'green' },
    { name: 'Monthly Consultations', value: '3,421', change: '+18%', color: 'purple' },
    { name: 'Prescription Rate', value: '94%', change: '+2%', color: 'orange' }
  ];

  // Filter doctors based on search
  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.licenseNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleVerifyDoctor = (doctorId) => {
    console.log('Verifying doctor:', doctorId);
    alert(`Doctor ${doctorId} verification initiated`);
  };

  const handleSuspendDoctor = (doctorId) => {
    console.log('Suspending doctor:', doctorId);
    alert(`Doctor ${doctorId} suspension initiated`);
  };

  const handleViewDetails = (doctorId) => {
    console.log('Viewing details for doctor:', doctorId);
    alert(`Viewing details for doctor ${doctorId}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Verified':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDoctorStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Inactive':
        return 'bg-red-100 text-red-800';
      case 'Suspended':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Manage platform operations, doctor verifications, and system settings.
          </p>
        </div>

        {/* Platform Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {platformStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <p className={`text-sm mt-1 ${
                    stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${
                  stat.color === 'blue' ? 'bg-blue-100' :
                  stat.color === 'green' ? 'bg-green-100' :
                  stat.color === 'purple' ? 'bg-purple-100' : 'bg-orange-100'
                }`}>
                  <div className={`w-6 h-6 ${
                    stat.color === 'blue' ? 'text-blue-600' :
                    stat.color === 'green' ? 'text-green-600' :
                    stat.color === 'purple' ? 'text-purple-600' : 'text-orange-600'
                  }`}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('doctors')}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition duration-200 ${
                    activeTab === 'doctors'
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Doctor Management
                </button>
                <button
                  onClick={() => setActiveTab('users')}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition duration-200 ${
                    activeTab === 'users'
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  User Management
                </button>
                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition duration-200 ${
                    activeTab === 'analytics'
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Analytics & Reports
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition duration-200 ${
                    activeTab === 'settings'
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  System Settings
                </button>
                <button
                  onClick={() => setActiveTab('support')}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition duration-200 ${
                    activeTab === 'support'
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Support Tickets
                </button>
              </nav>

              {/* Admin Tools Quick Access */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Admin Tools</h3>
                <div className="space-y-2">
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition duration-200">
                    Bulk User Import
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition duration-200">
                    System Logs
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition duration-200">
                    Database Backup
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition duration-200">
                    API Management
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'doctors' && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                {/* Table Header */}
                <div className="px-6 py-4 border-b border-gray-200">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                    <h2 className="text-lg font-semibold text-gray-900">Doctor Management</h2>
                    <div className="flex space-x-3">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search doctors..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition duration-200">
                        Add Doctor
                      </button>
                    </div>
                  </div>
                </div>

                {/* Doctors Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Doctor Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          License Number
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Specialty
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Verified Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredDoctors.map((doctor) => (
                        <tr key={doctor.id} className="hover:bg-gray-50 transition duration-150">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-600 font-medium text-sm">
                                  {doctor.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {doctor.name}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {doctor.email}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{doctor.licenseNumber}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{doctor.specialty}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDoctorStatusColor(doctor.status)}`}>
                              {doctor.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(doctor.verifiedStatus)}`}>
                              {doctor.verifiedStatus}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              {doctor.verifiedStatus === 'Pending' && (
                                <button
                                  onClick={() => handleVerifyDoctor(doctor.id)}
                                  className="text-green-600 hover:text-green-900"
                                >
                                  Verify
                                </button>
                              )}
                              <button
                                onClick={() => handleViewDetails(doctor.id)}
                                className="text-blue-600 hover:text-blue-900"
                              >
                                View
                              </button>
                              <button
                                onClick={() => handleSuspendDoctor(doctor.id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                {doctor.status === 'Active' ? 'Suspend' : 'Activate'}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Table Footer */}
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-700">
                      Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredDoctors.length}</span> of{' '}
                      <span className="font-medium">{filteredDoctors.length}</span> doctors
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                        Previous
                      </button>
                      <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Other Tabs Placeholder Content */}
            {activeTab !== 'doctors' && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
                <div className="text-gray-400 text-6xl mb-4">
                  {activeTab === 'users' ? '👥' :
                   activeTab === 'analytics' ? '📊' :
                   activeTab === 'settings' ? '⚙️' : '💬'}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {activeTab === 'users' ? 'User Management' :
                   activeTab === 'analytics' ? 'Analytics & Reports' :
                   activeTab === 'settings' ? 'System Settings' : 'Support Tickets'}
                </h3>
                <p className="text-gray-600 mb-6">
                  This section is under development. In a complete implementation, you would manage{' '}
                  {activeTab === 'users' ? 'patient accounts and user permissions' :
                   activeTab === 'analytics' ? 'platform analytics and generate reports' :
                   activeTab === 'settings' ? 'system configuration and preferences' : 'customer support tickets and inquiries'}
                  {' '}from this interface.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
                  Explore Features
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Admin Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Doctor verification approved for Dr. Lisa Wang</span>
              </div>
              <span className="text-sm text-gray-500">10 minutes ago</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">System backup completed successfully</span>
              </div>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-700">New doctor application received from Dr. Robert Chen</span>
              </div>
              <span className="text-sm text-gray-500">5 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;