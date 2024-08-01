import { useEffect, useState } from 'react';
import axios from 'axios';

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

export const useFragrances = (): UseFragrancesState => {
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