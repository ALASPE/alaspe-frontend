'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function App() {
  const [menu, setMenu] = React.useState();

  return (
    <>
    <div>
      <div>
        <ul className="hidden lg:flex flex-row justify-between px-20 bg-[#00afa0] pt-2 pb-1 gap-2">
          <li>Accede a un préstamo a sola firma y podrás realizar tu proyecto</li>
          <li>•</li>
          <li>Préstamos de hasta el 80% de tu aporte</li>
          <li>•</li>
          <li>No necesitas garante</li>
          <li>•</li>
          <li>Tasa de interés mensual de 1%</li>
        </ul>
      </div>
      <div className="bg-white flex flex-row justify-between px-3 py-3 items-center text-[#0089b7]">
        <div>
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={250} height={250}/>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <ul className="flex flex-row gap-3 font-bold">
                <Link href="/servicios" className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">Servicios</Link>
                <Link href="/promociones" className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">Promociones</Link>
                <Link href="/noticias" className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">Noticias</Link>
                <Link href="/transparencia" className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 text-[#f0595e]">Transparencia</Link>
                <Link href="/servicios" className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">Ayuda Digital</Link>
            </ul>
          </div>
          <div className="pt-2">
            <ul className="flex flex-row gap-4">
              <div className="rounded-full py-1 px-1 bg-gradient-to-r from-[#0089b7] to-[#00afa0]">
                <div className="bg-white rounded-full py-1 px-3">
                  <Link href="/login" className="">Accede a tu cuenta</Link>
                </div>
              </div>
              <div className="rounded-full py-1 px-1 bg-gradient-to-r from-[#0089b7] to-[#00afa0]">
                <div className="bg-white rounded-full py-1 px-3">
                  <Link href="/login">Quiero ser socio</Link>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
