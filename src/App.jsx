import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ContractDetailPage from './pages/ContractDetailPage';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { token } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={token ? <Navigate to="/dashboard" /> : <LoginPage />} />
      <Route path="/dashboard" element={token ? <DashboardPage /> : <Navigate to="/" />} />
      <Route path="/contract/:id" element={token ? <ContractDetailPage /> : <Navigate to="/" />} />
    </Routes>
  );
}

export default App;