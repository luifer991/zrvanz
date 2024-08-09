import fragrance1 from '/contact_fragrance1.svg'
import fragrance2 from '/fragrance-blue.svg'
import fragrance3 from '/fragrance-red.svg'

export default function ImagesSection() {
    return (
        <>
            <section>
                <img src={fragrance1} alt="fragrance red" />
                <img src={fragrance2} alt="fragrance blue" />
                <img src={fragrance3} alt="fragrance red with flowers" />
            </section>
        </>
    )
}
