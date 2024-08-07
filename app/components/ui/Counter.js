'use client'

import Boton from './Boton'

const Counter = ({counter, setCounter, max}) => {

    

    const increase = () => counter < max && setCounter(counter + 1)//sumando en 1 el estado
    
    const decrease = () => counter > 1 && setCounter(counter - 1)//restando en 1 el estado
        
    return (
    <div className='flex items-center gap-3'>
        <Boton onClick = {decrease} classname='active:bg-red-500' > - </Boton>
    <p>{counter}</p>
        <Boton onClick= {increase} classname='active:bg-red-500'> + </Boton>
    </div>
    )
}

export default Counter