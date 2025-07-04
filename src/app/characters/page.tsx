'use client';

import { useEffect, useState } from 'react';
import { getCharacterNames } from '@/services/getCharacters';

export default function CharacterNames() {
  const [names, setNames] = useState<string[]>([]);

  useEffect(() => {
    getCharacterNames()
      .then((data) => setNames(data.slice(0, 50)))
      .catch(console.error);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Primeros 50 personajes</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-yellow-400 bg-white text-sm text-left text-gray-700 shadow-md">
          <thead className="bg-yellow-200 text-gray-900">
            <tr>
              <th className="px-4 py-2 border border-yellow-300">#</th>
              <th className="px-4 py-2 border border-yellow-300">Nombre</th>
            </tr>
          </thead>
          <tbody>
            {names.map((name, index) => (
              <tr key={index} className="hover:bg-yellow-50">
                <td className="px-4 py-2 border border-yellow-300">{index + 1}</td>
                <td className="px-4 py-2 border border-yellow-300">{name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
