'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // Función para manejar el submit del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Realizar la petición de login
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Si el login es exitoso, redirigir al dashboard
      router.push('/admin/dashboard');
    } else {
      // Mostrar el error en caso de fallo
      setError(data.error || 'Ocurrió un error al intentar iniciar sesión');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <form onSubmit={handleSubmit} className="p-8 bg-white shadow-lg rounded-lg w-96">
        <h2 className="text-2xl text-gray-700 font-semibold mb-4 text-center">Login de Administrador</h2>

        {/* Campo para el nombre de usuario */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Usuario</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          />
        </div>

        {/* Campo para la contraseña */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          />
        </div>

        {/* Mostrar error si ocurre */}
        {error && <p className="text-red-500 text-sm">{error}</p>}
        
        {/* Botón de envío */}
        <button
          type="submit"
          className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Iniciar sesión
        </button>
      </form>
    </div>

  );
}
