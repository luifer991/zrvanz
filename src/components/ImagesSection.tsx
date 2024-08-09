import fragrance1 from '/contact_fragrance1.svg'
import fragrance2 from '/fragrance-blue.svg'
import fragrance3 from '/fragrance-red.svg'
import '../components/styles/imagesection.css'

export default function ImagesSection() {
    return (
        <>
            <section className='image__section'>
                <img id='img' src={fragrance2} alt="fragrance blue" />
                <div className='img__section2'>
                    <img src={fragrance1} alt="fragrance red" />
                    <img src={fragrance3} alt="fragrance red with flowers" />
                </div>
            </section>
        </>
    )
}
