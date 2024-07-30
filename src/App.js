import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Authentication/SignUp';
import Login from './Authentication/Login';
import Sidebar from './Dashboard/Sidebar';
import Dashboard from './Dashboard/Dashboard';
import StackingIncome from './Bonus/StakingIncome'
import Forget from './Authentication/Forget';
import Private from './Private/Private';
import { AuthProvider } from './Authentication/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Private routes */}
          <Route element={<Private />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/staking_income" element={<StackingIncome />} />
          </Route>

          {/* Public routes */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forget" element={<Forget />} />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
