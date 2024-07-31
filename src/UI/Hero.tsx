import CarouselBackground from '../components/Carrousel'
import Menu from '../components/menu'
import { NavBar } from '../components/NavBar'
import '../components/styles/styles.css'

export default function Hero() {
    return (
        <>
            <Menu />
            <CarouselBackground >
                <NavBar />
                <div className="hero">
                    <div className='hero__text'>
                        <h1 className='hero__title'>Personaliza tu Aroma</h1>
                        <p className='hero__body'>Descubre tu aroma único con nuestras fragancias exclusivas. Personaliza cada detalle y dale un toque personal.</p>
                    </div>
                    <button className='cta__hero__btn'>Comprar Ahora</button>
                </div>
            </CarouselBackground >
        </>

    )
}