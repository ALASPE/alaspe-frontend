'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [DNI, setDNI] = useState('');
  const [Password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!DNI || !Password) {
      setMessage('Por favor, complete ambos campos');
      return;
    }

    const userData = { DNI, Password };

    try {
      const response = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setMessage(errorData.message || 'Error al iniciar sesión');
        return;
      }

      const data = await response.json();
      if (data.message === 'Inicio de sesión exitoso') {
        setMessage('Usuario válido');
        router.push(data.redirectUrl);
      } else {
        setMessage(data.message || 'Usuario no válido');
      }
    } catch (error) {
      setMessage('Error al iniciar sesión, revise su conexión de internet');
    }
  };

  return (
    <div className="bg-[#00AFA0] h-screen flex justify-center items-center text-white flex-col">
      <div className="flex flex-col justify-center items-center p-4">
        <Image
          src="/logo_blanco.png"
          width={300}
          height={800}
          alt="Logo Alaspe"
          className=''
        />
        <h1 className='flex justify-center pt-5 text-xl'>Acceso a Intranet</h1>
        <form className="flex flex-col px-20 pt-5" onSubmit={handleSubmit}>
          <input
            id="DNI"
            value={DNI}
            onChange={(event) => setDNI(event.target.value)}
            className="w-full bg-white py-3 pr-40 pl-5 rounded text-gray-500"
            placeholder="Número de CIP / NSA"
            required
          />
          <input
            type="password"
            id="Password"
            value={Password}
            onChange={(event) => setPassword(event.target.value)}
            className="bg-white mt-4 py-3 pr-40 pl-5 rounded text-gray-500"
            placeholder="Contraseña"
            required
          />
          <p className="flex justify-end mt-3 mb-10">¿Olvidaste tu contraseña?</p>
          <button className="bg-white hover:bg-sky-200 active:bg-white focus:outline-none focus:ring focus:ring-white-300 rounded py-2 text-[#00AFA0]" type="submit">
            Iniciar sesión
          </button>
          <p className="mt-3 mb-5 text-sm">{message}</p>
        </form>
      </div>
      <p className='text-sm flex w-96 p-4 text-center'>Estimado Usuario si es socio de la Cooperativa de Servicios Múltiples Alas Peruanas, usted puede tener acceso a Intranet desde esta pagina con solo ingresar su Número de CIP / NSA dentro de la casilla de Usuario.</p>
    </div>
  );
}