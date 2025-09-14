import { useState } from 'react';

export default function UploadModal({ isOpen, onClose }) {
  const [files, setFiles] = useState([]);
  
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files).map(file => ({
      file,
      status: 'Uploading',
    }));

    setFiles(prev => [...prev, ...selectedFiles]);

    selectedFiles.forEach((fileObj, index) => {
      setTimeout(() => {
        setFiles(prevFiles =>
          prevFiles.map(f =>
            f.file === fileObj.file
              ? { ...f, status: 'Success' }
              : f
          )
        );
      }, 1500 + index * 1000);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Upload Files</h2>
        <input type="file" multiple onChange={handleFileChange} className="mb-4" />

        <div className="max-h-64 overflow-y-auto border p-2 rounded">
          {files.length === 0 ? (
            <p className="text-gray-500">No files uploaded yet.</p>
          ) : (
            files.map((f, idx) => (
              <div key={idx} className="flex justify-between items-center p-2 border-b">
                <span>{f.file.name}</span>
                <span
                  className={`text-sm ${
                    f.status === 'Success'
                      ? 'text-green-500'
                      : f.status === 'Error'
                      ? 'text-red-500'
                      : 'text-yellow-500'
                  }`}
                >
                  {f.status}
                </span>
              </div>
            ))
          )}
        </div>

        <div className="mt-4 flex justify-end">
          <button className="bg-gray-500 text-white px-4 py-2 rounded mr-2" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}