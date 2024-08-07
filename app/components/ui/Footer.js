import Image from "next/image";
import React from 'react'

const Footer = () => {





    return (
    <footer className="w-full bg-red-500 border">
        <div className="container m-auto py-2 text-lg flex justify-between items-center">
            <p className="text-white">Desarrollado por Coderhouse</p>
<div className="flex items-center gap-2">
    <p>Powered By</p>
    <Image
    src={"/next.svg"}
    alt="Next logo"
    width={55}
    height={55}
    />
</div>
    </div>
    </footer>
    )
}

export default Footer