interface TitleI {
    styles: string
    subtitle: string
    body: string
}

export function Texts({ styles, subtitle, body }: TitleI ): JSX.Element {
    return (
        <main className={styles} >
            <h2>{subtitle}</h2>
            <p>{body}</p>
        </main>
    )
}