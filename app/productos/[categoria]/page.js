

import CategoriesMenu from "@/app/components/products/CategoriesMenu"
import ProductsList from "@/app/components/products/ProductsList"
export async function generateMetaData ({params,searchParams} , parent) {

    return{
        title: `CoderHouse - ${params.categoria}`,
    }

}


const Productos = ({params}) => {
const {categoria} = params
    console.log(params)

    return(
        
        <main className="container m-auto">

        <h2 className="text-2xl my-10 border-b pb-4">Productos</h2>
        <div className="flex gap-10">
            <CategoriesMenu/>
            <ProductsList categoria={categoria}/>
        </div>

        </main>
    )

}

export default Productos