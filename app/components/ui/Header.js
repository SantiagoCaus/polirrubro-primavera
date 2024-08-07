'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    {
        label: "Inicio",
        href: "/"
    },
    {
        label:"Nosotros",
        href: "/nosotros"
    },
    {
        label: "Contacto",
        href: "/contacto"
    }, 
    
]


const Header = () => {

    const pathname = usePathname()
    return (

    <header className='w-full bg-red-400'>

    <div className='container m-auto py-6 flex justify-between items-center'>
        <Link href={"/"}>
        
        <h1 className='text-white text-4xl my-3 py-2font-serif '>La Primavera🌸</h1>

        </Link>
        
        
<nav className='flex justify-between gap-2'>
        {
            links.map(link => {
                return <Link key={link.label}
                href={link.href}
                className={`${pathname === link.href ? 'font-extrabold' : ''}text-base text-slate-100 p-3`}
                >
                    
                
                {link.label}
                </Link>

                
            })
        }
</nav>
    </div>
    </header>
    )
}

export default Header