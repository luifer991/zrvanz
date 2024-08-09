
export default function ContactsFrom() {
    return (
        <>
            <form action="" method="post">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
