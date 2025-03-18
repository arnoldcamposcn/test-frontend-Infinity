import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import Home from './components/Home';
import ProtectedRoute from './routes/ProtectedRoute';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/Home/*"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;

