import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ContractDetailPage() {
  const { id } = useParams();
  const [contract, setContract] = useState(null);

  useEffect(() => {
    fetch('/contracts.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(c => c.id === id);
        setContract(found);
      });
  }, [id]);

  if (!contract) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{contract.name}</h1>
      <p><strong>Parties:</strong> {contract.parties}</p>
      <p><strong>Status:</strong> {contract.status}</p>
      <p><strong>Expiry:</strong> {contract.expiry}</p>

      <h2 className="mt-4 font-semibold">Clauses</h2>
      {contract.clauses?.map((clause, idx) => (
        <div key={idx} className="border p-2 my-2 rounded">
          <h3 className="font-bold">{clause.title}</h3>
          <p>{clause.summary}</p>
          <small>Confidence: {clause.confidence}</small>
        </div>
      ))}
    </div>
  );
}