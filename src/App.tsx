import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidebar from './componets/Sidebar';
import { AuthProvider, useAuth } from './AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/*"
            element={<PrivateRouteWrapper />}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

const PrivateRouteWrapper: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sale" element={<h1>Sales</h1>} />
        <Route path="/product" element={<h1>Products</h1>} />
        <Route path="/report" element={<h1>Reports</h1>} />
        <Route path="/customer" element={<h1>Customers</h1>} />
        <Route path="/statistic" element={<h1>Statistics</h1>} />
      </Routes>
    </Sidebar>
  ) : (
    <Navigate to="/login" />
  );
};

export default App;
