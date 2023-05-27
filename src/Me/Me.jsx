//rfc - лутще
//sfc

export default function Me({ cookie }) {
    return (
        <>
            {cookie && <h1>Здравствуйте, господин {cookie} !</h1>}
        </>
    )
}
