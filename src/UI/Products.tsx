import { Texts } from '../components/texts';
import '../components/styles/products.css'
import { useFragrances } from '../hooks/useFragances';

export function Products() {

    const { fragrances, loading, error } = useFragrances();

    if (loading) {
        return <div>Loading...</div>
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
            <ul className='container__list'>
                {fragrances.map(f => (
                    <section key={f.id} className='card__container'>
                        <img src={f.image} alt={f.product_name} />
                        <div className='li'>
                            <li>{f.product_name}</li>
                            <li>${f.price}</li>
                            <li>{f.popularity}</li>
                        </div>
                    </section>
                ))}
            </ul>
            <div className='container__btn'>
                <a href="#" className='more__btn'>ver más</a>
            </div>
        </>

    )
}