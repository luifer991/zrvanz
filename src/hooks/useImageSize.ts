import { useEffect, useState } from 'react'
import { imagesLarge, imagesMedium, imagesSmall } from './constants'

const useImageSize = (): string[] => {
    const [imageSize, setImageSize] = useState(imagesSmall)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setImageSize(imagesLarge)
            } else if (window.innerWidth >= 768) {
                setImageSize(imagesMedium)
            } else {
                setImageSize(imagesSmall)
            }
        }

        handleResize() // Verificar el tamaño de la pantalla al cargar la página
        window.addEventListener('resize', handleResize) // Agregar listener de redimensionamiento

        return () => {
            window.removeEventListener('resize', handleResize) // Limpiar el listener al desmontar el componente
        }
    }, [])

    return imageSize
}

export default useImageSize