

import React from 'react'

const Boton = ({children, classname='', ...args}) => {
    return (
<button className={`rounded-xl py-3 px-3 bg-red-500 text-center text-black text-lg ${classname}`}{ ...args}>
    {children}
        

</button>
    )
}

export default Boton