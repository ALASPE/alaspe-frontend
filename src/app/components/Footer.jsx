export default function App(){
    return(
        <>
        <div className="w-auto mx-32 flex flex-col gap-4">
            <div className="bg-white py-12 border-y-3 border-[#00afa0] flex flex-row justify-between text-[#324b8e]">
                <div className="flex flex-row gap-32">
                    <div>
                        <h1 className="font-black">Nosotros</h1>
                        <p>56 años</p>
                        <p>Identidad Corporativa</p>
                        <p>Atención a socios</p>
                        <p>Trabaja con nosotros</p>
                    </div>
                    <div>
                        <h1 className="font-black">Nuestros Socios</h1>
                        <p>Marina de Guerra del Perú</p>
                        <p>Ejercito Peruano</p>
                        <p>Fuerza Aérea del Perú</p>
                        <p>Caja de Pensión Militar Policial</p>
                    </div>
                </div>
                <div className="">
                    <h3 className="font-black">¿Necesitas ayuda?</h3>
                    <div className="flex flex-col gap-4 pt-2" >
                        <div>
                            <p className="font-bold text-md">Enviar e-mail</p>    
                            <p className="text-sm">Te responderemos lo antes posible</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Contáctanos</h4>
                            <p>988 400 963 / 471 5207 / 471 6022 / 471 7135</p>
                            <p>cooperativa@alaspe.com</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Ubicación</h4>
                            <p>Jr. Pachacútec 2052 - Jesús María - Lima</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <p className="text-[#324b8e] font-extrabold text-sm pb-4">© 2024 Alaspe | Todos los derechos reservados. Cooperativa de Servicios Múltiples Alas Peruanas. RUC 20101259448</p>
            </div>
        </div>
        </>
    );
}