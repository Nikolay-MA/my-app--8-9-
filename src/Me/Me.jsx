//rfc - лутще
//sfc
import React from 'react'

export default function Me({ cookie }) {
    return (
        <>
            {cookie && <h1>Здравствуйте, господин {cookie} !</h1>}
        </>
    )
}
