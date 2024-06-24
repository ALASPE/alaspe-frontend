'use client'

import React, { useState } from 'react';
import Image from 'next/image';

export default function Login() {
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = { code, password };
    fetch('http://localhost:5566', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.valid) {
          setMessage('Usuario válido');
        } else {
          setMessage('Usuario no Válido');
        }
      })
      .catch(error => {
        setMessage('Error al iniciar sesión, revise su conexión de internet');
      });
  };

  return (
    <div className="bg-[#00AFA0] h-screen flex justify-center items-center text-white flex-col">
      <div className="flex flex-col justify-center items-center p-4">
        <Image
        src="/logo.png"
        width={300}
        height={800}
        alt="Logo Alaspe"
        className=''
        />
        <h1 className='flex justify-center pt-5 text-xl'>Acceso a Intranet</h1>
        <form className="flex flex-col px-20 pt-5" onSubmit={handleSubmit}>
          <input
            id="code"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            className="w-full bg-white py-3 pr-40 pl-5 rounded text-gray-500"
            placeholder="Número de CIP / NSA"
          />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="bg-white mt-4 py-3 pr-40 pl-5 rounded text-gray-500"
            placeholder="Contraseña"
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