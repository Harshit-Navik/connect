import React, { useState } from 'react';

const CreatePrescription = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    diagnosis: '',
    medicines: [{ name: '', dosage: '', frequency: '' }],
    notes: ''
  });

  // Mock patient data for dropdown
  const patients = [
    { id: 'P001', name: 'Alice Johnson' },
    { id: 'P002', name: 'Robert Smith' },
    { id: 'P003', name: 'Emily Davis' },
    { id: 'P004', name: 'Michael Brown' },
    { id: 'P005', name: 'Sophie Wilson' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMedicineChange = (index, field, value) => {
    const updatedMedicines = [...formData.medicines];
    updatedMedicines[index][field] = value;
    setFormData(prev => ({
      ...prev,
      medicines: updatedMedicines
    }));
  };

  const addMedicine = () => {
    setFormData(prev => ({
      ...prev,
      medicines: [...prev.medicines, { name: '', dosage: '', frequency: '' }]
    }));
  };

  const removeMedicine = (index) => {
    if (formData.medicines.length > 1) {
      const updatedMedicines = formData.medicines.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        medicines: updatedMedicines
      }));
    }
  };

  const handleGeneratePDF = (e) => {
    e.preventDefault();
    console.log('Generating PDF with data:', formData);
    // Mock PDF generation
    alert('PDF generated successfully! (Mock)');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create Prescription
          </h1>
          <p className="text-gray-600">
            Create and manage prescriptions for your patients.
          </p>
        </div>

        {/* Prescription Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <form onSubmit={handleGeneratePDF} className="space-y-6">
            {/* Patient Selection */}
            <div>
              <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 mb-2">
                Patient Name
              </label>
              <select
                id="patientName"
                name="patientName"
                value={formData.patientName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a patient</option>
                {patients.map(patient => (
                  <option key={patient.id} value={patient.name}>
                    {patient.name} ({patient.id})
                  </option>
                ))}
              </select>
            </div>

            {/* Diagnosis */}
            <div>
              <label htmlFor="diagnosis" className="block text-sm font-medium text-gray-700 mb-2">
                Diagnosis
              </label>
              <input
                type="text"
                id="diagnosis"
                name="diagnosis"
                value={formData.diagnosis}
                onChange={handleInputChange}
                placeholder="Enter diagnosis"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Medicines & Dosage */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Medicines & Dosage
              </label>
              <div className="space-y-4">
                {formData.medicines.map((medicine, index) => (
                  <div key={index} className="flex space-x-4 items-start">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Medicine name"
                        value={medicine.name}
                        onChange={(e) => handleMedicineChange(index, 'name', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Dosage (e.g., 500mg)"
                        value={medicine.dosage}
                        onChange={(e) => handleMedicineChange(index, 'dosage', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Frequency (e.g., 3 times daily)"
                        value={medicine.frequency}
                        onChange={(e) => handleMedicineChange(index, 'frequency', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    {formData.medicines.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeMedicine(index)}
                        className="px-3 py-2 text-red-600 hover:text-red-800"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={addMedicine}
                className="mt-3 flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Another Medicine
              </button>
            </div>

            {/* Notes for Patient */}
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                Notes for Patient (Optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                rows="4"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Enter any additional notes or instructions for the patient..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Example Prescription Preview */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-sm font-medium text-blue-800 mb-2">Example Format:</h3>
              <div className="text-sm text-blue-700 space-y-1">
                <p><strong>Amoxicillin 500mg</strong> - 1 tablet three times a day for 7 days</p>
                <p><strong>Paracetamol 500mg</strong> - as needed for fever/pain (max 4 tablets/day)</p>
                <p className="text-blue-600 italic">Advised patient to rest, stay hydrated, and avoid irritants. Follow up in 7 days or if symptoms worsen.</p>
              </div>
            </div>

            {/* Generate PDF Button */}
            <div className="flex justify-end pt-6 border-t border-gray-200">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Generate PDF
              </button>
            </div>
          </form>
        </div>

        {/* Recent Prescriptions Quick Access */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Prescriptions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-900">Jane Doe</h4>
                  <p className="text-sm text-gray-600">Acute Bronchitis</p>
                  <p className="text-xs text-gray-500">Today</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Active</span>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-900">John Smith</h4>
                  <p className="text-sm text-gray-600">Hypertension</p>
                  <p className="text-xs text-gray-500">2 days ago</p>
                </div>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePrescription;