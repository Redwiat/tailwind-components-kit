import React from 'react';
import copyToClipboard from '../utils/copyToClipboard';

const code = `<div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img className="w-full" src="https://source.unsplash.com/random/400x200" alt="Card" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Card Title</div>
    <p className="text-gray-700 text-base">
      A simple Tailwind CSS card component.
    </p>
  </div>
</div>`;

function Card() {
  return (
    <div className="mb-8">
      <h2 className="font-bold mb-2">Card</h2>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full" src="https://source.unsplash.com/random/400x200" alt="Card" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Card Title</div>
          <p className="text-gray-700 text-base">
            A simple Tailwind CSS card component.
          </p>
        </div>
      </div>
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

export default Card;
