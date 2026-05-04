import { useEffect, useState } from "react"


type HomeProps = {
    num: number,
    setNum: (num: number) => void
}

const CARRITO_ITEMS: {[x: string]: any}[] = [
    {
        id: "1",
        nom: "Gestor Pol",
        preu: 2.50
    },
    {
        id: "2",
        nom: "Ramen",
        preu: 2.50
    },
    {
        id: "3",
        nom: "Tesla",
        preu: 2.50
    }
]

export default function Home ({num, setNum}: HomeProps) {

    const [carrito, setCarrito] = useState<{[x: string]: any}[]>(localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito") as string) : [])

    const addToCarrito = (item: {[x: string]: any}) =>   {
        setCarrito([...carrito, item])
    }

    useEffect(() => {
        if (carrito.length === 0) return

        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])

    return (
        <div>
            {
                CARRITO_ITEMS.map(x => (
                    <div key={x.id}>
                        <p>{x.nom}</p>
                        <p>{x.preu}</p>
                        <button type="button" onClick={() => addToCarrito(x)} className="bg-amber-100 px-4 text-black">Añadir</button>
                    </div>
                ))
            }

            <div className="bg-amber-50 text-black mt-20 p-4">
                {
                    carrito.map((x, i) => (
                        <div key={i}>
                            <p>{x.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}