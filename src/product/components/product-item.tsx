import React from 'react'
import { deleteProduct, toggleIsSoldProduct } from '../product.store'
import { Product } from '../product.type'

interface ProductItemProps {
    p: Product
}

export const ProductItem = ({ p }: ProductItemProps) => {
    return (
        <li className="grid">
            <article>
                <header>
                    <h2>{p.title}</h2>
                    <p>{p.description}</p>
                    <img
                        src={p.image}
                        alt={p.title}
                        style={{
                            width: '150px',
                        }}
                    />
                </header>
                <footer className="grid">
                    <fieldset>
                        <legend>Is sold ?</legend>
                        <input
                            type="checkbox"
                            role="switch"
                            onChange={() => toggleIsSoldProduct(p)}
                        />
                    </fieldset>
                    <button onClick={() => deleteProduct(p)}>Delete</button>
                </footer>
            </article>
        </li>
    )
}
