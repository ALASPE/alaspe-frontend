'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import BurguerButton from "./BurguerBotton";
import styled from "styled-components"

export default function App() {
  const [clicked, setClicked] = React.useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }

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
            <ul className="hidden lg:flex flex-row gap-3 font-bold">
                <Link href="/servicios" className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">Servicios</Link>
                <Link href="/promociones" className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">Promociones</Link>
                <Link href="/noticias" className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">Noticias</Link>
                <Link href="/transparencia" className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 text-[#f0595e]">Transparencia</Link>
                <Link href="/servicios" className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">Ayuda Digital</Link>
            </ul>
            <div className="flex lg:hidden">
            <NavContainer>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <Link onClick={handleClick} href="/servicios">Servicios</Link>
          <Link onClick={handleClick} href="/promociones">Promociones</Link>
          <Link onClick={handleClick} href="/noticias">Noticias</Link>
          <Link onClick={handleClick} href="#transparencia">Transparencia</Link>
          <Link onClick={handleClick} href="/servicios">Ayuda Digital</Link>
          <Link onClick={handleClick} href="/login">Iniciar Sesión</Link>
          <Link onClick={handleClick} href="/login">Quiero ser socio</Link>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
            </div>
          </div>
          <div className="pt-2">
            <ul className="hidden lg:flex flex-row gap-4">
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

const NavContainer = styled.nav`
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 1024px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 1024px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #0089b7;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`