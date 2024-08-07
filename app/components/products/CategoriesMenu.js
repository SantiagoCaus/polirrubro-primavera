"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const links = [
{label: "Todos", href: "/productos/todos",},
{ label: "Artesanias", href: "/productos/Artesanias",},
{label: "Vasos", href: "/productos/Vasos",},
{label: "helados", href: "/productos/helados",},

]



const CategoriesMenu = () => {
    const pathname = usePathname()

    return (

        <aside className='flex flex-col gap-3'>
            {links.map(link => (
            <Link
            key={link.label}
            href={link.href}
            className={`${pathname === link.href ? "font-semibold border-b" : ''} py-2`}
            >
            
            {link.label}
            </Link>
        ))}
        </aside>   
    )
}

export default CategoriesMenu

