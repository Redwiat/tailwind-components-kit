import React from 'react';
import copyToClipboard from '../utils/copyToClipboard';

const code = `<button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition">Button</button>`;

function Button() {
  return (
    <div className="mb-8">
      <h2 className="font-bold mb-2">Button</h2>
      <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition">
        Button
      </button>
      <pre className="bg-gray-100 rounded p-2 my-2 text-sm overflow-x-auto">{code}</pre>
      <button
        onClick={() => copyToClipboard(code)}
        className="text-xs bg-gray-800 text-white px-2 py-1 rounded hover:bg-gray-600"
      >
        Copy Code
      </button>
    </div>
  );
}

export default Button;
