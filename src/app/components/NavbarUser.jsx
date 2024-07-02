import Image from 'next/image'
export default function NavbarUser(){
    return (
        <div className='bg-[#00afa0] pt-4 pb-2 px-3'>
            <Image
            src='/logo_blanco.png'
            width={200}
            height={200}
            />
        </div>
    );
}