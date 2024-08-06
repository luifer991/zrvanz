import { useEffect, useState } from 'react'

const url = new URL('https://66a3994f44aa63704581d661.mockapi.io/api/products/fragrances')
url.searchParams.append('page', '1')
url.searchParams.append('limit', '8')

// Define la interfaz para el producto
interface Fragrance {
    id: string
    product_name: string
    image: string
    price: string
    description: string
    stock: boolean
    popularity: number
}

// Define la interfaz para el estado del hook
interface UseFragrancesState {
    fragrances: Fragrance[]
    loading: boolean
    error: string | null
}

export const useFragrances = (): UseFragrancesState => {
    const [fragrances, setFragrances] = useState<Fragrance[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        setLoading(true)
        setError(null)

        fetch(url,{
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).then(async res => {
            if (!res.ok) throw new Error('Error al obtener los datos')
            return await res.json()
        }).then(res => {
            setFragrances(res)
        }).catch(err => {
            setError(err.message)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    return { fragrances, loading, error }
};