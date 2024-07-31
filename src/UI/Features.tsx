import { Texts } from "../components/texts";
import '../components/styles/features.css'
import { images } from "../hooks/constants";


export function Features() {
    return (
        <>
            <Texts
                styles="feature__text"
                subtitle="Nuestros Productos"
                body="Descubre las características que hacen nuestras fragancias y velas especiales." />
            <div className="container">
                {images.map((image) => (
                    <section className={`img__container ${image.class}`} key={image.alt}>
                        <div className="image">
                            <img className="img__parfum" src={image.src} alt={image.alt} />
                        </div>
                        <h4>{image.title}</h4>
                        <p>{image.body}</p>
                    </section>
                ))}
            </div>
        </>
    )
}
