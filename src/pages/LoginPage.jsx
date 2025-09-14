import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (login(username, password)) {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h1 className="text-xl mb-4">Login</h1>
        <input type="text" placeholder="Username" className="w-full p-2 mb-4 border rounded" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin} className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
      </div>
    </div>
  );
}