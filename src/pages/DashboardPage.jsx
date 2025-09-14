import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UploadModal from '../components/UploadModal';

export default function DashboardPage() {
  const [contracts, setContracts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  useEffect(() => {
    fetch('/contracts.json')
      .then(res => res.json())
      .then(data => {
        setContracts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredContracts = contracts.filter(
    c =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.parties.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (contracts.length === 0) return <p>No contracts yet.</p>;

  return (
    <div className="p-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4" onClick={() => setIsUploadOpen(true)}>Upload Contracts</button>

      <UploadModal isOpen={isUploadOpen} onClose={() => setIsUploadOpen(false)} />

      <input type="text" placeholder="Search by name or parties" className="p-2 border rounded w-full mb-4" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Parties</th>
            <th className="border p-2">Expiry</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Risk</th>
          </tr>
        </thead>
        <tbody>
          {filteredContracts.map(contract => (
            <tr key={contract.id}>
              <td className="border p-2">
                <Link to={`/contract/${contract.id}`} className="text-blue-600">{contract.name}</Link>
              </td>
              <td className="border p-2">{contract.parties}</td>
              <td className="border p-2">{contract.expiry}</td>
              <td className="border p-2">{contract.status}</td>
              <td className="border p-2">{contract.risk}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}