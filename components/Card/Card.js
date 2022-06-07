import React from 'react'
import styles from './Card.module.css'
import { useRouter } from 'next/router'

export default function Card({ name, image, phone, id, email }) {
    const router = useRouter()
    return (
        <div className={styles.card}
            onClick={() => router.push(`/guns/${id}`)}>
            <div className={styles["card-header"]}></div>
            <img className={styles["card-img"]} src={image.url} alt={image.alt} />
            <div>
                <h3>{name}</h3>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </div>

    )
}
