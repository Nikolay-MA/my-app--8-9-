import React from 'react'
import { useState } from 'react'

export default function AddFrom({ setAdd, setTools, tools, lightOff ,garageOff}) {
    let [value, setVelue] = useState('')
    const regHandler1 = (e) => {
        e.preventDefault()
        setAdd(false)
        if (value==='') {
            value='Лампочка'
        }
        console.log(value);
        const obJ = {
            id: tools.length + 1,
            name: value,
            img: value === 'Лампочка' ? (lightOff ) : (garageOff),
            state: false,
        }
        setTools([...tools, obJ])
    }
    return (
        <form onSubmit={regHandler1}>
            <select value={value} onChange={(e) => {setVelue(e.target.value)}}>
                <option>Лампочка</option>
                <option>Гараж</option>
            </select>
            <button>Добавить</button>
        </form>
    )
}
