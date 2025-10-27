import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';
import PatientDashboard from './pages/PatientDashboard';
import FindDoctor from './pages/FindDoctor';
import Prescriptions from './pages/Prescriptions';
import DoctorDashboard from './pages/DoctorDashboard';
import PatientManagement from './pages/PatientManagement';
import CreatePrescription from './pages/CreatePrescription';
import ConsultationChat from './pages/ConsultationChat';
import DoctorAppointments from './pages/DoctorAppointments';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<PatientDashboard />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
        <Route path="/prescriptions" element={<Prescriptions />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/patient-management" element={<PatientManagement />} />
        <Route path="/create-prescription" element={<CreatePrescription />} />
        <Route path="/consultation" element={<ConsultationChat />} />
        <Route path="/doctor-appointments" element={<DoctorAppointments />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Layout>
  );
}

export default App;