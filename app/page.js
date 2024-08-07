import Counter from "./components/ui/Counter";
import Image from "next/image";
// import Footer from "./components/ui/Footer";

//Trabajamos el Seo de nuestra pagina
export const metadata = {
  title: 'My Next.js App',
  description: 'A Next.js application example',
  keywords: ['Coderhouse', 'NEXTJS', 'Vercel', 'SSR'],
  openGraph: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
    type: 'article',
    publishedTime: '2023-01-01T00:00:00.000Z',
    authors: ['Coderhouse']
  }
};

export default function Home() {
  return (
    <>
    
    <main className="container m-auto">
      <h1 className="text-4xl text-blue-600 text-bold my-4" >Next JS </h1>
      <hr/>
      
      <Counter/>
        {/* <Image
      src= {"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"}
      alt="Pikachu img"
      width={200}
      height={200}

      /> */}


      {/* <Image
      src={"/package.png"}
      alt="package"
      width={300}
      height={300}
      priority
      /> */}

    </main>
    
    </>
      
  )
}

//funcion asincronica genera mas dinamico
// export async function generateMetadata ({params, searchParams}, parent){
//   const id = params.id

//   const product = await fetch(`https://....../${id} `)
//   .then((res) =>res.json())

//   return{
//     title: product.title,
//     description:product.description
//   }
// }

// MetaData : sirve para trabajar el Seo de nuestra pagina
