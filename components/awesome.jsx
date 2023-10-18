import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCocktail, faGift, faFaceAngry, faDatabase, faGrinHearts, faBabyCarriage, faEye, faTShirt, faBacteria, faJar } from "@fortawesome/free-solid-svg-icons"

export default function Awesome() {
    const [count, setCount] = useState(0)
    const [iconID, setIconId] = useState(Math.floor(Math.random() * 10))

    const icons = [
        faCocktail, faGift, faFaceAngry, faDatabase, faGrinHearts, faBabyCarriage, faEye, faTShirt, faBacteria, faJar
    ]

    function timerCount() {
        processingClicks()
        setTimeout(() => {
            setIconId(Math.floor(Math.random() * 10))
        }, 3000
        )
    }

    function processingClicks() {
        setCount(count + 1);
    }
    useEffect(() => {
        return () => clearTimeout(timerCount)
    }, []
    )

    return (
        <>
            <FontAwesomeIcon icon={icons[iconID]} className='icon'/>
            <p>Вы нажали {count}</p>
            <button onClick={() => timerCount()}> Случайная иконка </button>
        </>
    )
}