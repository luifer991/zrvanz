import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './styles/carrousel.css'// Archivo CSS para estilos adicionales
import useImageSize from '../hooks/useImageSize'
import { settings } from '../components/settings/sliderSettings'

function CarouselBackground({ children }: React.PropsWithChildren) {
    const images: string[] = useImageSize()

    return (
        <div className="carousel-background">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <div
                            className="carousel-image"
                            style={{ backgroundImage: `url(${image})` }} >
                                {children}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default CarouselBackground

