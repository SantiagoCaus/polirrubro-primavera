'use client'

import Boton from "./components/ui/Boton";
import { useRouter } from "next/navigation";

export default function NotFound () {
    const router = useRouter()
    return (
        <>
        <main className="container m-auto">
            <h1 className="text-4xl text-blue-600">Pagina no encontrada</h1>
        <hr/>

        <p className="text-base mt-4">
            La ruta que intentas acceder no existe
        </p>
        <Boton onClick={() => router.back()} classname="py-2 m-3">
            Volver
        </Boton>


        </main>
        
        
        </>
    )

    
}
