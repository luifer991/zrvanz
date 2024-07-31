import { useEffect, useState } from 'react';
import axios from 'axios';
import { Texts } from '../components/texts';

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
    fragrances: Fragrance[];
    loading: boolean;
    error: string | null;
}

const useFragrances = (): UseFragrancesState => {
    const [fragrances, setFragrances] = useState<Fragrance[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFragrances = async () => {
            try {
                const response = await axios.get<Fragrance[]>('https://66a3994f44aa63704581d661.mockapi.io/api/products/fragrances');
                setFragrances(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching fragrances');
                setLoading(false);
            }
        };

        fetchFragrances();
    }, []);

    return { fragrances, loading, error };
};


export function Products() {

    const { fragrances, loading, error } = useFragrances();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <Texts
                styles="text__container"
                subtitle="Productos Destacados"
                body="Explora nuestra gama de perfumes, velas y productos de cuidado personal. Cada uno hecho a la medida para ti."
            />
            <ul>
                {fragrances.map(f => (
                    <section key={f.id}>
                        <li>{f.product_name}</li>
                        <img src={f.image} alt={f.product_name} />
                        <li>${f.price}</li>
                        <li>{f.stock}</li>
                    </section>
                ))}
            </ul>
        </>

    )
}