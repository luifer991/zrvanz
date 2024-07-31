interface CardI {
    styles?: string
    image: string
    altText: string
    title: string
    body: string
}

export function Card({ ...props }: CardI) {
    return (
        <>
            <section className={props.styles}>
                <img src={props.image} alt={props.altText} />
                <h4>{props.title}</h4>
                <p>{props.body}</p>
            </section>
        </>
    )
}